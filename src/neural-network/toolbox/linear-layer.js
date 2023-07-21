import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function getTextWidth(text, font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

function LinearLayer(props) {
  const [showAnnotation, updateShowAnnotation] = React.useState(false);
  const { id, width, height, x, y, fill, text, textProps, rx, ry, wrapText, showText, isBlurred, annotation} = props;

  const words = text.split(" ");
  const lines = [];
  const fSize = textProps.fontSize;
  let line = "";

  words.forEach((word, i) => {
    const testLine = `${line} ${word}`;
    const testWidth = getTextWidth(testLine, fSize);
    if (testWidth > width) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }

    if (i === words.length - 1) {
      lines.push(line);
    }
  });

  function onClick() {
    console.log("clicked")
    updateShowAnnotation(!showAnnotation);
  }

  if(lines[0] === "") lines.shift();

  return (
    <g id={id} onClick={() => onClick()}>
      <rect  width={width} height={height} x={x - width / 2} y={y - height / 2} fill={fill} rx={rx} ry={ry}
             style={{opacity:isBlurred ? 0.5 : 1, filter:isBlurred ? "blur(5px)" : "none"}}></rect>
      { showText && <g>
        {wrapText ?
          <text width={width} height={height} x={x} y={y} transform={`rotate(90, ${x}, ${y})`} style={{...textProps}}>
            {lines.map((line, i) => (
              <tspan x={x} y={y + i * 3} key={i}>
                {line}
              </tspan>
            ))}
          </text> :
          <text width={width} height={height} x={x} y={y} transform={`rotate(90, ${x}, ${y})`}
                style={{...textProps}}>{text}
          </text>
        }
      </g>}
      {showAnnotation && annotation}
    </g>
  );
}

export default LinearLayer;

