import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    );
  } else {
    return null;
  }
}
