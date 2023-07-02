import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Encoder(props) {
  const ref = useRef();
  const { id, width, height, x, y, fill, rx, ry, onClick, isBlurred } = props;
  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("rect")
      .data([null]) // single datum
      .join("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("x", x -width / 2)
      .attr("y", y -height / 2)
      .attr("fill", fill)
      .attr("rx", rx)
      .attr("ry", ry)
      .style("opacity", isBlurred ? 0.5 : 1)
      .style("filter", isBlurred ? "blur(5px)" : "none");

    svg.selectAll("text")
      .data([null]) // single datum
      .join("text") // create text element if it doesn't exist
      .text("Encoder-" + (id - 2) )
      .attr("x", x)
      .attr("y", y) // y is flipped
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-size", "3px")
      .attr("fill", "white")
      .style("opacity", isBlurred ? 0.2 : 1)
      .style("filter", isBlurred ? "blur(5px)" : "none");

  }, [id, width, height, x, y, fill, rx, ry, isBlurred]);

  return (
    <svg ref={ref} id={id} onClick={onClick} style={{ cursor: 'pointer' }}></svg>
  );
}

export default Encoder;
