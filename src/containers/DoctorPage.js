import React from "react";
import DoctorList from "../containers/DoctorList";
import DoctorSearch from "../containers/DoctorSearch";

class DoctorPage extends React.Component {
  state = {
    docData: []
  };

  componentDidMount() {
    fetch("https://api.betterdoctor.com/2016-03-01/practices?name=therapist&skip=0&limit=100&user_key=21802ea0d6d2c565488582088e578a6c")
      .then(response => response.json())
      .then(doctors => {
        const docList = doctors.data;
        this.setState({
          docData: docList
        });
      });
  }



  render() {
    console.log(this.state);
    return (
      <div>
        <DoctorSearch />
        <div>
          <DoctorList docData={this.state.docData} />
        </div>
      </div>
    );
  }
}
export default DoctorPage;
