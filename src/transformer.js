import React from 'react';
import ReactDOM from 'react-dom/client';
import Architecture from './neural-network/architecture';
import './neural-network/app.css';



const root = ReactDOM.createRoot(document.getElementById('arch'));
root.render(
  <Architecture renderElem={"root"}/>   // Arrow Properties
);
