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
const baseLayerWidth = 1;
const baseCoderHeight = 7;
const baseCoderWidth = 3;
const baseCoderExpansion = [15, 30];
const baseLayerExpansion = [20, 50];
const baseInputHeight = 30;
const baseInputWidth = 1;
const baseOutputHeight = 30;
const baseOutputWidth = 1;

class Architecture extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        vBoxSize : ['400', '100'],
        activeElement : -1,
        baseCoderHeight : 7,
        baseCoderWidth : 3,
        baseLayerHeight : 30,
        baseLayerWidth : 1,
        baseCoderExpansion : [15, 30],
        baseLayerExpansion : [20, 50],
        widths : [1, 1, 1, ...new Array(6).fill(3), 1],
        heights : [1, 1, 1, ...new Array(6).fill(3), 1],
        layerHeights : new Array(2).fill(30),
        layerWidths : new Array(2).fill(1),
        coderWidths : new Array(6).fill(3),
        coderHeights : new Array(6).fill(7),
        coderViews : new Array(6).fill(0),
        baseline : [50, 50],
        embeddingViews: 0,
        outputView : 0,
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
    };

    resetState(state){
      state.coderViews = new Array(6).fill(0);
      state.embeddingViews = 0;
      state.outputView = 0;
      state.activeElement = -1;
      state.coderWidths = new Array(6).fill(state.baseCoderWidth);
      state.coderHeights = new Array(6).fill(state.baseCoderHeight);
      state.layerHeights = new Array(2).fill(state.baseLayerHeight);
      state.layerWidths = new Array(2).fill(state.baseLayerWidth);
      state.baseline = [50, 50];
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


    computeCoords(){
      const [baselinex, baseliney] = this.state.baseline;
      const encoderHeightMax = Math.max(...this.state.coderHeights.slice(0, 3));
      const decoderHeightMax = Math.max(...this.state.coderHeights.slice(3, 6));

      const x1 = baselinex;
      const x2 = x1 + this.state.coderWidths[1] / 2 + this.state.coderWidths[2] / 2 + this.fixedProps.coder_x_gap;
      const x0 = x1 - this.state.coderWidths[0] / 2 - this.state.coderWidths[1] / 2 - this.fixedProps.coder_x_gap;

      const y0 = baseliney - this.state.baseCoderHeight / 2 - this.fixedProps.y_gap;
      const y1 = baseliney + this.state.baseCoderHeight / 2 + this.fixedProps.y_gap;

      // Compute Layer Coordinates
      const layer_width = this.state.layerWidths;

      const layer_x0 = x0 - this.state.coderWidths[0] / 2 - layer_width[0] / 2 - this.fixedProps.emb_x_gap;
      const layer_x1 = x2 + this.state.coderWidths[2] / 2 + layer_width[1] / 2 + this.fixedProps.out_x_gap;

      return {'x' : [x0, x1, x2], 'y' : [y0, y1], 'layer_x' : [layer_x0, layer_x1]}
    }

    computeArrpoints() {
      const state = this.state;

    }

    expandView(type, index){
      index += type === 'dec' ? 3 : 0;
      this.setState((prevState) => {
        const newState = {...prevState};
        this.resetState(newState);
        if (prevState.coderViews[index] === 0){
          newState.coderWidths[index] = newState.coderWidths[index] + newState.baseCoderExpansion[0];
          newState.coderHeights[index] = newState.coderHeights[index] + newState.baseCoderExpansion[1];
          newState.coderViews[index] = 1;
          newState.activeElement = index;

          console.log(newState.baseline);
        }

        return newState;
      })
    }

    render() {
      // General Properties
      let layer_height = this.state.layerHeights;
      let layer_width = this.state.layerWidths;

      // Compute the positioning of the encoders and the decoders
      let coder_width = this.state.coderWidths;
      let coder_height = this.state.coderHeights;

      // Compute the positioning of the embedding and output layers
      let {x:enc_x, y: enc_y, layer_x :[layerx0, layerx1]} = this.computeCoords();

      // Finalize Properties
      coder_width = coder_width.map((item) => `${item}%`);
      coder_height = coder_height.map((item) => `${item}%`);
      layer_height = layer_height.map((item) => `${item}%`);
      layer_width =  layer_width.map((item) => `${item}%`);

      // eslint-disable-next-line no-unused-vars

      return (
        <div className="d3-component" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
          <svg  viewBox={"0 0 " + this.state.vBoxSize[0] + " " + this.state.vBoxSize[1]} width="100%" >
            <Input id={'input'} width={layer_width[0]}
                   height={layer_height[0]}
                   x={`${layerx0 - this.state.layerWidths[0] - this.fixedProps.emb_x_gap}%`} y={`${enc_y[0] - this.state.layerHeights[0] / 2}%`}
                   fill={this.fixedProps.color} rx={this.fixedProps.r[0]} ry={this.fixedProps.r[1]} />
            <InputEmbedding id={'output-embedding-layer'} width={layer_width[0]}
                            height={layer_height[0]}
                            x={`${layerx0 - this.state.layerWidths[0] / 2}%`} y={`${enc_y[0] - this.state.layerHeights[0] / 2}%`}
                            fill={this.fixedProps.color} rx={this.fixedProps.r[0]} ry={this.fixedProps.r[1]}/>

          {
            enc_x.map((x_item, x_index) => (
                <Encoder style={{cursor: 'pointer'}} onClick={() => this.expandView("enc", x_index)}
                         id={'encoder-' + x_index} key={'encoder-' + x_index}
                         width={coder_width[x_index]} height={coder_height[x_index]}
                         x={`${x_item - this.state.coderWidths[x_index] / 2}%`}
                         y={`${enc_y[0] - this.state.coderHeights[x_index] / 2}%`}
                         fill={this.fixedProps.color} rx={this.fixedProps.r[0]} ry={this.fixedProps.r[1]}/>
            ))
          }
            <OutputEmbedding id={'output-embedding-layer'} width={layer_width[0]}
                            height={layer_height[0]}
                            x={`${layerx0 - this.state.layerWidths[0] / 2}%`} y={`${enc_y[1] - this.state.layerHeights[0] / 2}%`}
                            fill={this.fixedProps.color} rx={this.fixedProps.r[0]} ry={this.fixedProps.r[1]}/>
          {
            enc_x.map((x_item, x_index) => (

                <Decoder id={'decoder-' + x_index} key={'decoder-' + x_index}
                         style={{cursor: 'pointer'}} onClick={() => this.expandView("dec", x_index)}
                         width={coder_width[3 + x_index]} height={coder_height[3 + x_index]}
                         x={`${x_item - this.state.coderWidths[3 + x_index] / 2}%`}
                         y={`${enc_y[1] - this.state.coderHeights[3 + x_index] / 2}%`}
                         fill={this.fixedProps.color} rx={this.fixedProps.r[0]} ry={this.fixedProps.r[1]}/>

            ))
          }
            <OutputLayer id={'output-layer'} width={layer_width[1]}
                         height={layer_height[1]} x={`${layerx1 - this.state.layerWidths[1] / 2}%`}
                         y={`${enc_y[1] - this.state.layerHeights[1] / 2}%`}
                         fill={this.fixedProps.color} rx={this.fixedProps.r[0]} ry={this.fixedProps.r[1]}/>

            <Output id={'input'} width={layer_width[1]}
                    height={layer_height[1]} x={`${layerx1 + 10 * this.state.layerWidths[1] / 2}%`}
                    y={`${enc_y[1] - this.state.layerHeights[1] / 2}%`}
                    fill={this.fixedProps.color} rx={this.fixedProps.r[0]} ry={this.fixedProps.r[1]}/>
            // Create the arrows
            <Arrow id="arrow-0" points={[[(enc_x[0] + this.state.coderWidths[0] / 2) / 100 * this.state.vBoxSize[0], enc_y[0]  / 100 * this.state.vBoxSize[1]],
                                        [(enc_x[1] - this.state.coderWidths[1] / 2) / 100 * this.state.vBoxSize[0], enc_y[0] / 100 * this.state.vBoxSize[1]]]} />

            <Arrow id="arrow-1" points={[[(enc_x[1] + this.state.coderWidths[1] / 2) / 100 * this.state.vBoxSize[0], enc_y[0]  / 100 * this.state.vBoxSize[1]],
              [(enc_x[2] - this.state.coderWidths[2] / 2) / 100 * this.state.vBoxSize[0], enc_y[0] / 100 * this.state.vBoxSize[1]]]} />

            <Arrow id="arrow-2" points={[[(enc_x[2] + this.state.coderWidths[2] / 2 )  / 100 * this.state.vBoxSize[0], enc_y[0]  / 100 * this.state.vBoxSize[1]],
              [(enc_x[2] + this.state.coderWidths[2] / 2 + this.fixedProps.coder_x_gap / 2) / 100 * this.state.vBoxSize[0], enc_y[0] / 100 * this.state.vBoxSize[1]]]} />
          </svg>

          {/*<Xarrow start={"embedding-layer"} end={"encoder-0"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={this.fixedProps.headSize} />*/}
          {/*<Xarrow start={"encoder-0"} end={"encoder-1"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={this.fixedProps.headSize} />*/}
          {/*<Xarrow start={"encoder-1"} end={"encoder-2"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={this.fixedProps.headSize} />*/}
          {/*<Xarrow start={"encoder-2"} end={"decoder-0"} path={'grid'} startAnchor={'bottom'} endAnchor={'top'} headSize={this.fixedProps.headSize}/>*/}
          {/*<Xarrow start={"encoder-2"} end={"decoder-1"} path={'grid'} startAnchor={'bottom'} endAnchor={'top'} headSize={this.fixedProps.headSize}/>*/}
          {/*<Xarrow start={"encoder-2"} end={"decoder-2"} path={'grid'} startAnchor={'bottom'} endAnchor={'top'} headSize={this.fixedProps.headSize}/>*/}
          {/*<Xarrow start={"decoder-0"} end={"decoder-1"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={this.fixedProps.headSize} />*/}
          {/*<Xarrow start={"decoder-1"} end={"decoder-2"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={this.fixedProps.headSize} />*/}
          {/*<Xarrow start={"decoder-2"} end={"output-layer"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={this.fixedProps.headSize} />*/}
        </div>
      );
    }
}

export default Architecture;
