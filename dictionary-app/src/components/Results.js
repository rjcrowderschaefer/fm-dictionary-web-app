import React from "react";
import Error from "../pages/Error";

function Results({ errorMessage, results }) {
  let content;
    console.log(results)
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
          <div className="audio">
            {result.phonetics &&
              result.phonetics.map((phonetic, phoneticIdx) => (
                <div key={phoneticIdx}>
                  {phonetic.audio &&
                    phonetic.audio.trim() !== "" &&
                    (phoneticIdx === 0 ||
                      !result.phonetics
                        .slice(0, phoneticIdx)
                        .some((p) => p.audio.trim() !== "")) && (
                      <div>
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
                            <g fill="#A445ED" fillRule="evenodd">
                              <circle
                                cx="37.5"
                                cy="37.5"
                                r="37.5"
                                opacity=".25"
                              />
                              <path d="M29 27v21l21-10.5z" />
                            </g>
                          </svg>
                        </button>
                      </div>
                    )}
                </div>
              ))}
          </div>
        </div>
        <div className="results-meanings">
          {result.meanings &&
            result.meanings.map((meaning, meaningIdx) => (
              <div key={meaningIdx}>
                <div className="meaning-header-container">
                  {meaningIdx === 0 ? (
                    <h2 id="first-partOfSpeech">{meaning.partOfSpeech}</h2>
                  ) : (
                    <h2>{meaning.partOfSpeech}</h2>
                  )}
                  <div className="hl"></div>
                </div>
                <div className="meaning-results-container">
                  <h3>Meaning</h3>

                  {meaning.definitions.map((definition, defIdx) => (
                    <div key={defIdx}>
                      <div className="definition-li-container">
                        <ul>
                          <li className="definition">
                            {definition.definition}
                          </li>
                        </ul>
                        {definition.example && definition.example.length > 0 ? (
                          <div className="example">"{definition.example}"</div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                  {meaning.synonyms && meaning.synonyms.length > 0 && (
                    <div className="synonym-container">
                      <>
                        <h3>Synonyms</h3>
                        {meaning.synonyms.length > 1
                          ? meaning.synonyms.map((synonym, synIdx) => (
                              <div key={synIdx} className="synonym">
                                {synonym},&nbsp;
                              </div>
                            ))
                          : meaning.synonyms.map((synonym, synIdx) => (
                              <div key={synIdx}>
                                <span className="synonym">{synonym}</span>
                              </div>
                            ))}
                      </>
                    </div>
                  )}
                  {meaning.antonyms && meaning.antonyms.length > 0 && (
                    <div className="antonym-container">
                      <>
                        <h3>Antonyms</h3>
                        {meaning.antonyms.length > 1
                          ? meaning.antonyms.map((antonym, antIdx) => (
                              <div key={antIdx} className="antonym">
                                {antonym},&nbsp;
                              </div>
                            ))
                          : meaning.antonyms.map((antonym, antIdx) => (
                              <div key={antIdx}>
                                <span className="antonym">{antonym}</span>
                              </div>
                            ))}
                      </>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
        <div className="source-footer">
          <div className="footer-hl">
            <h4>Source</h4>
            <a href={result.sourceUrls} target="_blank">{result.sourceUrls}</a> 
                    
                </div>
              
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
