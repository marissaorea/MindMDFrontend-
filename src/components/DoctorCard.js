import React from "react";
import DoctorProfile from "./DoctorProfile";
import "../CSS/DoctorCard.css";



class DoctorCard extends React.Component {


  render() {
    return (
      <div className="ui unstackable items">
        <div className="item">
          <div className="doc-image">
            <img alt="oh no!" src={this.props.doctorInfo.img_url} />
            <div align="center" className="profile-info">
              <br />
              <DoctorProfile docProfile={this.props.doctorInfo}/>
            </div>
          </div>
          <div className="doc-content">
            <br />
            <p id="main-header" className="header">
              <span> Dr. {this.props.doctorInfo.first_name} {this.props.doctorInfo.last_name}</span>
            </p>
            <p id="main-header" className="header">
            </p>
            <div className="meta">
              <span>{this.props.doctorInfo.title}</span>
            </div>
            <div className="description">
              <p>{this.props.doctorInfo.office_name}</p>
            </div>
            <div className="extra">{this.props.doctorInfo.bio}</div>
            <hr />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorCard;
