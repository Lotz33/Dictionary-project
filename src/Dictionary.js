import { useState } from "react";
import React from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("code");
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResult(response.data[0]);
  }

  function handlePexelResponse(response) {
    // console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f917000010000017f6e70d1de54409d946c23e54897eb40";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios.get(pexelsApiUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } }).then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={keywordChange} placeholder="Code"></input>
            <input className="submit" type="submit"></input>
          </form>
          <p>Search for a defintion, synonyms and phrasing examples.</p>
        </section>
        <br />
        <Photos photos={photos} />
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
