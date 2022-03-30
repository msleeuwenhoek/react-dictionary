import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <h2>{props.definition[0].word}</h2>
        <a href={props.definition[0].phonetics[0].audio} target="_blank">
          Listen
        </a>
        <div>{props.definition[0].phonetics[0].text}</div>

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
