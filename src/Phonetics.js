import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
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
