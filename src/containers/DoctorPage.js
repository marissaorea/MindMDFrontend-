import React from "react";
import DoctorList from "../containers/DoctorList";
import DoctorSearch from "../containers/DoctorSearch";
import GoogleMapContainer from "../containers/GoogleMapContainer";
import LoadingSpinner from '../components/LoadingContainer'
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
    selectedValues: "",
    loading: true
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
      return { doctorToDisplayIndex: currentState.doctorToDisplayIndex - 3 };
    });
  };

  // console.log(insuranceFilter={})

  render() {
    console.log(this.doctorsInScope())

    return (
      <div className="doctor-page-main">
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
            {this.state.searchTerm ? null : <GoogleMapContainer docData={this.filterSearchCity()}/>}
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
