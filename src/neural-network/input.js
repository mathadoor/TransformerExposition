import React, { useEffect, useRef, useState } from 'react';
import Creatable from 'react-select/creatable';
import * as d3 from 'd3';

const translations = {
  "A man is walking in the street." : "Ein Mann geht auf der Straße .",
  "The dog is running in the park." : "Der Hund rennt im Park .",
  "The cat is sitting on the table." : "Die Katze sitzt auf dem Tisch .",
  "The computer is sitting on the table." : "Der Computer sitzt auf dem Tisch .",
  "The woman is brushing her teeth.": "Die Frau putzt sich die Zähne .",
  "A man is smiling at a stuffed lion.": "Ein Mann lächelt einen ausgestopften Löwen an .",
  "A man in a blue shirt is standing on a ladder cleaning a window.": "Ein Mann in einem blauen Hemd steht auf einer Leiter und putzt ein Fenster .",
  "A little girl climbing into a wooden playhouse." : "Ein kleines Mädchen klettert in ein hölzernes Spielhaus .",
  "Boys dancing on poles in the middle of the night.": "Mitten in der Nacht tanzen Jungen auf Stangen .",
  "A man in a neon green and orange uniform is driving on a green tractor." : "Ein Mann in neongrün-oranger Uniform fährt auf einem grünen Traktor .",
  "We had a delicious dinner at the new restaurant." : "Wir hatten ein köstliches Abendessen im neuen Restaurant .",
  "He enjoys playing soccer in his free time." : "In seiner Freizeit spielt er gerne Fußball .",
  "My daughter is sleeping in her room." : "Meine Tochter schläft in ihrem Zimmer ."
}


const api_url = "http://127.0.0.1:8080/predictions/tinytransformer";
const api_options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body : null
}


function getTranslation(input) {
  if (input in translations) {
    return translations[input];
  }
  else{
    return null;
  }
}


function Input(props) {
  const selectRef = useRef();
  const { id, width, height, x, y, fill, rx, ry, isBlurred, selectionCallback  } = props;
  const [selectedOption, setSelectedOption] = useState(translations[0]);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    selectionCallback(selected);
  }
  const options = Object.keys(translations).map((input) => ({ value: getTranslation(input), label: input }));
  const styles = {
    container : () => ({
      position: "absolute",
      width: `${width}%`,
      height: `${height}%`,
      left:`${x - width / 2}%`,
      top:`${y - height / 4}%`,
      boxSizing: "border-box",
      fontSize: "14px",
      filter: isBlurred ? "blur(5px)" : "none",
      zIndex:0,
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
