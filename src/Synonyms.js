import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div>
        <strong>Synonyms: </strong>
        <span className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <span key={index}> {synonym} </span>;
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
