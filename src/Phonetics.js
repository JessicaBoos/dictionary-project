import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {" "}
        Listen!
      </a>

      <span className="Phonetic-text "> → {props.phonetic.text} </span>
    </div>
  );
}
