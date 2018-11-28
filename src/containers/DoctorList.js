import React from "react";
import DoctorCard from "../components/DoctorCard";
import DoctorProfile from "../components/DoctorProfile"


class DoctorList extends React.Component {


  render() {

    return(
      <div>
        {this.props.docData.map(doctorInfo => (
          <DoctorCard key={doctorInfo.id} doctorInfo={doctorInfo} />
        ))}
        <div>
        </div>
      </div>
    );
  }

} //end of class

export default DoctorList;
