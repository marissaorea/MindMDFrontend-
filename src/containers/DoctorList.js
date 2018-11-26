import React from "react";
import DoctorCard from "../components/DoctorCard";


class DoctorList extends React.Component {


  render() {
    console.log(this.docProfile())
    return(
      <div>
        {this.props.docData.map(doctorInfo => (
          <DoctorCard key={doctorInfo.uid} doctorInfo={doctorInfo} />
        ))}
      </div>
    );
  }

} //end of class

export default DoctorList;
