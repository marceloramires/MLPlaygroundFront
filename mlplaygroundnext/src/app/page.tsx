'use client'

import React, { useRef, useState } from 'react';
// import './App.css';
import ResultPanel from './ResultPanel';
import Utils from './utils';


function Home() {

  let inputRef = useRef<HTMLInputElement>(null)
  const [predictData, setPredictData] = useState(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
     const name = inputRef.current?.value ?? "";

    Utils.getNamePrediction(name)
         .then((response) => {
          setPredictData(response);
         })
         .catch((error) => {
             alert('Error:' + error);
         });
 }

  return (
    <form onSubmit={handleSubmit}>
      <div className="App">
          <div className="Header">
            <header>
              ML Playground
            </header>
          </div>
          <div className="Container">
            <div className="MainPanel">
              <p className="PanelHeader">
                Guess where a name is from
              </p>

              <p>
                Type a name below
              </p>
              <input ref={inputRef} type="text" name="name" className="NameInput"/>
              <input type="submit" name="name" className="PredictButton" value="Guess"/>
              <ResultPanel data={predictData}/>
            </div>
          </div>
      </div>
    </form>
  );
}

export default Home;