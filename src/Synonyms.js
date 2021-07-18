import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <br />
        <strong>Similar words:</strong>
        <ul>
          {props.synonyms.map(function (synonym, i) {
            return <li key={i}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
