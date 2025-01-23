import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictioanary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
