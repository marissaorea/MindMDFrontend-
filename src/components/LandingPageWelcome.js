import React from "react"
import "../CSS/LandingPageWelcome.css";
import "semantic-ui-css/semantic.min.css";
import LandingPageQuote from "./LandingPageQuote"
import VideoDiv from "./VideoDiv"
import {Redirect} from "react-router-dom"
import NavBar from "./NavBar"


const LandingPage = () => {
//upper most parent for the other components (except doctors page)

  if (localStorage.getItem("jwtToken")) {
  return(
    <div className="pusher">
      <NavBar />
      <div className="inverted vertical center aligned segment">
          <div className="logo-container">
            <img alt={"psych"} src={"logo.png"} />
          </div>
        </div>
        <LandingPageQuote />
        <VideoDiv />
    </div>
  )
} else {
  return <Redirect to="/login" />

}





}
export default LandingPage;
