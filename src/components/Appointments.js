import React from "react";
// import "../Appointment.css";

const Appointment = (props) => {



  return (
    <div className="appointment-card">
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">Confirmed Appointment</div>
          <div className="description">
            <p><b>Date:</b>Saturday, December 6, 2018</p>
            <p><b>Time:</b>12:15PM</p>
            <p><b>Doctor:</b>Dr. Douglas Saphier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
