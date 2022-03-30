import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);

  function getWordMeaning(response) {
    setDefinition(response.data);
  }

  function Search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(getWordMeaning);
  }

  function SetSearchInput(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={SetSearchInput} />
        <input type="submit" value="Search" />
      </form>
      <Results definition={definition} />{" "}
    </div>
  );
}
