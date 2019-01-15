import React from "react";
import "../CSS/ProfileCard.css";
import Appointment from "../components/Appointments"
import Chart from "../components/Chart"
import NavBar from "../components/NavBar"


const ProfileCard = (props) => {

  console.log(props.currentUser)

  function currentDate() {
  var tempDate = new Date();
  var date = tempDate.getMonth()+1 + '/' + tempDate.getDate() + '/' + tempDate.getFullYear()
  const currDate = "Date: " + date;
  return(
    <p>{currDate}</p>
  );
}

  return(
    <>
    <NavBar />
    <div className="main-div">
      Welcome, {props.currentUser.name}!
      <div className="ui card">
        <img src="https://www.pmidpi.com/wp-content/uploads/2015/07/person-placeholder.jpg" className="ui image" />
        <div className="content">
          <div className="header">{props.currentUser.name}</div>
          <div className="description">
            Email: {props.currentUser.email}
          </div>
        </div>
        <div className="extra content">
          <div className="meta">{currentDate()}</div>
        </div>
      </div>
      <div >
        <Appointment />
        <Chart />
      </div>
    </div>
    </>
  );
};

export default ProfileCard;
