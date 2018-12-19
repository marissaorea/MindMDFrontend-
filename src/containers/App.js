import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../CSS/App.css';
import DoctorPage from '../containers/DoctorPage'
import NavBar from '../components/NavBar'
import LandingPageWelcome from '../components/LandingPageWelcome'
import UserProfile from '../containers/UserProfile'
import LoginForm from '../components/LoginForm'

class App extends Component {




  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={LandingPageWelcome} />
          <Route exact path="/doctors" component={DoctorPage} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/login" component={LoginForm} />
        </div>
      </Router>
    );
  }
}

export default App;
