import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Encoder(props) {
  const ref = useRef();
  const { id, width, height, x, y, fill, rx, ry, onClick } = props;
  useEffect(() => {
    const svg = d3.select(ref.current);

    svg.selectAll("rect")
      .data([null]) // single datum
      .join("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("x", x)
      .attr("y", y)
      .attr("fill", fill)
      .attr("rx", rx)
      .attr("ry", ry);
  }, [id, width, height, x, y, fill, rx, ry]);

  return (
    <svg ref={ref} id={id} onClick={onClick} style={{ cursor: 'pointer' }}></svg>
  );
}

export default Encoder;
