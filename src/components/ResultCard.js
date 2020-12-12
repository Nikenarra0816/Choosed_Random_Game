import React from 'react'

export const ResultCard = () => {
    return (
        <div className="result-card">
          <div className="poster-wrapper">
              <div className="filler-poster" />
          </div>
    
          <div className="info">
            <div className="header">
             <h1></h1>
            </div>
    
            <div className="controls">
              <button
                className="btn"
                // disabled={}
                // onClick={}
              >
                Add to Hero
              </button>
    
              <button
                className="btn"
                // disabled={}
                // onClick={}
              >
                Add to Minion
              </button>
            </div>
          </div>
        </div>
      );
    };
    