import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>{definition.definition}</div>
            <div>{definition.example}</div>
          </div>
        );
      })}
    </div>
  );
}
