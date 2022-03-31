import React from "react";

export default function Phonetic(props) {
  function renderAudio() {
    {
      if (props.phonetic.audio) {
        return (
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
          </a>
        );
      } else {
        return null;
      }
    }
  }

  return (
    <div className="Phonetic">
      {renderAudio()}

      <div>{props.phonetic.text}</div>
    </div>
  );
}

//do condintional!!!!
