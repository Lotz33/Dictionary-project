import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2 className="text-capitalize">
          <strong>{props.result.word}</strong>
        </h2>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
