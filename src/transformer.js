import React from 'react';
import ReactDOM from 'react-dom/client';
import Architecture from './neural-network/architecture';

// General Properties
const color= '053061';
const vBoxSizeW = '400';
const vBoxSizeH = '80';
const y_gap = 25;
let layer_height = 30;
let layer_width = 1;

// Compute the positioning of the encoders and the decoders
let coder_width = 3;
let coder_height = 7;
const coder_x_gap = 5;
const r = '3px 3px'

const x1 = 50 - (coder_width / 2 + coder_x_gap)
const x3 = 50 + coder_width / 2 + coder_x_gap

const y1 = 50 - (y_gap / 2 + coder_height)
const y2 = 50 + y_gap / 2

const enc_x = [x1, 50 , x3].map(item => `${item}%`).join(' ');
const enc_y = [y1, y2].map(item => `${item}%`).join(' ');

// Compute the positioning of the embedding layer
const emb_x_gap = 2;
const emb_x = `${x1 - emb_x_gap - layer_width}%`;
const emb_y = `${50 - (coder_height + layer_height + y_gap) / 2}%`;

// Compute the positioning of the output layer
const out_x_gap = 2;
const out_x = `${x3 + out_x_gap + coder_width}%`;
const out_y = `${y2 + coder_height / 2 - layer_height / 2}%`;

// Define Arrow Properties
const headSize = 3;

// Finalize Properties
coder_width += '%';
coder_height += '%';
layer_height += '%';
layer_width += '%';

const root = ReactDOM.createRoot(document.getElementById('arch'));
root.render(
  <Architecture vBoxSizeW={vBoxSizeW} vBoxSizeH={vBoxSizeH}  // BASE Canvas
                coder_width={coder_width} coder_height={coder_height} // Encoder and Decoder Params
                enc_x={enc_x} enc_y={enc_y} color={color} r={r}
                layer_width={layer_width} layer_height={layer_height} // Embedding Layer Params
                emb_x={emb_x} emb_y={emb_y}
                out_x={out_x} out_y={out_y}                           // Output Layer Params
                headSize={headSize}/>   // Arrow Properties
);
