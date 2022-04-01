import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Audio from "./Audio";

export default function Results(props) {
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

        {props.definition[0].meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
