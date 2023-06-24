import React from 'react';
import ReactDOM from 'react-dom/client';
import Architecture from './neural-network/architecture';

const width = '15%';
const height = '30%';
const x= '10% 30% 60%';
const y= '15% 45%';
const color= '053061';

const root = ReactDOM.createRoot(document.getElementById('arch'));
root.render(
  <Architecture width={width} height={height} x={x} y={y} color={color}/>
);
