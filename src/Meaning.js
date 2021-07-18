import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning text-capitalize">
      <section>
        <em>
          <strong>{props.meaning.partOfSpeech}:</strong>
        </em>{" "}
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <p>
                <em>
                  <strong>Example:</strong> {definition.example}
                </em>{" "}
              </p>

              <Synonyms synonyms={definition.synonyms} />
              <hr />
            </div>
          );
        })}
      </section>
    </div>
  );
}
