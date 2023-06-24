import React  from 'react';
import EncoderDecoder from './encoder-decoder';
import Xarrow from 'react-xarrows';

class Architecture extends React.Component {

    box1Ref = React.createRef()
    render() {

      // eslint-disable-next-line no-unused-vars
      const { hasError, idyll, updateProps, ...props } = this.props;
      const x_vals = props.x.split(' ');
      const y_vals = props.y.split(' ');


      return (
        <div className="d3-component" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
          {/*<svg viewBox={"0 0 " + props.vBoxSizeW + " " + props.vBoxSizeH} width="100%" >*/}

          {
            x_vals.map((x_item, x_index) => (
              <div id={'encoder-' + x_index}>
                <EncoderDecoder  width={props.width} height={props.height} x={x_item} y={y_vals[0]} fill={props.color} />
              </div>
            ))
          }

          {
            x_vals.map((x_item, x_index) => (

              <div id={'decoder-' + x_index}>
                <EncoderDecoder  width={props.width} height={props.height} x={x_item} y={y_vals[1]} fill={props.color} />
              </div>

            ))
          }
          <Xarrow start={"encoder-2"} end={"decoder-0"}></Xarrow>
        </div>
      );
    }
}

export default Architecture;
