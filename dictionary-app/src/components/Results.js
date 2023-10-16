import React from "react";
import Error from "../pages/Error";

function Results({ errorMessage, results }) {
  let content;
  
  if (errorMessage) {
    content = (
        <div className="error-message">
            
            <Error />
        </div>
    );
  } else if (results === null) {
    content = null;
  } else if (results.length > 0) {
      content = results.map((result, idx) => (
        <div className="api-return" key={idx}>
          <h1>{result.word}</h1>
          {result.phonetics &&
            result.phonetics.map((phonetic, phoneticIdx) => (
              <div key={phoneticIdx}>
                <h2>Phonetic: {phonetic.text}</h2>
                {result.meanings &&
                  result.meanings.map((meaning, meaningIdx) => (
                    <div key={meaningIdx}>
                      <h2>Part of Speech: {meaning.partOfSpeech}</h2>
                      <ul>
                        {meaning.definitions.map((definition, defIdx) => (
                          <li key={defIdx}>
                            <strong>Definition:</strong> {definition.definition}
                            {definition.example && (
                              <div>
                                <strong>Example:</strong> {definition.example}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      ));
    } else {
      content = <p>No results found.</p>;
  }

  return <div className="search-results-container">{content}</div>;
}

export default Results;
