import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchValue, setSearchValue] = useState("");
  function Search(event) {
    event.preventDefault();
    console.log(searchValue);
  }

  function SetSearchInput(event) {
    event.preventDefault();
    setSearchValue(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={SetSearchInput} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
