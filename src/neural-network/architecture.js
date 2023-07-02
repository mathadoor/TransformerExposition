import React from 'react';

import Encoder from './encoder';
import InputEmbedding from "./input-embedding";
import OutputLayer from "./output-layer";
import Decoder from "./decoder";
import Input from "./input";
import OutputEmbedding from "./output-embedding";
import Output from "./output";
import Arrow from "./arrow";


const baseLayerHeight = 30;
const baseLayerWidth = 2;

const baseCoderHeight = 7;
const baseCoderWidth = 4;

const baseInputHeight = 15;
const baseInputWidth = 10;

const baseOutputHeight = 15;
const baseOutputWidth = 12;

const y_gap = 15;
const coder_x_gap = 5;
const emb_x_gap = 2;
const out_x_gap = 2;

const widthExpansion = [0, 5, 15, 15, 15, 5, 15, 15, 15, 5, 0];
const heightExpansion = [0, 15, 30, 30, 30, 15, 30, 30, 30, 15, 0];

let first_run = true;
class Architecture extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        vBoxSize : ['400', '100'],
        first_run : true,
        activeElement : -1,
        widths : [baseInputWidth, baseLayerWidth, baseCoderWidth, baseCoderWidth, baseCoderWidth, baseLayerWidth,
          baseCoderWidth, baseCoderWidth, baseCoderWidth, baseLayerWidth, baseOutputWidth],
        heights : [baseInputHeight, baseLayerHeight, baseCoderHeight, baseCoderHeight, baseCoderHeight, baseLayerHeight,
          baseCoderHeight, baseCoderHeight, baseCoderHeight, baseLayerHeight, baseOutputHeight],
        coords : [new Array(11).fill(0), new Array(11).fill(0)],
        views : new Array(11).fill(0),
        baseline : [50, 50],
        points : null,
      } // <- Need to assign the element id to control which element is active
      this.fixedProps = {
        color : '053061',
        y_gap : 18,
        coder_x_gap : 5,
        r : ['3px', '3px'],
        out_x_gap : 2,
        emb_x_gap : 2,
        headSize : 3,
      }
      this.expandView = this.expandView.bind(this);
      this.resetState = this.resetState.bind(this);
      this.computeCoords = this.computeCoords.bind(this);
      this.computeArchDims = this.computeArchDims.bind(this);
      this.computeArrpoints = this.computeArrpoints.bind(this);
      this.computeProps = this.computeProps.bind(this);
      this.renderArrow = this.renderArrow.bind(this);
    };

    resetState(state){
      state.views = new Array(11).fill(0);
      state.embeddingViews = 0;
      state.outputView = 0;
      state.activeElement = -1;
      state.widths = [baseInputWidth, baseLayerWidth, baseCoderWidth, baseCoderWidth, baseCoderWidth, baseLayerWidth,
        baseCoderWidth, baseCoderWidth, baseCoderWidth, baseLayerWidth, baseOutputWidth];
      state.heights = [baseInputHeight, baseLayerHeight, baseCoderHeight, baseCoderHeight, baseCoderHeight, baseLayerHeight,
        baseCoderHeight, baseCoderHeight, baseCoderHeight, baseLayerHeight, baseOutputHeight];
      state.baseline = [50, 50];
    }

    computeProps(index){
      return {
        'id': index,
        'width': this.state.widths[index] * this.state.vBoxSize[0] / 100,
        'height': this.state.heights[index] * this.state.vBoxSize[1] / 100,
        'x': this.state.coords[0][index] * this.state.vBoxSize[0] / 100,
        'y': this.state.coords[1][index] * this.state.vBoxSize[1] / 100,
        'fill': this.fixedProps.color,
        'rx': this.fixedProps.r[0],
        'ry': this.fixedProps.r[1],
        'onClick': () => this.expandView(index),
        'isBlurred': this.state.activeElement !== -1 && this.state.activeElement !== index,
      };
    }

    computeArchDims(){

      const encoderHeightMax = Math.max(...this.state.coderHeights.slice(0, 3));
      const decoderHeightMax = Math.max(...this.state.coderHeights.slice(3, 6));

      let overallHeight = Math.max(encoderHeightMax, this.state.layerHeights[0]) / 2 + this.fixedProps.y_gap;
      overallHeight += Math.max(decoderHeightMax, this.state.layerHeights[1]) / 2 + this.fixedProps.y_gap;

      const encoderWidth = this.state.coderWidths.slice(0, 3).reduce((a, b) => a + b, 0) + 2 * this.fixedProps.coder_x_gap;
      const decoderWidth = this.state.coderWidths.slice(3, 6).reduce((a, b) => a + b, 0) + 2 * this.fixedProps.coder_x_gap;
      const layerWidth = this.state.layerWidths.reduce((a, b) => a + b, 0) + this.fixedProps.emb_x_gap + this.fixedProps.out_x_gap;

      const overallWidth = Math.max(encoderWidth, decoderWidth) + layerWidth;

      return {'width' : overallWidth, 'height' : overallHeight};

    }

    computeCoords(state){
      let [baselinex, baseliney] = state.baseline;
      let base_top = Math.max(...state.heights.slice(0, 5));
      let base_bottom = Math.max(...state.heights.slice(6, 11));
      if (state.activeElement !== -1){
        //   If the element active element index is 0, 1, 2, 3, 4 => y offset is positive
        if (state.activeElement < 5){
          baseliney += heightExpansion[state.activeElement] / 2;
          // if active element index is 0, 1, 2 => x offset is positive by half of the elements width expansion
          if (state.activeElement < 3){
            baselinex += widthExpansion[state.activeElement] / 2;
          }
          // if active element index is 4 => x offset is negative
          else if (state.activeElement === 4){
            baselinex -= widthExpansion[state.activeElement] / 2;
          }
        }
        else{
          // If the element active element index is 5, 6, 7, 8, 9 => y offset is negative
          baseliney -= heightExpansion[state.activeElement] / 2;
          // if active element index is 5, 6 => x offset is positive
          if (state.activeElement < 7){
            baselinex += widthExpansion[state.activeElement] / 2;
          }
          // if active element index is 8, 9, 10 => x offset is negative
          else if (state.activeElement > 7){
            baselinex -= widthExpansion[state.activeElement] / 2;
          }
        }
      }

      // Compute all the coordinates
      // Encoder 1 Coordinates - set as the baseline
      const x3 = baselinex;
      const y3 = baseliney - base_top / 2 - y_gap / 2;

      // Encoder 2 Coordinates
      const x4 = x3 + state.widths[4] / 2 + state.widths[3] / 2 + coder_x_gap;
      const y4 = y3;

      // Encoder 0 Coordinates
      const x2 = x3 - state.widths[2] / 2 - state.widths[3] / 2 - coder_x_gap;
      const y2 = y3

      // Input Embedding Coordinates
      const x1 = x2 - state.widths[1] / 2 - state.widths[2] / 2 - emb_x_gap;
      const y1 = y2;

      // Input Coordinates
      const x0 = x1 - state.widths[0] / 2 - state.widths[1] / 2 - coder_x_gap;
      const y0 = y1;

      // Decoder 1 Coordinates
      const x7 = x3;
      const y7 = y3 + (base_top + base_bottom) / 2 + y_gap;

      // Decoder 2 Coordinates
      const x8 = x7 + state.widths[7] / 2 + state.widths[8] / 2 + coder_x_gap;
      const y8 = y7;

      // Decoder 0 Coordinates
      const x6 = x7 - state.widths[6] / 2 - state.widths[7] / 2 - coder_x_gap;
      const y6 = y7;

      // Output Embedding Coordinates
      const x5 = x6 - state.widths[5] / 2 - state.widths[6] / 2 - emb_x_gap;
      const y5 = y6;

      // Output Layer Coordinates
      const x9 = x8 + state.widths[8] / 2 + state.widths[9] / 2 + emb_x_gap;
      const y9 = y8;

      // Output Coordinates
      const x10 = x9 + state.widths[9] / 2 + state.widths[10] / 2 + out_x_gap;

      // Update coords
      state.coords = [[x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10],
                          [y0, y1, y2, y3, y4, y5, y6, y7, y8, y9, y9]];

      // return {'x' : [x2, x3, x4], 'y' : [y0, y1], 'layer_x' : [layer_x0, layer_x1]}
    }

    computeArrpoints(state) {
      if (state.points === null){
        state.points = {};
      }
      const [x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10] = state.coords[0].map((x) => x * this.state.vBoxSize[0] / 100);
      const [y0, y1, y2, y3, y4, y5, y6, y7, y8, y9] = state.coords[1].map((x) => x * this.state.vBoxSize[1] / 100);
      const [w0, w1, w2, w3, w4, w5, w6, w7, w8, w9, w10] = state.widths.map((x) => x * this.state.vBoxSize[0] / 100);
      const [h0, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10] = state.heights.map((x) => x * this.state.vBoxSize[1] / 100);

      let og = out_x_gap * this.state.vBoxSize[0] / 100;
      let lo_line = Math.max(...state.heights.slice(6, 10)) * this.state.vBoxSize[1] / 100;

      // Input to input embedding (0 -> 1)
      state.points['0-1'] = [[x0 + w0 / 2, y0], [x1 - w1 / 2, y1]];

      // Input embedding to encoder 0 (1 -> 2)
      state.points['1-2'] = [[x1 + w1 / 2, y1], [x2 - w2 / 2, y2]];

      // Encoder 0 to encoder 1 (2 -> 3)
      state.points['2-3'] = [[x2 + w2 / 2, y2], [x3 - w3 / 2, y3]];

      // Encoder 1 to encoder 2 (3 -> 4)
      state.points['3-4'] = [[x3 + w3 / 2, y3], [x4 - w4 / 2, y4]];

      // Encoder 2 to decoder 0 (4 -> 6)
      state.points['4-6'] = [[x4 + w4 / 2, y4], [x4 + w4 / 2 + 3, y4], [x4 + w4 / 2 + 3, (y4 + y6) / 2], [x6, (y4 + y6) / 2],
        [x6, y6 - h6 / 2]];

      // Encoder 2 to decoder 1 (4 -> 7)
      state.points['4-7'] = [[x4 + w4 / 2, y4], [x4 + w4 / 2 + 3, y4], [x4 + w4 / 2 + 3, (y4 + y7) / 2], [x7, (y4 + y7) / 2],
        [x7, y7 - h7 / 2]];

      // Encoder 2 to decoder 2 (4 -> 8)

      state.points['4-8'] = [[x4 + w4 / 2, y4], [x4 + w4 / 2 + 3, y4], [x4 + w4 / 2 + 3, (y4 + y8) / 2], [x8, (y4 + y8) / 2],
        [x8, y8 - h8 / 2]];

      // Output embedding to decoder 0 (5 -> 6)
      state.points['5-6'] = [[x5 + w5 / 2, y5], [x6 - w6 / 2, y6]];

      // Decoder 0 to decoder 1 (6 -> 7)
      state.points['6-7'] = [[x6 + w6 / 2, y6], [x7 - w7 / 2, y7]];

      // Decoder 1 to decoder 2 (7 -> 8)
      state.points['7-8'] = [[x7 + w7 / 2, y7], [x8 - w8 / 2, y8]];

      // Decoder 2 to output layer (8 -> 9)
      state.points['8-9'] = [[x8 + w8 / 2, y8], [x9 - w9 / 2, y9]];

      // Output layer to output (9 -> 10)
      state.points['9-10'] = [[x9 + w9 / 2, y9], [x10 - w10 / 2, y9]];

      // Middle of output layer - output to output embedding
      state.points['9-5'] = [[x9 + w9 / 2 + og / 2, y9], [x9 + w9 / 2 + og / 2, y9 + lo_line / 2 + 5],
        [x5 - w5 / 2 - 5, y9 + lo_line / 2 + 5], [x5 - w5 / 2 - 5, y9], [x5 - w5 / 2, y9]];

    }

    expandView(index){
      this.setState((prevState) => {
        const newState = {...prevState};
        this.resetState(newState);
        if (prevState.views[index] === 0){
          newState.widths[index] = newState.widths[index] + widthExpansion[index];
          newState.heights[index] = newState.heights[index] + heightExpansion[index];
          newState.views[index] = 1;
          newState.activeElement = index;
        }
        this.computeCoords(newState);
        this.computeArrpoints(newState);
        return newState;
      })
    }
    componentDidMount() {
      if(first_run){
        this.setState((prevState) => {
          const newState = {...prevState};
          this.computeCoords(newState);
          this.computeArrpoints(newState);
        return newState;
        })
      }
      first_run = false;
    }

    renderArrow(key){
      return (
        this.state.activeElement === -1 && <Arrow id={key} points={this.state.points[key]} />
      )
    }

  render() {
      const render_arrows = this.state.points !== null;
      return (
        <div className="d3-component" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
          <svg  viewBox={"0 0 " + this.state.vBoxSize[0] + " " + this.state.vBoxSize[1]} width="100%" style={{filter: this.state.activeElement !== -1 ? "url(#blurMe)" : "none"}}>


            <Input {...this.computeProps(0)} />
            <InputEmbedding {...this.computeProps(1)}/>

            <Encoder {...this.computeProps(2)}/>

            <Encoder {...this.computeProps(3)}/>

            <Encoder {...this.computeProps(4)}/>

            <OutputEmbedding {...this.computeProps(5)}/>

            <Decoder {...this.computeProps(6)}/>

            <Decoder {...this.computeProps(7)}/>

            <Decoder {...this.computeProps(8)}/>

            <OutputLayer {...this.computeProps(9)}/>

            <Output {...this.computeProps(10)}/>

            // Define Arrows if points are not null
            {render_arrows && this.renderArrow('0-1')}
            {render_arrows && this.renderArrow('1-2')}
            {render_arrows && this.renderArrow('2-3')}
            {render_arrows && this.renderArrow('3-4')}
            {render_arrows && this.renderArrow('4-6')}
            {render_arrows && this.renderArrow('4-7')}
            {render_arrows && this.renderArrow('4-8')}
            {render_arrows && this.renderArrow('5-6')}
            {render_arrows && this.renderArrow('6-7')}
            {render_arrows && this.renderArrow('7-8')}
            {render_arrows && this.renderArrow('8-9')}
            {render_arrows && this.renderArrow('9-10')}
            {render_arrows && this.renderArrow('9-5')}

          </svg>

        </div>
      );
    }
}

export default Architecture;
