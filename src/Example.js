import React from "react";

export default function Example(props) {
  if (props.example && props.example.length > 0) {
    return (
      <div>
        <strong>Example: </strong>
        <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
