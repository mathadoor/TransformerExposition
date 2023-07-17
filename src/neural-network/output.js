import React, { useEffect, useRef } from 'react';

function Output(props) {
  const ref = useRef();
  const { id, width, height, x, y, fill, rx, ry, onClick, isBlurred, text } = props;

  useEffect(() => {
    const div = ref.current;
    let outputText = (text === null) ? " " : text.join(" ");

    div.style.width = `${width}%`;
    div.style.height = `${height}%`;
    div.style.left = `${x - width / 2}%`;
    div.style.top = `${y - height / 2}%`;
    div.style.backgroundColor = fill;
    div.style.borderRadius = `20px`;
    div.style.opacity = isBlurred ? 0.5 : 1;
    div.style.filter = isBlurred ? "blur(5px)" : "none";
    div.textContent = outputText;
  }, [id, width, height, x, y, fill, rx, ry, isBlurred, text]);

  return (
    <div ref={ref}
         id={id}
         style={{
           cursor: 'pointer',
           position: 'absolute',
           color: 'white',
           fontSize: '14px',
           display: 'flex',
           lineHeight: '1.5',
           fontFamily: 'Verdana, Geneva, sans-serif',
           justifyContent: 'center',
           alignItems: 'center',
           padding: '20px'
         }}>
    </div>
  );
}

export default Output;
