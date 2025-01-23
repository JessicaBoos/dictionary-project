import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictioanary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="Search"
          autoFocus={true}
          placeholder="Search for a word..."
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
