import React from "react";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  function playAudio() {
    audio.play();
  }
  if (props.phonetic) {
    return <button onClick={playAudio}>hi</button>;
  } else {
    return null;
  }
}
