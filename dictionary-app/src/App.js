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

const errorTypeToClass = {
  '404': 'not-found-error'
};

function App() {
  const [results, setResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorType, setErrorType] = useState('');

  const fetchSearchResult = async (searchedWord) => {
    setResults(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
      )
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else if (response.status === 404) {
        console.log("404 error");
        setErrorMessage('Resource not found. Please try again.');
        setErrorType('404');
      } else {
        console.log("API request failed");
      }
    } catch (err) {
      console.log(err)
  }
}

  return (
    <>
      <div className="content-container">
        <Header />
        <Search onSearch={fetchSearchResult} />
        <Results errorMessage={errorMessage} results={results} />
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
