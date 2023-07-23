import React, { useEffect, useRef } from 'react';
import LinearLayer from "./toolbox/linear-layer";
import Minimize from "./toolbox/minimize";
import Arrow from "./arrow";

const x_gap = 20;

// Baseline
const baseline_x = 50;
const baseline_y = 50;

// Text Embedding Info
const text_width = 17;
const text_height = 40;

// Token Info
const token_width = 13;
const token_height = 85;

// Position info
const position_width = 17;
const position_height = 40;

// Element Addition Infor
const add_x = baseline_x + text_width / 2 + x_gap;
const add_y = baseline_y;
function OutputEmbedding(props) {
  const ref = useRef();
  const [activeComp, setActiveComp] = React.useState(null);
  const { id, width, height, x, y, fill, rx, ry, onClick, isBlurred, active} = props;
  let currX = width * x / 100;
  let currY = height * y / 100;
  let tokenizerProps = null;
  let embeddingProps = null;
  let positionProps = null;
  let arrowPoints = {};
  let leftDatum = x - width / 2;
  let rightbase = x + width / 2;
  let topbase = y - height / 2;
  let bottombase = y + height / 2;

  let thisProps = {...props};
  thisProps.text = "Output Embedding";
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
    tokenizerProps = {
      id: `${id}-1`,
      width: token_width * width / 100,
      height: token_height * height / 100,
      x: leftDatum + (token_width + x_gap) * width / 200,
      y: y,
      fill: 'white',
      text: 'Target Tokenizer',
      rx : props.rx,
      ry : props.ry,
      wrapText : false,
      showText : true,
      transform : `rotate(90, ${leftDatum + (token_width + x_gap) * width / 200}, ${y})`,
      annotation: <>
        <rect x={rightbase + 10} y={0} width="125" height="100" fill="white"/>
        <image href="./assets/target_tokenizer.jpg" x={rightbase + 10} y={0} width="75" height="75" />
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

    embeddingProps = {
      id: `${id}-2`,
      width: text_width * width / 100,
      height: text_height * height / 100,
      x: x,
      y: y - height / 4,
      fill: 'white',
      text: 'Text Embedding',
      rx : props.rx,
      ry : props.ry,
      wrapText : true,
      showText : true,
      onClick: () => {setComps(`${id}-2`)},
      transform : `rotate(90, ${x}, ${y - height / 4})`,
      annotation: <>
        <rect x={rightbase + 10} y={0} width="125" height="100" fill="white"/>
        <image href="./assets/target_text_embedding.jpg" x={rightbase + 10} y={0} width="75" height="75" />
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

    positionProps = {
      id: `${id}-3`,
      width: position_width * width / 100,
      height: position_height * height / 100,
      x: x,
      y: y + height / 4,
      fill: 'white',
      text: 'Position Embedding',
      rx : props.rx,
      ry : props.ry,
      wrapText : true,
      showText : true,
      transform : `rotate(90, ${x}, ${y + height / 4})`,
      onClick: () => {setComps(`${id}-3`)},
      annotation: <>
        <rect x={rightbase + 10} y={0} width="125" height="100" fill="white"/>
        <image href="./assets/target_position_embedding.jpg" x={rightbase + 10} y={0} width="100" height="100" />
      </>,
      showAnnotation: activeComp === `${id}-3`,
      textProps : {
        "textAnchor": "middle",
        "alignmentBaseline": "middle",
        "fontSize": "3px",
        "fill": fill,
        "transform": `rotate(-90, ${leftDatum + token_width * width / 200}, ${topbase + token_height * height / 200})`,
        "opacity" : isBlurred ? 0.2 : 1,
        "filter" : isBlurred ? "blur(5px)" : "none"
      }
    }

    arrowPoints['in-token'] = [[leftDatum - x_gap / 4, y], [tokenizerProps.x - tokenizerProps.width / 2, y]];

    arrowPoints['token-text'] = [[tokenizerProps.x + tokenizerProps.width / 2, y],
      [embeddingProps.x / 2 + tokenizerProps.x / 2 - (embeddingProps.width / 4  - tokenizerProps.width / 4), y],
      [embeddingProps.x / 2 + tokenizerProps.x / 2 - (embeddingProps.width / 4  - tokenizerProps.width / 4), embeddingProps.y],
      [embeddingProps.x - embeddingProps.width / 2, embeddingProps.y]];

    arrowPoints['token-position'] = [[tokenizerProps.x + tokenizerProps.width / 2, y],
      [positionProps.x / 2 + tokenizerProps.x / 2 - (positionProps.width / 4  - tokenizerProps.width / 4), y],
      [positionProps.x / 2 + tokenizerProps.x / 2 - (positionProps.width / 4  - tokenizerProps.width / 4), positionProps.y],
      [positionProps.x - positionProps.width / 2, positionProps.y]];

    arrowPoints['text-add'] = [[embeddingProps.x + embeddingProps.width / 2, embeddingProps.y],
      [leftDatum + add_x * width / 100, embeddingProps.y], [leftDatum + add_x * width / 100, y - 3]];

    arrowPoints['position-add'] = [[positionProps.x + positionProps.width / 2, positionProps.y],
      [leftDatum + add_x * width / 100, positionProps.y], [leftDatum + add_x * width / 100, y + 3]];

    arrowPoints['addOut'] = [[leftDatum + add_x * width / 100 + 3, y], [rightbase + x_gap / 4, y]];

  }

  return (
    <svg id={id} style={{ cursor: 'pointer' }}>
      <LinearLayer {...thisProps} />
      {active && <LinearLayer {...tokenizerProps} />}
      {active && <LinearLayer {...embeddingProps} />}
      {active && <LinearLayer {...positionProps} />}
      {active &&
        <svg id={"1-4"} x={leftDatum + add_x * width / 100 - 3} y={y - 3} onClick={() => setComps(`${id}-4`)} ref={ref} fill="#ffffff" version="1.1" >
          <circle cx={3} cy={3} r={3} fill={fill}/>
          <g  transform={`scale(0.012 0.012)`}>
            <path d="M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89
                c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z" stroke={"#ffffff"}/>
            <path d="M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7
                c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2
                c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z" stroke={"#ffffff"}/>
          </g>
        </svg>}
      {activeComp === `${id}-4` && <image href="./assets/element_wise_add_input_embed.jpg" x={rightbase + 10} y={0} width="75" height="50" />}
      {active && <Minimize width={4.5} height={4.5} x={rightbase - 7} y = {topbase + 2} onClick={closeComps} fill={fill} />}
      {active && <Arrow id={'in-token'} points={arrowPoints['in-token']} />}
      {active && <Arrow id={'token-text'} points={arrowPoints['token-text']} />}
      {active && <Arrow id={'token-position'} points={arrowPoints['token-position']} />}
      {active && <Arrow id={'text-add'} points={arrowPoints['text-add']} />}
      {active && <Arrow id={'position-add'} points={arrowPoints['position-add']} />}
      {active && <Arrow id={'addOut'} points={arrowPoints['addOut']} />}
    </svg>
  );
}

export default OutputEmbedding;
