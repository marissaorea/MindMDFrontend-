import React from 'react'
import "../CSS/VideoDiv.css"
import TypeIt from 'typeit';
import ClicketyClack from 'react-clicketyclack'

const lines = [
  'Marissa',
  'Alyssa',
  'Joseph',
  'Tahiry',
  'You'
];


const VideoDiv = () => {

  return(
    <div className="main-gif-containers">
      <img src="./iphonegif.gif"/>
      <div className="text-container">
        <h1 id="percent">Personalized for</h1>
        <ClicketyClack id="typing-effect" lines={lines} erase repeat />
        <br/>
        <br/>
        <p className="description"> Need a Psychiatrist? Mind M.D offers on-demand therapy sessions via text-chat if you can't see a doctor in time.</p>
      </div>
    </div>
  )


}
export default VideoDiv;
