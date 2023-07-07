# The code is repurposed from https://huggingface.co/docs/transformers/tasks/translation

from datasets import load_dataset
from transformers import AutoTokenizer, DataCollatorForSeq2Seq, AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer
import evaluate
import numpy as np

checkpoint = "t5-small"
source_lang = "en"
target_lang = "es"
prefix = "translate English to Spanish: "
metric_type = "sacrebleu"
LEARNING_RATE = 2e-5
TRAIN_BATCH_SIZE = 16
EVAL_BATCH_SIZE = 16
WEIGHT_DECAY = 0.01
SAVE_TOTAL_LIMIT = 3
NUM_TRAIN_EPOCHS = 2

# Load the dataset
opus100 = load_dataset("opus100", f"{source_lang}-{target_lang}")
opus100 = opus100["train"].train_test_split(test_size=0.2)

# Load the tokenizer
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
metric = evaluate.load(metric_type)

def preprocess_function(examples):
  # Prefix for tranlation is added in the beginning to the source text
  inputs = [prefix + example[source_lang] for example in examples["translation"]]
  targets = [example[target_lang] for example in examples["translation"]]
  model_inputs = tokenizer(inputs, text_target=targets, max_length=128, truncation=True)

  return model_inputs


def postprocess_text(preds, labels):

  # Post-processing: remove unnecessary whitespaces and combine bpe tokens
  preds = [pred.strip() for pred in preds]
  labels = [[label.strip()] for label in labels]

  return preds, labels

def compute_metrics(eval_preds):
  preds, labels = eval_preds
  if isinstance(preds, tuple):
    preds = preds[0]
  decoded_preds = tokenizer.batch_decode(preds, skip_special_tokens=True)

  labels = np.where(labels != -100, labels, tokenizer.pad_token_id)
  decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=True)

  decoded_preds, decoded_labels = postprocess_text(decoded_preds, decoded_labels)

  result = metric.compute(predictions=decoded_preds, references=decoded_labels)
  result = {"bleu": result["score"]}

  prediction_lens = [np.count_nonzero(pred != tokenizer.pad_token_id) for pred in preds]
  result["gen_len"] = np.mean(prediction_lens)
  result = {k: round(v, 4) for k, v in result.items()}
  return result

# Tokenize the dataset and define data_collator
tokenized_opus = opus100.map(preprocess_function, batched=True)
data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=checkpoint)

# Load the model and define the training arguments
model = AutoModelForSeq2SeqLM.from_pretrained(checkpoint)

training_args = Seq2SeqTrainingArguments(
    output_dir="opus100-ckpt",
    evaluation_strategy="epoch",
    learning_rate=LEARNING_RATE,
    per_device_train_batch_size=TRAIN_BATCH_SIZE,
    per_device_eval_batch_size=EVAL_BATCH_SIZE,
    weight_decay=WEIGHT_DECAY,
    save_total_limit=SAVE_TOTAL_LIMIT,
    num_train_epochs=NUM_TRAIN_EPOCHS,
    predict_with_generate=True,
    fp16=True,
    report_to="none",
    push_to_hub=False,
)

trainer = Seq2SeqTrainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_opus["train"],
    eval_dataset=tokenized_opus["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
    compute_metrics=compute_metrics,
)

# Train the model
trainer.train()
