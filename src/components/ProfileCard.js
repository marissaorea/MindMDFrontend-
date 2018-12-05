import React from "react";
import "../ProfileCard.css";
import Appointment from "../components/Appointments"


const ProfileCard = (props) => {


  return (
    <div className="main-div">
      <div className="ui card">
        <img src="./marissa.jpg" className="ui image" />
        <div className="content">
          <div className="header">{props.user.name}</div>
          <div className="description">
            Mood Today: Cheerful
          </div>
        </div>
        <div className="extra content">
          <div className="meta">Date: Thursday, December 15, 2018</div>
        </div>
      </div>
      <div >
        <Appointment />
      </div>
    </div>
  );
};

export default ProfileCard;
