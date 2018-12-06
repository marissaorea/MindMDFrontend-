import React from "react";
import DoctorCard from "../components/DoctorCard";


class DoctorList extends React.Component {

  render() {

    return(
      <div>
        {this.props.docData.map(doctorInfo => (
          <DoctorCard key={doctorInfo.id} doctorInfo={doctorInfo} renderMore={this.showNext} />
        ))}
        <div>
        {this.props.insuranceData.map(doctorInfo => (
          <DoctorCard key={doctorInfo.id} doctorInfo={doctorInfo}  />
        ))}
        </div>
      </div>
    );
  }

} //end of class

export default DoctorList;
