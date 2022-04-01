import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.keyword);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function getWordMeaning(response) {
    setDefinition(response.data);
  }

  function Search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(getWordMeaning);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function load() {
    setLoaded(true);
    Search();
  }

  function SetSearchInput(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  if (loaded) {
    console.log(definition);
    return (
      <div className="Dictionary">
        <div className="header">
          <h1>
            <FontAwesomeIcon icon={faBook} /> Define
          </h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={SetSearchInput} />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="results-container">
          <Results definition={definition} />{" "}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
