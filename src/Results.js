import React, { useState } from "react";
import Definitions from "./Definitions";
import Phonetic from "./Phonetic";
import Audio from "./Audio";

export default function Results(props) {
  const [activeMeaningIndex, setActiveMeaningIndex] = useState(0);

  if (props.definition) {
    return (
      <div className="Results">
        <div className="keyword-section">
          <h2 className=" word text-capitalize">{props.definition[0].word}</h2>
          <ul className="phonetics">
            {props.definition[0].phonetics.map(function (phonetic, index) {
              return (
                <li key={index}>
                  <Phonetic phonetic={phonetic} />
                </li>
              );
            })}
          </ul>
          <div className="audio">
            {props.definition[0].phonetics.map(function (phonetic, index) {
              return (
                <span key={index}>
                  <Audio phonetic={phonetic} />
                </span>
              );
            })}
          </div>
        </div>
        <div className="Meaning">
          <div className="speech-part-selector">
            {props.definition[0].meanings.map(function (meaning, index) {
              if (index === activeMeaningIndex) {
                return (
                  <span
                    key={index}
                    onClick={() => {
                      setActiveMeaningIndex(index);
                    }}
                  >
                    <h4 className="speech-part active">
                      {meaning.partOfSpeech}
                    </h4>
                  </span>
                );
              } else {
                return (
                  <span
                    key={index}
                    onClick={() => {
                      setActiveMeaningIndex(index);
                    }}
                  >
                    <h4 className="speech-part">{meaning.partOfSpeech}</h4>
                  </span>
                );
              }
            })}
          </div>
          <div>
            <Definitions props={props} index={activeMeaningIndex} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
