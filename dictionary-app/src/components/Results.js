import React from "react";

// function Results({ results }) {
//   return (
//     <>
//       <div className="search-results-container">
//         {searchResults &&
//           searchResults.map((result, idx) => {
//             return (
//               <div className="api-return" key={idx}>
//                 <h1>{result.word}</h1>
//                 {result.phonetics &&
//                   result.phonetics.map((phonetic, phoneticIdx) => (
//                     <div key={phoneticIdx}>
//                       <h2>{phonetic.text}</h2>
//                       {result.meanings &&
//                         result.meanings.map((meaning, meaningIdx) => (
//                           <div key={meaningIdx}>
//                             <h2>{meaning.partOfSpeech}</h2>
//                           </div>
//                         ))}
//                     </div>
//                   ))}
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// }

// export default Results;

function Results({ results }) {
    return (
      <div className="search-results-container">
        {results && results.length > 0 ? (
          results.map((result, idx) => (
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
                      ))}
                  </div>
                ))}
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  }

  export default Results;
  
  
  
  
  