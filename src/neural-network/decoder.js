import React, { useEffect, useRef } from 'react';
import LinearLayer from "./toolbox/linear-layer";
import Minimize from "./toolbox/minimize";
import Arrow from "./arrow";


// Baseline
const baseline_x = 35;

// Width Definitions
const LN1_width = 7;
const LN2_width = 7;
const LN3_width = 7;
const MMSA_width = 10;
const CSA_width = 7;
const ff_width = 7;
const add_width = 3;
const x_gap = (baseline_x - MMSA_width - LN1_width - add_width) * 2 / 7;

// Height Definitions
const LN1_height = 80;
const MMSA_height = 80;
const CSA_height = 80;
const LN2_height = 80;
const LN3_height = 80;
const ff_height = 80;


// Add 1 Info
const add1_x = baseline_x - x_gap / 2 - add_width/ 2;
const LN1_x = add1_x - x_gap - 3 / 2 - LN1_width / 2;
const MMSA_x = LN1_x - x_gap - MMSA_width / 2 - LN1_width / 2;

const CSA_x = baseline_x + x_gap / 2 + add_width / 2 + CSA_width / 2;
const LN2_x = CSA_x + x_gap + CSA_width / 2 + LN2_width / 2;
const add2_x = LN2_x + x_gap + LN2_width / 2 + add_width / 2;

const ff_x = add2_x + x_gap + add_width / 2 + ff_width / 2;
const LN3_x = ff_x + x_gap + ff_width / 2 + LN3_width / 2;
const add3_x = LN3_x + x_gap + LN2_width / 2 + add_width / 2;

function Decoder(props) {
  const ref = useRef();
  const [activeComp, setActiveComp] = React.useState(null);
  const { id, width, height, x, y, fill, rx, ry, onClick, isBlurred, active} = props;

  let MMSAProps = null;
  let LN1Props = null;

  let CSAProps = null;
  let LN2Props = null;

  let ffProps = null;
  let LN3Props = null;

  let arrowPoints = {};

  let leftDatum = x - width / 2;
  let rightDatum = x + width / 2;
  let topDatum = y - height / 2;
  let bottomDatum = y + height / 2;

  let thisProps = {...props};
  thisProps.text = `Decoder-${id - 5}`;
  thisProps.wrapText = false;
  thisProps.showText = !active;
  thisProps.onClick = active ? () => {} : onClick;
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
    MMSAProps = {
      id: `${id}-1`,
      width: MMSA_width * width / 100,
      height: MMSA_height * height / 100,
      x: leftDatum + MMSA_x * width / 100,
      y: y,
      fill: 'white',
      text: 'Masked Multi-Headed Self-Attention',
      rx : props.rx,
      ry : props.ry,
      wrapText : true,
      showText : true,
      transform : `rotate(90, ${leftDatum + MMSA_x * width / 100}, ${y})`,
      annotation: <>
        <image href="./assets/masked_multi_headed_attention.jpg" x={id !== 8 ? rightDatum + 10 : leftDatum - 135} y={0} width="125" height="125" />
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
      text: 'Layer Normalization',
      rx : props.rx,
      ry : props.ry,
      wrapText : true,
      showText : true,
      onClick: () => {setComps(`${id}-2`)},
      transform : `rotate(90, ${leftDatum + LN1_x * width / 100}, ${y})`,
      annotation: <>
        <image href="./assets/layer_normalization.jpg" x={id !== 8 ? rightDatum + 10 : leftDatum - 110} y={0} width="100" height="100" />
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

    CSAProps = {
      id: `${id}-4`,
      width: CSA_width * width / 100,
      height: CSA_height * height / 100,
      x: leftDatum + CSA_x * width / 100,
      y: y,
      fill: 'white',
      text: 'Multi-Headed Cross-Attention',
      rx : props.rx,
      ry : props.ry,
      wrapText : true,
      showText : true,
      onClick: () => {setComps(`${id}-4`)},
      transform : `rotate(90, ${leftDatum + CSA_x * width / 100}, ${y})`,
      annotation: <>
        <image href="./assets/multi_headed_cross_attention.jpg" x={id !== 8 ? rightDatum + 10 : leftDatum - 110} y={0} width="100" height="100" />
      </>,
      showAnnotation: activeComp === `${id}-4`,
      textProps : {
        "textAnchor": "middle",
        "alignmentBaseline": "middle",
        "fontSize": "3px",
        "fill": fill,
        "transform": `rotate(-90, ${leftDatum + MMSA_width * width / 200}, ${topDatum + MMSA_height * height / 200})`,
        "opacity" : isBlurred ? 0.2 : 1,
        "filter" : isBlurred ? "blur(5px)" : "none"
      }
    }

    LN2Props = {
      id: `${id}-5`,
      width: LN2_width * width / 100,
      height: LN2_height * height / 100,
      x: leftDatum + LN2_x * width / 100,
      y: y,
      fill: 'white',
      text: 'Layer Normalization',
      rx : props.rx,
      ry : props.ry,
      wrapText : true,
      showText : true,
      onClick: () => {setComps(`${id}-5`)},
      transform : `rotate(90, ${leftDatum + LN2_x * width / 100}, ${y})`,
      annotation: <>
        <image href="./assets/layer_normalization.jpg" x={id !== 8 ? rightDatum + 10 : leftDatum - 110} y={0} width="100" height="100" />
      </>,
      showAnnotation: activeComp === `${id}-5`,
      textProps : {
        "textAnchor": "middle",
        "alignmentBaseline": "middle",
        "fontSize": "3px",
        "fill": fill,
        "opacity" : isBlurred ? 0.2 : 1,
        "filter" : isBlurred ? "blur(5px)" : "none"
      }
    }

    ffProps = {
      id: `${id}-7`,
      width: ff_width * width / 100,
      height: ff_height * height / 100,
      x: leftDatum + ff_x * width / 100,
      y: y,
      fill: 'white',
      text: 'Feed-Forward Network',
      rx : props.rx,
      ry : props.ry,
      wrapText : true,
      showText : true,
      onClick: () => {setComps(`${id}-7`)},
      transform : `rotate(90, ${leftDatum + ff_x * width / 100}, ${y})`,
      annotation: <>
        <rect x={rightDatum + 10} y={0} width="125" height="100" fill="white"/>
        <image href="./assets/feedforward.jpg" x={id !== 8 ? rightDatum + 10 : leftDatum - 135} y={0} width="125" height="125" />
      </>,
      showAnnotation: activeComp === `${id}-7`,
      textProps : {
        "textAnchor": "middle",
        "alignmentBaseline": "middle",
        "fontSize": "3px",
        "fill": fill,
        "opacity" : isBlurred ? 0.2 : 1,
        "filter" : isBlurred ? "blur(5px)" : "none"
      }
    }

    LN3Props = {
      id: `${id}-8`,
      width: LN3_width * width / 100,
      height: LN3_height * height / 100,
      x: leftDatum + LN3_x * width / 100,
      y: y,
      fill: 'white',
      text: 'Layer Normalization',
      rx : props.rx,
      ry : props.ry,
      wrapText : true,
      showText : true,
      onClick: () => {setComps(`${id}-8`)},
      transform : `rotate(90, ${leftDatum + LN3_x * width / 100}, ${y})`,
      annotation: <>
        <rect x={rightDatum + 10} y={0} width="125" height="100" fill="white"/>
        <image href="./assets/layer_normalization.jpg" x={id !== 8 ? rightDatum + 10 : leftDatum - 110} y={0} width="100" height="100" />
      </>,
      showAnnotation: activeComp === `${id}-8`,
      textProps : {
        "textAnchor": "middle",
        "alignmentBaseline": "middle",
        "fontSize": "3px",
        "fill": fill,
        "opacity" : isBlurred ? 0.2 : 1,
        "filter" : isBlurred ? "blur(5px)" : "none"
      }
    }

    arrowPoints['IN-MMSA'] = [[leftDatum - x_gap / 2, y], [MMSAProps.x - MMSAProps.width / 2, y]];
    arrowPoints['IN-ADD1'] = [[leftDatum + x_gap / 4, y], [leftDatum + x_gap / 4, bottomDatum - 2],
      [leftDatum + add1_x * width / 100, bottomDatum - 2], [leftDatum + add1_x * width / 100, y + add_width]];

    arrowPoints['MMSA-LN1'] = [[MMSAProps.x + MMSAProps.width / 2, y], [LN1Props.x - LN1Props.width / 2, LN1Props.y]];

    arrowPoints['LN1-ADD1'] = [[LN1Props.x + LN1Props.width / 2, LN1Props.y], [leftDatum + add1_x * width / 100 - add_width, LN1Props.y]];

    arrowPoints['ADD1-CSA'] = [[leftDatum + add1_x * width / 100 + add_width, LN1Props.y], [CSAProps.x - CSAProps.width / 2, CSAProps.y]];

    arrowPoints['ADD1-ADD2'] = [[leftDatum + (add1_x + x_gap / 4) * width / 100 + 3, y],
      [leftDatum + (add1_x + x_gap / 4) * width / 100 + 3, bottomDatum - 2],
      [leftDatum + add2_x * width / 100, bottomDatum - 2], [leftDatum + add2_x * width / 100, y + add_width]];

    arrowPoints['CSA-LN2'] = [[CSAProps.x + CSAProps.width / 2, CSAProps.y], [LN2Props.x - LN2Props.width / 2, LN2Props.y]];

    arrowPoints['LN2-ADD2'] = [[LN2Props.x + LN2Props.width / 2, LN2Props.y], [leftDatum + add2_x * width / 100 - add_width, LN2Props.y]];

    arrowPoints['ADD2-FF'] = [[leftDatum + add2_x * width / 100 + add_width, LN2Props.y], [ffProps.x - ffProps.width / 2, ffProps.y]];
    arrowPoints['FF-LN3'] = [[ffProps.x + ffProps.width / 2, ffProps.y], [LN3Props.x - LN3Props.width / 2, LN3Props.y]];
    arrowPoints['LN3-ADD3'] = [[LN3Props.x + LN3Props.width / 2, LN3Props.y], [leftDatum + add3_x * width / 100 - add_width, LN3Props.y]];

    arrowPoints['ADD2-ADD3'] = [[leftDatum + (add2_x + x_gap / 4) * width / 100 + 3, y],
      [leftDatum + (add2_x + x_gap / 4) * width / 100 + 3, bottomDatum - 2],
      [leftDatum + add3_x * width / 100, bottomDatum - 2], [leftDatum + add3_x * width / 100, y + add_width]];

    arrowPoints['ADD3-OUT'] = [[leftDatum + add3_x * width / 100 + add_width, LN3Props.y], [rightDatum + x_gap / 2, LN3Props.y]];

  }

  return (
    <svg id={id} style={{ cursor: 'pointer' }}>
      <LinearLayer {...thisProps} />
      {active && <LinearLayer {...MMSAProps} />}
      {active && <LinearLayer {...LN1Props} />}
      {active && <LinearLayer {...CSAProps} />}
      {active && <LinearLayer {...LN2Props} />}
      {active && <LinearLayer {...ffProps} />}
      {active && <LinearLayer {...LN3Props} />}
      {active &&
        <svg id={`${id}-3`} x={leftDatum + add1_x * width / 100 - 3} y={y - 3} onClick={() => setComps(`${id}-3`)} ref={ref} fill="#ffffff" version="1.1" >
          <circle cx={3} cy={3} r={3} fill={fill}/>
          <g  transform={`scale(0.012 0.012)`}>
            {/*SVG Downloaded from https://www.svgrepo.com/svg/113575/plus*/}
            <path d="M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89
                c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z" stroke={"#ffffff"}/>
            <path d="M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7
                c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2
                c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z" stroke={"#ffffff"}/>
          </g>
        </svg>}

      {active &&
        <svg id={`${id}-6`} x={leftDatum + add2_x * width / 100 - 3} y={y - 3} onClick={() => setComps(`${id}-6`)} ref={ref} fill="#ffffff" version="1.1" >
          <circle cx={3} cy={3} r={3} fill={fill}/>
          <g  transform={`scale(0.012 0.012)`}>
            {/*SVG Downloaded from https://www.svgrepo.com/svg/113575/plus*/}
            <path d="M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89
                c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z" stroke={"#ffffff"}/>
            <path d="M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7
                c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2
                c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z" stroke={"#ffffff"}/>
          </g>
        </svg>}

      {active &&
        <svg id={`${id}-9`} x={leftDatum + add3_x * width / 100 - 3} y={y - 3} onClick={() => setComps(`${id}-9`)} ref={ref} fill="#ffffff" version="1.1" >
          <circle cx={3} cy={3} r={3} fill={fill}/>
          <g  transform={`scale(0.012 0.012)`}>
            {/*SVG Downloaded from https://www.svgrepo.com/svg/113575/plus*/}
            <path d="M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89
                c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z" stroke={"#ffffff"}/>
            <path d="M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7
                c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2
                c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z" stroke={"#ffffff"}/>
          </g>
        </svg>}
      {(activeComp === `${id}-3` || activeComp === `${id}-6` || activeComp === `${id}-9`)  && <image href="./assets/residual_connection.jpg" x={id !== 8 ? rightDatum + 10 : leftDatum - 85} y={0} width="75" height="75" />}


      {active && <Minimize width={4.5} height={4.5} x={rightDatum - 7} y = {topDatum + 2} onClick={closeComps} fill={fill} />}
      {active && <Arrow id={'IN-MMSA'} points={arrowPoints['IN-MMSA']} />}
      {active && <Arrow id={'IN-ADD1'} points={arrowPoints['IN-ADD1']} />}
      {active && <Arrow id={'MMSA-LN1'} points={arrowPoints['MMSA-LN1']} />}
      {active && <Arrow id={'LN1-ADD1'} points={arrowPoints['LN1-ADD1']} />}
      {active && <Arrow id={'ADD1-CSA'} points={arrowPoints['ADD1-CSA']} />}
      {active && <Arrow id={'CSA-LN2'} points={arrowPoints['CSA-LN2']} />}

      {active && <Arrow id={'ADD1-ADD2'} points={arrowPoints['ADD1-ADD2']} />}
      {active && <Arrow id={'LN2-ADD2'} points={arrowPoints['LN2-ADD2']} />}
      {active && <Arrow id={'ADD2-FF'} points={arrowPoints['ADD2-FF']} />}
      {active && <Arrow id={'FF-LN3'} points={arrowPoints['FF-LN3']} />}
      {active && <Arrow id={'LN3-ADD3'} points={arrowPoints['LN3-ADD3']} />}
      {active && <Arrow id={'ADD2-ADD3'} points={arrowPoints['ADD2-ADD3']} />}
      {active && <Arrow id={'ADD3-OUT'} points={arrowPoints['ADD3-OUT']} />}
    </svg>
  );
}

export default Decoder;
