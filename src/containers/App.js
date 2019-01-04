import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "../CSS/App.css";
import DoctorPage from "../containers/DoctorPage";
import NavBar from "../components/NavBar";
import LandingPageWelcome from "../components/LandingPageWelcome";
import UserProfile from "../containers/UserProfile";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom"

class App extends Component {

  render() {
    if (localStorage.getItem("jwtToken")) {
      return(
      <div className="App">
        <NavBar />
          <Route exact path="/" component={LandingPageWelcome} />
          <Route exact path="/doctors" component={DoctorPage} />
          <Route exact path="/profile" component={UserProfile} />
      </div>
      )
    } else {
      return(
        <div>
        <Route exact path="/login" component={LoginForm} />
        <Redirect to="/login" />
        </div>
        )
      }
  }
}

export default App;
