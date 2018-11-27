import React from "react"
import "semantic-ui-css/semantic.min.css";
import "../LandingPageQuote.css";


const LandingPageQuote = () => {


  return(
    <div className="quote-container">
      <div className="quote">
          <img id="brain" src={"psychology.png"}/>
        <h4 id="quote-text">"A positive attitude gives you power over your circumstances instead of your circumstances having power over you."</h4>
      </div>
    </div>
  )


}
export default LandingPageQuote;
