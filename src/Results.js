import React, { useState } from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";
import Audio from "./Audio";
import Synonyms from "./Synonyms";

export default function Results(props) {
  const [activeMeaningIndex, setActiveMeaningIndex] = useState(0);
  console.log(props);
  if (props.definition) {
    return (
      <div className="Results">
        <div className="keyword-section">
          <h2 className=" word text-capitalize">{props.definition[0].word}</h2>

          <Phonetics props={props} />
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

          <Definitions props={props} index={activeMeaningIndex} />
          <Synonyms props={props} index={activeMeaningIndex} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
