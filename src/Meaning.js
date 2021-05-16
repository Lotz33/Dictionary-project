import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>{" "}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>
                <strong>Example:</strong> {definition.example}
              </em>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}
