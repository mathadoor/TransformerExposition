import React, { useEffect, useRef, useState } from 'react';
import Creatable from 'react-select/creatable';
import * as d3 from 'd3';

const members = [
  "A man is walking in the street.",
  "The dog is running in the park.",
  "The cat is sitting on the table.",
  "The computer is sitting on the table.",
  "The woman is brushing her teeth.",
  "A man is smiling at a stuffed lion.",
  "A man in a blue shirt is standing on a ladder cleaning a window.",
  "A little girl climbing into a wooden playhouse.",
  "Boys dancing on poles in the middle of the night.",
  "A man in a neon green and orange uniform is driving on a green tractor.",
  "We had a delicious dinner at the new restaurant.",
  "He enjoys playing soccer in his free time.",
  "My daughter is sleeping in her room."
]


function Input(props) {
  const selectRef = useRef();
  const { id, width, height, x, y, fill, rx, ry, isBlurred, selectionCallback  } = props;
  const [selectedOption, setSelectedOption] = useState(members[0]);
  const handleChange = (selected) => {
    setSelectedOption(selected);
    selectionCallback(selected);
  }
  const options = members.map((member) => ({ value: member, label: member }));
  const styles = {
    container : () => ({
      position: "absolute",
      width: `${width}%`,
      height: `${height}%`,
      left:`${x - width / 2}%`,
      top:`${y - height / 4}%`,
      boxSizing: "border-box",
      fontSize: "14px",
      filter: isBlurred ? "blur(5px)" : "none"
    }),
    menu: () => ({
        position: "relative",
        maxHeight : `${height}%`,
        backgroundColor: "white",
    }),

  }

  return (
    <Creatable styles={styles}
               isDisabled={isBlurred}
      options={options}
      onChange={handleChange}
      menuPortalTarget={document.body}
      menuPosition={'fixed'}
      formatOptionLabel={(option) => (
       <div style={{ whiteSpace: 'normal' }}>{option.label}</div>
     )}
      placeholder="Type or select a sentence"
      />);
}

export default Input;
