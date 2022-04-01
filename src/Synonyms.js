import React from "react";

//return synonyms of the active/displayed meaning
export default function Synonyms(props) {
  return (
    <ul className="Synonyms">
      {props.props.definition[0].meanings[props.index].synonyms.map(function (
        synonym,
        index
      ) {
        return <li key={index}>{synonym}</li>;
      })}
    </ul>
  );
}
