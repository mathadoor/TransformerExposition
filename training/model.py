from transformers import PretrainedConfig, PreTrainedModel
from torch import nn


class TinyTransformer(PreTrainedModel):
  def __init__(self, config: PretrainedConfig):
    super().__init__(config)
    self.model = nn.Transformer(
      d_model=config.d_model,
      nhead=config.nhead,
      num_encoder_layers=config.num_encoder_layers,
      num_decoder_layers=config.num_decoder_layers,
      dim_feedforward=config.dim_feedforward,
      dropout=config.dropout,
      activation=config.activation,
      custom_encoder=None,
      custom_decoder=None,
      batch_first=config.batch_first,
    )

    self.embeddings = nn.Embedding(config.vocab_size, config.d_model)
    self.linear = nn.Linear(config.d_model, config.vocab_size)

  def forward(self, input_ids, attention_mask=None, decoder_input_ids=None, decoder_attention_mask=None, head_mask=None,
              decoder_head_mask=None, encoder_outputs=None, decoder_outputs=None, return_dict=None):

    src = self.embeddings(input_ids)
    tgt = self.embeddings(decoder_input_ids)
    print(src.shape, tgt.shape)
    outputs = self.model(src=src, tgt=tgt, src_mask=None, tgt_mask=None, memory_mask=None, src_key_padding_mask=None,
                        tgt_key_padding_mask=None, memory_key_padding_mask=None)
    # outputs = self.model(src=input_ids, attention_mask=attention_mask, tgt=decoder_input_ids,
    #                      decoder_attention_mask=decoder_attention_mask, head_mask=head_mask,
    #                      decoder_head_mask=decoder_head_mask,
    #                      encoder_outputs=encoder_outputs, decoder_outputs=decoder_outputs, return_dict=return_dict)

    logits = self.linear(outputs[0])

    return logits


class TinyTransformerConfig(PretrainedConfig):
  def __init__(self,
               vocab_size=1000,
               d_model=128,
               nhead=4,
               num_encoder_layers=3,
               num_decoder_layers=3,
               dim_feedforward=512,
               dropout=0.1,
               activation="relu",
               pad_token_id=0,
               bos_token_id=1,
               eos_token_id=2,
               batch_first=True,
               **kwargs):
    super().__init__(pad_token_id=pad_token_id, bos_token_id=bos_token_id, eos_token_id=eos_token_id, **kwargs)
    self.vocab_size = vocab_size
    self.d_model = d_model
    self.nhead = nhead
    self.num_encoder_layers = num_encoder_layers
    self.num_decoder_layers = num_decoder_layers
    self.dim_feedforward = dim_feedforward
    self.dropout = dropout
    self.activation = activation
    self.batch_first = batch_first

