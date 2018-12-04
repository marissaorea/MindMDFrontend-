import React from "react";
import DoctorProfile from "./DoctorProfile";



class DoctorCard extends React.Component {


  render() {
    console.log(this.props)

    return (
      <div className="ui unstackable items">
        <div className="item">
          <div className="image">
            <img alt="oh no!" src={this.props.doctorInfo.img_url} />
            <div align="center" className="profile-info">
              <br />
              <DoctorProfile docProfile={this.props.doctorInfo}/>
            </div>
          </div>
          <div className="content">
            <br />
            <p id="main-header" className="header">
              Dr. {this.props.doctorInfo.first_name} <br />
            </p>
            <p id="main-header" className="header">
              {this.props.doctorInfo.last_name}
            </p>
            <div className="meta">
              <span>{this.props.doctorInfo.title}</span>
            </div>
            <div className="description">
              <p>{this.props.doctorInfo.office_name}</p>
            </div>
            <div className="extra">Phone: {this.props.doctorInfo.bio}</div>
            <hr />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorCard;
