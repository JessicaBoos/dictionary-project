import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <span key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}

              <Example example={definition.example} />

              <Synonyms synonyms={definition.synonyms} />
            </p>
          </span>
        );
      })}
    </div>
  );
}
