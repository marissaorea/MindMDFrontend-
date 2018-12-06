import React from "react";
import "../ProfileCard.css";
import Appointment from "../components/Appointments"
// import Chart from "../components/Chart"


const ProfileCard = (props) => {


  return (
    <div className="main-div">
      <div className="ui card">
        <img src="https://semantic-ui.com/images/avatar/large/helen.jpg" className="ui image" />
        <div className="content">
          <div className="header">{props.user.name}</div>
          <div className="description">
            Mood Today: Cheerful
          </div>
        </div>
        <div className="extra content">
          <div className="meta">Date: Thursday, December 6, 2018</div>
        </div>
      </div>
      <div >
        <Appointment />
      </div>
    </div>
  );
};

export default ProfileCard;
