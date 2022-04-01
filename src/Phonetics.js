import React from "react";

export default function Phonetic(props) {
  return (
    <ul className="phonetics">
      {props.props.definition[0].phonetics.map(function (phonetic, index) {
        return (
          <li key={index}>
            <span>{phonetic.text}</span>
          </li>
        );
      })}
    </ul>
  );
}
