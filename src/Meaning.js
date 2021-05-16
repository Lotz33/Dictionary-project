import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning text-capitalize">
      <em>{props.meaning.partOfSpeech}:</em>{" "}
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
