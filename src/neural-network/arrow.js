import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Arrow({ id, points }) {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const defs = svg.append("defs");

    const marker = defs.append("marker")
      .attr("id", `arrowhead-${id}`)
      .attr("viewBox", "-0 -5 10 10")
      .attr("refX", 9.5)
      .attr("refY", 0)
      .attr("orient", "auto")
      .attr("markerWidth", 4)
      .attr("markerHeight", 3)
      .attr("xoverflow", "visible")
      .append("svg:path")
      .attr("d", "M 0,-5 L 10 ,0 L 0,5")
      .attr("fill", "#aaa")
      .style("stroke", "none");

    const lineGenerator = d3.line();

    const path = svg.append("path")
      .attr("d", lineGenerator(points))
      .attr("marker-end", `url(#arrowhead-${id})`)
      .style("fill", "none")
      .style("stroke", "#aaa")
      .style("stroke-width", 0.8);

    // Cleanup function
    return () => {
      path.remove();
      defs.remove();
    };
  }, [id, points]);

  return <svg ref={ref}></svg>;
}

export default Arrow;
