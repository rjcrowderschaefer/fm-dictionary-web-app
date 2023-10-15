import React, { useState } from "react";

function Search() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchedWord, setSearchedWord] = useState("");

  async function fetchSearchResult(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
      );
      const data = await response.json();
      setSearchResults(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setSearchedWord(e.target.value);
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={fetchSearchResult}>
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
      <div className="search-results-container">
        {searchResults &&
          searchResults.map((result, idx) => {
            return (
              <div className="api-return" key={idx}>
                <h1>{result.word}</h1>
                {result.phonetics &&
                  result.phonetics.map((phonetic, phoneticIdx) => (
                    <div key={phoneticIdx}>
                      <h2>{phonetic.text}</h2>
                      {result.meanings &&
                        result.meanings.map((meaning, meaningIdx) => (
                          <div key={meaningIdx}>
                            <h2>{meaning.partOfSpeech}</h2>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Search;
