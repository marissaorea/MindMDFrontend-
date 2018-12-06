import React from 'react'
import "../VideoDiv.css"

const VideoDiv = () => {

  return(
    <div className="main-gif-containers">
      <img src="./depression.gif"/>
      <div className="text-container">
        <h1 id="percent">20%</h1>
        <p id="stat"> Of Americans will experience depression sometime in their lifetime.</p>
        <p id="stat"> Need a Psychiatrist? Search through this curated list. </p>
      </div>
    </div>
  )


}
export default VideoDiv;
