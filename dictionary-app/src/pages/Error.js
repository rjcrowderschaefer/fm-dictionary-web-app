import React from 'react';

function Error() {

    return (
        <>
        <div className="error-container">
            <div className="error-emoji">
                😕
            </div>
            <div className="no-def-found">
                <h3>No Definitions Found</h3>
                <h4 className="secondary-err">Sorry pal, we couldn't find a definition for the word you're looking for. You can try the search again at a later time or head to the web instead.</h4>
            </div>
        </div>
        </>
    );
}

export default Error;