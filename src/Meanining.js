import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <span key={index}>
            <span>
              <div className="Definition">{definition.definition} </div>
              <div className="Example">
                {" "}
                <Example example={definition.example} />{" "}
              </div>
              <div className="Synonym">
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </span>
          </span>
        );
      })}
    </div>
  );
}
