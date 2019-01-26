import React from "react"
import "semantic-ui-css/semantic.min.css";
import "../CSS/HowItWorks.css";


const HowItWorks = () => {

return (
  <div>
    <div>
      <h3 id="label-highlight">HOW IT WORKS</h3>
    </div>
    <div className="howitworks-container">
      <div className="grid">
        <img alt={"stethoscope"} src={"stethoscope.png"} />
        <h4>Find your Psychiatrists</h4>
        <p className="description">Search through our list filter your insurance.</p>
      </div>
      <div className="grid">
        <img alt={"stethoscope"} src={"speech-bubble.png"} />
        <h4>Chat with our Doctors</h4>
        <p className="description">
          Before you decide to commit booking a Psychiatrist, chat with them!
        </p>
      </div>
    </div>
  </div>
);



}
export default HowItWorks;
