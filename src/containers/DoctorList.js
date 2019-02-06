import React from "react";
import DoctorCard from "../components/DoctorCard";


class DoctorList extends React.Component {

  render() {

    return(
      <div>
        {this.props.docData.map(doctorInfo => (
          <DoctorCard key={doctorInfo.id} doctorInfo={doctorInfo} renderMore={this.showNext} />
        ))}
      </div>
    );
  }

} //end of class

export default DoctorList;
