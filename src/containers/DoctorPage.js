import React from "react";
import DoctorList from "../containers/DoctorList";
import DoctorSearch from "../containers/DoctorSearch";
import GoogleMapContainer from "../containers/GoogleMapContainer";
import "semantic-ui-css/semantic.min.css";
import "../DoctorPage.css";


// <GoogleMapContainer docData={this.filterSearchCity()}/>

class DoctorPage extends React.Component {
  state = {
    docData: [],
    searchTerm: "",
    clicked: false,
    doctorToDisplayIndex: 0,
    doctorListCount: 3
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/doctors")
      .then(response => response.json())
      .then(doctors => {
        this.setState({
          docData: doctors
        });
      });
  }

  handleChange = event => {
    let searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  filterSearchCity() {
    let results = this.state.docData.filter(docInfo => {
      return docInfo.city
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
    return results.slice(
      this.state.doctorToDisplayIndex,
      this.state.doctorToDisplayIndex + this.state.doctorListCount
    );
  }

  showNext = () => {
    this.setState(currentState => {
      return { doctorToDisplayIndex: currentState.doctorToDisplayIndex + 3 };
    });
  };

  showBack = () => {
    this.setState(currentState => {
      return { doctorToDisplayIndex: currentState.doctorToDisplayIndex - 3 };
    });
  };


  render() {
    console.log(this.filterSearchCity());

    return (
      <div className="doctor-page-main">
        <div className="ui segment">
          <div>
            <DoctorSearch handleChange={this.handleChange} />
          </div>
        </div>
        <div>
          <div className=" ui grid">
            <div className="ten wide column">
              <DoctorList
                docData={this.filterSearchCity()}
              />
            </div>
            <div className="six wide column">
            </div>
          </div>
        </div>
        <div className="nav-button">
          <button className="ui teal button" onClick={this.showBack}>BACK</button>
          <button className="ui teal button" onClick={this.showNext}>NEXT</button>
        </div>
      </div>
    );
  }
}

export default DoctorPage;
