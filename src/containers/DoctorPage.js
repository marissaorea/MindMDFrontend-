import React from "react";
import DoctorList from "../containers/DoctorList";
import DoctorSearch from "../containers/DoctorSearch";
import GoogleMapContainer from "../containers/GoogleMapContainer";
import "semantic-ui-css/semantic.min.css";
import "../DoctorPage.css";


class DoctorPage extends React.Component {
  state = {
    docData: [],
    searchTerm: "",
    clicked: false,
    doctorToDisplayIndex: 0,
    doctorListCount: 3,
    insuranceData: [],
    filteredInsurance: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/doctors")
      .then(response => response.json())
      .then(doctors => {
        this.setState({
          docData: doctors
        });
      });

      fetch("http://localhost:3000/api/v1/insurances")
        .then(response => response.json())
        .then(insurance => {
          this.setState({
          insuranceData: insurance
          });
        });
  }

  handleChange = event => {
    let searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  filterSearchCity() {
    let results = this.state.docData.filter(docInfo => {
      return docInfo.city.toLowerCase().includes(this.state.searchTerm.toLowerCase());
    });
    return results.slice(
      this.state.doctorToDisplayIndex,
      this.state.doctorToDisplayIndex + this.state.doctorListCount
    );
  }

  filterByInsurance = (insurance_company) => {
    return this.state.insuranceData.filter(insurance => {
      return insurance.company === insurance_company
    });
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

  // console.log(insuranceFilter={})

  render() {
    console.log(this.filterByInsurance("Cigna-PPO"))

    return (
      <div className="doctor-page-main">
        <div className="ui segment">
          <div>
            <DoctorSearch handleChange={this.handleChange} insurance={this.filterByInsurance} />
          </div>
        </div>
        <div>
          <div className=" ui grid">
            <div className="ten wide column">
              <DoctorList docData={this.filterSearchCity()} />
            </div>
            <div className="six wide column">
            <GoogleMapContainer docData={this.filterSearchCity()}/>
            </div>
          </div>
        </div>
        <div className="nav-button">
          <button className="ui black button" onClick={this.showBack}>BACK</button>
          <button className="ui black button" onClick={this.showNext}>NEXT</button>
        </div>
      </div>
    );
  }
}

export default DoctorPage;
