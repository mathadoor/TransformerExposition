import React  from 'react';
import EncoderDecoder from './encoder-decoder';
import EmbeddingLayer from "./embedding-layer";
import Xarrow from 'react-xarrows';

class Architecture extends React.Component {

    render() {

      // eslint-disable-next-line no-unused-vars
      const { hasError, idyll, updateProps, ...props } = this.props;
      const enc_x_vals = props.enc_x.split(' ');
      const enc_y_vals = props.enc_y.split(' ');
      const r = props.r.split(' ')

      return (
        <div className="d3-component" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
          <svg viewBox={"0 0 " + props.vBoxSizeW + " " + props.vBoxSizeH} width="100%" >

          <EmbeddingLayer id={'embedding-layer'} width={props.layer_width}
                          height={props.layer_height} x={props.emb_x} y={props.emb_y} fill={props.color} rx={r[0]} ry={r[1]}/>

          {
            enc_x_vals.map((x_item, x_index) => (
                <EncoderDecoder id={'encoder-' + x_index} width={props.coder_width} height={props.coder_height} x={x_item} y={enc_y_vals[0]} fill={props.color} rx={r[0]} ry={r[1]}/>
            ))
          }

          {
            enc_x_vals.map((x_item, x_index) => (

                <EncoderDecoder id={'decoder-' + x_index} width={props.coder_width} height={props.coder_height} x={x_item} y={enc_y_vals[1]} fill={props.color} rx={r[0]} ry={r[1]}/>

            ))
          }
          </svg>
          <Xarrow start={"embedding-layer"} end={"encoder-0"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={props.headSize} />
          <Xarrow start={"encoder-0"} end={"encoder-1"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={props.headSize} />
          <Xarrow start={"encoder-1"} end={"encoder-2"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={props.headSize} />
          <Xarrow start={"decoder-0"} end={"decoder-1"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={props.headSize} />
          <Xarrow start={"decoder-1"} end={"decoder-2"} path={'grid'} startAnchor={'right'} endAnchor={'left'} headSize={props.headSize} />
        </div>
      );
    }
}

export default Architecture;
