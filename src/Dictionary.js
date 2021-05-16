import { useState } from "react";
import React from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={keywordChange}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
