import React from "react";
// import "../Appointment.css";

const Appointment = (props) => {



  return (
    <div className="appointment-card">
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <div class="header">Confirmed Appointment</div>
          <div class="description">
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
