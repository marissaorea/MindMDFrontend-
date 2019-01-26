import React from 'react'
import "../CSS/VideoDiv.css"
import TypeIt from 'typeit';
import ClicketyClack from 'react-clicketyclack'

const lines = [
  'Marissa',
  'Alyssa',
  'Joseph',
  'Tahiry'
];


const VideoDiv = () => {

  return(
    <div className="main-gif-containers">
      <img src="./iphonegif.gif"/>
      <div className="text-container">
        <h1 id="percent">Personalized for</h1>
        <ClicketyClack lines={lines} erase repeat />
        <p id="stat"> Of Americans will experience depression sometime in their lifetime.</p>
        <p id="stat"> Need a Psychiatrist? Search through this curated list. </p>
      </div>
    </div>
  )


}
export default VideoDiv;
