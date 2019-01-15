import React from "react";
import "../CSS/ProfileCard.css";
import Appointment from "../components/Appointments"
import Chart from "../components/Chart"


const ProfileCard = (props) => {

  console.log(props.currentUser)

  return(
    <div className="main-div">
      Welcome, {props.currentUser.name}!
      <div className="ui card">
        <img src={props.currentUser.profile_img} className="ui image" />
        <div className="content">
          <div className="header">{props.currentUser.name}</div>
          <div className="description">
            Email: {props.currentUser.email}
          </div>
        </div>
        <div className="extra content">
          <div className="meta">Date: Thursday, December 6, 2018</div>
        </div>
      </div>
      <div >
        <Appointment />
        <Chart />
      </div>
    </div>
  );
};

export default ProfileCard;
