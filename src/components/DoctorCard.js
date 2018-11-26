import React from "react";

const DoctorCard = props => {
  console.log(props);

  return (
    <div className="ui unstackable items">
      <div className="item">
        <div className="image">
          <img alt="oh no!" src="DocAvatar.png" />
        </div>
        <div className="content">
          <br />
          <a id="main-header" className="header">
            Dr. {props.doctorInfo.first_name} <br />
          </a>
          <a id="main-header" className="header">
            {props.doctorInfo.last_name}
          </a>
          <div className="meta">
            <span>{props.doctorInfo.title}</span>
          </div>
          <div className="description">
            <p>Clinic: {props.doctorInfo.office_name}</p>
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
        </div>
      </div>
    </div>
  );
};


export default DoctorCard;
