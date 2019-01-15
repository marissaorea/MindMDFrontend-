import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "../CSS/App.css";
import DoctorPage from "../containers/DoctorPage";
import NavBar from "../components/NavBar";
import LandingPageWelcome from "../components/LandingPageWelcome";
import UserContainer from "../containers/UserContainer";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom"
import Register from "../components/Register"

class App extends Component {

  

  render() {
    return(
      <div className="App">
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={LandingPageWelcome} />
          <Route exact path="/doctors" component={DoctorPage} />
          <Route exact path="/profile" component={UserContainer} />
          <Route exact path="/register" component={Register} />
      </div>
      )
    }
}


export default App;
