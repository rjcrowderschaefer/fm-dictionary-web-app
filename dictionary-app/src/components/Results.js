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
        <div className="results-header">
          <h1>{result.word}</h1>
          <h2>{result.phonetic}</h2>
          {result.phonetics &&
            result.phonetics.map((phonetic, phoneticIdx) => (
              <div key={phoneticIdx}>
                <audio id={`audio_${idx}_${phoneticIdx}`}>
                  <source src={phonetic.audio} type="audio/mpeg" />
                </audio>
                <button
                  id={`playButton_${idx}_${phoneticIdx}`}
                  onClick={() => handlePlayClick(idx, phoneticIdx)}
                >
                  <svg
                    className="playSVG"
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                  >
                    <g fill="#A445ED" fill-rule="evenodd">
                      <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                      <path d="M29 27v21l21-10.5z" />
                    </g>
                  </svg>
                </button>
              </div>
            ))}
          {result.meanings &&
            result.meanings.map((meaning, meaningIdx) => (
              <div key={meaningIdx}>
                <h2>Part of Speech: {meaning.partOfSpeech}</h2>
                <ul>
                  {meaning.definitions.map((definition, defIdx) => (
                    <li key={defIdx}>
                      <strong>Definition: {definition.definition}</strong>
                      {definition.example && (
                        <div>
                          <strong>Example: {definition.example}</strong>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    ));
  } else {
    content = <p>No results found.</p>;
  }

  // Handle the play button click
  const handlePlayClick = (resultIdx, phoneticIdx) => {
    const audio = document.getElementById(`audio_${resultIdx}_${phoneticIdx}`);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return <div className="search-results-container">{content}</div>;
}

export default Results;
