import React from "react";
import DoctorProfile from './DoctorProfile'

const DoctorCard = (props) => {


  return (
    <div className="ui unstackable items">
      <div className="item">
        <div className="image">
          <img alt="oh no!" src="DocAvatar.png" />
          <div className="profile-info">
            <br />
            <span align="center"><DoctorProfile/></span>
          </div>
        </div>
        <div className="content">
          <br />
          <p id="main-header" className="header">
            Dr. {props.doctorInfo.first_name} <br />
          </p>
          <p id="main-header" className="header">
            {props.doctorInfo.last_name}
          </p>
          <div className="meta">
            <span>{props.doctorInfo.title}</span>
          </div>
          <div className="description">
            <p>{props.doctorInfo.office_name}</p>
            <address>
              {props.doctorInfo.street}
              <br />
              <span>{props.doctorInfo.city}, </span>
              {props.doctorInfo.street}
              <br />
              {props.doctorInfo.zip}
            </address>
          </div>
          <div className="extra">{props.doctorInfo.bio}</div>
          <hr />
          <br />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
