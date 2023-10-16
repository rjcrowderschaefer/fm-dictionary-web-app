import React, { useState, useRef, useEffect } from "react";

function Search({ onSearch }) {
  const [searchedWord, setSearchedWord] = useState("");
  const errorRef = useRef(null);
  const inputRef = useRef(null);


useEffect(() => {
    inputRef.current.style.border = "1px solid transparent";
}, []);

  const handleChange = (e) => {
    setSearchedWord(e.target.value);
    errorRef.current.style.display = "none";
    inputRef.current.style.border = "1px solid transparent";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSearch(searchedWord);
    }
  };
  
  function validate() {
    const word = searchedWord;
    const wordLength = word.length;
    console.log(word);
    if (wordLength <= 0) {
        errorRef.current.style.display = "block";
        inputRef.current.style.border = "1px solid #FF5252"
        return false;
    }
    return true;
}

  return (
    <>
      <div className="search-container">
        <form 
        ref={inputRef}
        onSubmit={handleSubmit}>
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
      <div id="required-error" className="empty-error" ref={errorRef}>
        Whoops, can't be empty...
      </div>
    </>
  );
}

export default Search;
