import React from "react";

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
