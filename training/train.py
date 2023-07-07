import torch
import torch.nn as nn
from fine_tuning import opus100

D_MODEL = 512
N_LAYERS = 3
N_HEADS = 3
DIM_FEEDFORWARD = 2048
DROPOUT = 0.1

# Define model
distilTransformer = nn.Transformer(d_model=D_MODEL, nhead=N_HEADS, num_encoder_layers=N_LAYERS,
                                   num_decoder_layers=N_LAYERS, dim_feedforward=DIM_FEEDFORWARD, dropout=DROPOUT)

# Define input
print(opus100["train"][0])

