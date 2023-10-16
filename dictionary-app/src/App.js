import React, { useState } from "react";
import "./App.css";
// import '../dist/output.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";

function App() {
  const [results, setResults] = useState(null);

  // async function fetchSearchResult(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
  //     );
  //     const data = await response.json();
  //     setSearchResults(data);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const fetchSearchResult = async (searchedWord) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
      );
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        console.error("API request failed");
      }
    } catch (err) {
      console.error("Error during API request:", err);
    }
  }

  return (
    <>
      <div className="content-container">
        <Header />
        <Search onSearch={fetchSearchResult} />
        <Results results={results} />
        {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':id'>
          <Route path='' element={<Result />} />
        </Route>
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer /> */}
      </div>
    </>
  );
}

export default App;
