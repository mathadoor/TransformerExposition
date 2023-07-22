import React, { useEffect, useRef } from 'react';
import LinearLayer from "./toolbox/linear-layer";
import Minimize from "./toolbox/minimize";
import Arrow from "./arrow";


// Baseline
const baseline_x = 50;

// Width Definitions
const LN1_width = 20;
const MSA_width = 20;
const x_gap = (100 - MSA_width - LN1_width) / 3;

// Height Definitions
const LN1_height = 75;
const MSA_height = 75;


// Add 1 Info
const LN1_x = baseline_x + x_gap / 2 + LN1_width / 2;
const MSA_x = LN1_x - x_gap - MSA_width / 2 - LN1_width / 2;


let prevActiveComp = null;
function OutputLayer(props) {
  const ref = useRef();
  const [activeComp, setActiveComp] = React.useState(null);
  const { id, width, height, x, y, fill, rx, ry, onClick, isBlurred, active} = props;
  let currX = width * x / 100;
  let currY = height * y / 100;
  let MSAProps = null;
  let LN1Props = null;
  let ffProps = null;
  let LN2Props = null;
  let arrowPoints = {};
  let leftDatum = x - width / 2;
  let rightDatum = x + width / 2;
  let topDatum = y - height / 2;
  let bottomDatum = y + height / 2;

  let thisProps = {...props};
  thisProps.text = "Output Layer";
  thisProps.wrapText = false;
  thisProps.showText = !active;
  thisProps.onClick = active ? () => {} : onClick;
  thisProps.transform = `rotate(90, ${x}, ${y})`;
  thisProps.textProps = {
    "textAnchor": "middle",
    "alignmentBaseline": "middle",
    "fontSize": "3px",
    "fill": "white",
    "opacity" : isBlurred ? 0.2 : 1,
    "filter" : isBlurred ? "blur(5px)" : "none",
  }

  function setComps(id){
    if (activeComp === id) {
      setActiveComp(null); // hide annotation if the same component is clicked
    } else {
      setActiveComp(id); // show annotation if another component is clicked
    }
  }

  function closeComps(){
    setActiveComp(null);
    onClick();
  }

  if (active){
    MSAProps = {
      id: `${id}-1`,
      width: MSA_width * width / 100,
      height: MSA_height * height / 100,
      x: leftDatum + MSA_x * width / 100,
      y: y,
      fill: 'white',
      text: 'Linear Layer',
      rx : props.rx,
      ry : props.ry,
      wrapText : false,
      showText : true,
      transform : `rotate(90, ${leftDatum + MSA_x * width / 100}, ${y})`,
      annotation: <>
        <rect x={rightDatum + 10} y={0} width="125" height="100" fill="white"/>
        <image href="./assets/source_tokenizer.png" x={rightDatum + 10} y={0} width="125" height="100" />
      </>,
      showAnnotation: activeComp === `${id}-1`,
      onClick: () => {setComps(`${id}-1`)},
      textProps : {
        "textAnchor": "middle",
        "alignmentBaseline": "middle",
        "fontSize": "3px",
        "fill": fill,
        "opacity" : isBlurred ? 0.2 : 1,
        "filter" : isBlurred ? "blur(5px)" : "none"
      }
    }

    LN1Props = {
      id: `${id}-2`,
      width: LN1_width * width / 100,
      height: LN1_height * height / 100,
      x: leftDatum + LN1_x * width / 100,
      y: y,
      fill: 'white',
      text: 'Softmax Layer',
      rx : props.rx,
      ry : props.ry,
      wrapText : false,
      showText : true,
      onClick: () => {setComps(`${id}-2`)},
      transform : `rotate(90, ${leftDatum + LN1_x * width / 100}, ${y})`,
      annotation: <>
        <rect x={rightDatum + 10} y={0} width="125" height="100" fill="white"/>
        <image href="./assets/text_embedding.jpg" x={rightDatum + 10} y={0} width="125" height="100" />
      </>,
      showAnnotation: activeComp === `${id}-2`,
      textProps : {
        "textAnchor": "middle",
        "alignmentBaseline": "middle",
        "fontSize": "3px",
        "fill": fill,
        "opacity" : isBlurred ? 0.2 : 1,
        "filter" : isBlurred ? "blur(5px)" : "none"
      }
    }




    arrowPoints['IN-MSA'] = [[leftDatum - x_gap / 4, y], [MSAProps.x - MSAProps.width / 2, y]];

    arrowPoints['MSA-LN1'] = [[MSAProps.x + MSAProps.width / 2, y], [LN1Props.x - LN1Props.width / 2, LN1Props.y]];

    arrowPoints['LN1-OUT'] = [[LN1Props.x + LN1Props.width / 2, LN1Props.y], [rightDatum + x_gap / 4, y]];

  }

  return (
    <svg id={id} style={{ cursor: 'pointer' }}>
      <LinearLayer {...thisProps} />
      {active && <LinearLayer {...MSAProps} />}
      {active && <LinearLayer {...LN1Props} />}



      {active && <Minimize width={4.5} height={4.5} x={rightDatum - 7} y = {topDatum + 2} onClick={closeComps} fill={fill} />}
      {active && <Arrow id={'IN-MSA'} points={arrowPoints['IN-MSA']} />}
      {active && <Arrow id={'MSA-LN1'} points={arrowPoints['MSA-LN1']} />}
      {active && <Arrow id={'LN1-OUT'} points={arrowPoints['LN1-OUT']} />}

    </svg>
  );
}


export default OutputLayer;
