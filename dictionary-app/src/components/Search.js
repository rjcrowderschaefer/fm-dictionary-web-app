import React, { useState } from "react";

function Search( {onSearch} ) {
  const [searchedWord, setSearchedWord] = useState("");

  
  const handleChange = (e) => {
    setSearchedWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchedWord);
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="word"></label>
          <input
            type="search"
            placeholder="Search..."
            name="word"
            id="word"
            onChange={handleChange}
            value={searchedWord}
          />
          <button type="submit" id="search-button"></button>
        </form>
      </div>
    </>
  );
}

export default Search;
