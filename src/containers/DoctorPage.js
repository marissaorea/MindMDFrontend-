import React from "react";
import DoctorList from "../containers/DoctorList";
import DoctorSearch from "../containers/DoctorSearch";

class DoctorPage extends React.Component {
  state = {
    docData: []
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



  render() {
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
