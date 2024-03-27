import React, { useRef } from 'react';
import './App.css';
import Utils from './utils';

function ResultPanel(response: any) {   
  if (response?.data === null) {
    return (
      <div>
        {JSON.stringify(response)}
      </div>);
  }

  return (
    <div className='ResultPanel'>
    {
      response?.data.map((prediction: any, index: number) => {
        return (
            <div className={index === 0 ? "TopPrediction" : "LesserPrediction"}>
              {
                (-parseFloat(prediction[0])).toFixed(2) + 
                " - " + 
                Utils.flagForNationality(prediction[1]) + 
                " " + 
                prediction[1]
              }
            </div>)
      })
    }
    </div>
  );
}

export default ResultPanel;