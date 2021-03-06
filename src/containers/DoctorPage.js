import React from "react";
import DoctorList from "../containers/DoctorList";
import DoctorSearch from "../containers/DoctorSearch";
import Map from "../containers/Map";
import LoadingSpinner from '../components/LoadingContainer'
import { Redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../CSS/DoctorPage.css";
import NavBar from "../components/NavBar"

class DoctorPage extends React.Component {
  state = {
    docData: [],
    searchTerm: "",
    clicked: false,
    doctorToDisplayIndex: 0,
    doctorListCount: 3,
    insuranceData: [],
    selectedValues: "",
    loading: true,
    isLoggedIn: true
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/doctors")
      .then(response => response.json())
      .then(doctors => {
        this.setState({
          docData: doctors,
          loading: false
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

  doctorsInScope = () => {
    return this.state.insuranceData.filter(iD=>iD.company===this.state.selectedValues).map(iD=>iD.doctor)
  }


  handleChange = event => {
    let searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  filterSearchCity() {
    let results = this.state.docData.filter(docInfo => {
      return docInfo.state.toLowerCase().includes(this.state.searchTerm.toLowerCase());
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

    handleDropDown = (event) => {
      let selectedValues = event.target.value
      console.log("Old selectedValues are", this.state.selectedValues)
      this.setState({selectedValues})
    }


  showNext = () => {
    this.setState(currentState => {
      return { doctorToDisplayIndex: currentState.doctorToDisplayIndex + 3 };
    });
  };

  showBack = () => {
    this.setState(currentState => {
      debugger
      return { doctorToDisplayIndex: currentState.doctorToDisplayIndex - 3 };
    });
  };

  logOut = () => {
      window.localStorage.removeItem("jwtToken")
      this.setState({
        isLoggedIn: false
      })
  }

  render() {
    console.log(this.doctorsInScope())

    if (!localStorage.getItem("jwtToken")) {
      return <Redirect to="/login" />;
    } else {
    return (
      <div className="doctor-page-main">
      <NavBar logOut={this.logOut}/>
        <div className="ui segment">
          <div>
            <DoctorSearch handleChange={this.handleChange} handleDropDown={this.handleDropDown} />
          </div>
        </div>
        <div>
          <div className=" ui grid">
            <div className="ten wide column">
              {this.state.loading ? <LoadingSpinner /> : <DoctorList docData={this.filterSearchCity()} insuranceData={this.doctorsInScope()} /> }
            </div>
            <div className="six wide column">
            <Map docData={this.doctorsInScope()}/>
            </div>
          </div>
        </div>
        <div className="nav-button">
          <button className="ui black button" onClick={this.showBack}>Back Page</button>
          <button className="ui black button" onClick={this.showNext}>Next Page</button>
        </div>
      </div>
      );
    }
  }
}

export default DoctorPage;
