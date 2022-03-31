import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  function example(definition) {
    if (definition.example) {
      return <div className="example">"{definition.example}"</div>;
    }
  }

  return (
    <div className="Meaning">
      <h4 className="speech-part">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definition">
            <div>{definition.definition}</div>
            {example(definition)}
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
