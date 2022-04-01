import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  function playAudio() {
    audio.play();
  }
  if (props.phonetic) {
    return (
      <FontAwesomeIcon
        icon={faCirclePlay}
        onClick={playAudio}
        className="audio-icon"
      />
    );
  } else {
    return null;
  }
}
