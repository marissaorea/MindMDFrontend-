import React, { Component } from 'react';
import '../App.css';
import DoctorPage from '../containers/DoctorPage'
import DoctorList from '../containers/DoctorList'
import GoogleMap from '../containers/GoogleMap'
import DoctorSearch from '../containers/DoctorSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DoctorPage />
        <DoctorList />
        <GoogleMap />
        <DoctorSearch />
      </div>
    );
  }
}

export default App;
