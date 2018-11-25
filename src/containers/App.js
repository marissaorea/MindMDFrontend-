import React, { Component } from 'react';
import '../App.css';
import DoctorPage from '../containers/DoctorPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DoctorPage />
      </div>
    );
  }
}

export default App;
