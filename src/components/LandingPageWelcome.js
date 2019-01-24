import React, { Component } from "react";
import "../CSS/LandingPageWelcome.css";
import "semantic-ui-css/semantic.min.css";
import LandingPageQuote from "./LandingPageQuote";
import VideoDiv from "./VideoDiv";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";


class LandingPage extends Component {
  state = {
    isLoggedIn: true
  }

  logOut = () => {
      window.localStorage.removeItem("jwtToken")
      this.setState({
        isLoggedIn: false
      })
  }


  render() {
  if (!localStorage.getItem("jwtToken")) {
    return <Redirect to="/login" />;
  } else {
    return(
      <div className="pusher">
        <NavBar logOut={this.logOut}/>
        <div className="inverted vertical center aligned segment">
          <div className="logo-container">
            <img alt={"psych"} src={"logo.png"} />
          </div>
        </div>
        <LandingPageQuote />
        <VideoDiv />
      </div>
    );
  }
}
};

export default LandingPage;
