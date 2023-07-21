import React, {useState, useRef, useEffect} from 'react';
import * as d3 from "d3";

function Controller(props){
  const [counter, setCounter] = useState(0);

  const { id, width, height, x, fill, isBlurred, text, counterCallBack } = props;

  const ref = useRef();
  const hoverfill = '#274071'
  const svg = d3.select(ref.current);
  const x_rewind = x - width / 2;
  const x_forward = x_rewind + width / 3;
  const x_reset = x_forward + width / 3;
  let targetLength = typeof text === 'undefined' ? 0 : text.length;

  useEffect(() => {
    targetLength = typeof text === 'undefined' ? 0 : text.length;
  }, [text])

  function updateCounter(counter){
    if(isBlurred) return;
    setCounter(counter);
    counterCallBack(counter);
  }

  return (
    <svg ref={ref} id={id} style={{"filter": isBlurred ? "blur(5px)" : "none"}}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => updateCounter(Math.max(counter - 1, 1))} style={{ cursor: 'pointer' }}>
        <g transform={`translate(${x_rewind}, ${10}) scale(0.33 0.33)`} >
          <rect width={width } height={3 * height} fill="transparent" />
          <path d="M11 8.07141L7.77844 10.3725C6.66174 11.1702 6.66174 12.8298 7.77844 13.6274L11 15.9286M16.5 15.0568V8.94317C16.5 8.1298 15.5806 7.65667 14.9188 8.12944L10.6392 11.1862C10.0809 11.5851 10.0809 12.4149 10.6392 12.8137L14.9188 15.8705C15.5806 16.3433 16.5 15.8702 16.5 15.0568Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke={fill} strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </svg>
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => updateCounter(Math.min(counter + 1, targetLength))} style={{ cursor: 'pointer'}}>
      <g transform={`translate(${x_forward}, ${10}) scale(0.33 0.33)`}  onMouseEnter={() => setIsHovered1(true)}
         onMouseLeave={() => setIsHovered1(false)} >
        <rect width={width } height={3 * height} fill="transparent" />
        <path d="M13 8.07141L16.2215 10.3725C17.3382 11.1702 17.3382 12.8298 16.2215 13.6274L13 15.9286M7.5 15.0568V8.94317C7.5 8.1298 8.41937 7.65667 9.08124 8.12944L13.3608 11.1862C13.9191 11.5851 13.9191 12.4149 13.3608 12.8137L9.08124 15.8705C8.41937 16.3433 7.5 15.8702 7.5 15.0568Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke={fill} strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </svg>
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => updateCounter(1)} style={{ cursor: 'pointer' }}>
      <g transform={`translate(${x_reset}, ${10}) scale(0.33 0.33)`} >
        <rect width={width } height={3 * height} fill="transparent" />
         <g transform={`translate(${4.5}, ${4.5}) scale(0.6 0.6)`}>
           <path d="M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12z" stroke={fill} strokeWidth="1.5" strokeLinecap="round"/>
         </g>
         <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke={fill} strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </svg></svg>
  );
}

export default Controller;
