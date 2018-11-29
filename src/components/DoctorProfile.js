import React from "react";
import "semantic-ui-css/semantic.min.css";
import Popup from "reactjs-popup";

const DoctorProfile = (props) => {



  return (
    <div>
      <Popup
        trigger={<button className="ui blue basic button">Contact</button>}
        modal
        closeOnDocumentClick
        >
        <span>
          <h1>Contact Details</h1>
            <hr />
            <br />
            <address>
              {props.docProfile.street}
              <br />
              <span>{props.docProfile.city}, {props.docProfile.zip}</span>
              <br />
            </address>
              <br />
            <p>Phone: {props.docProfile.phone}</p>
            <br />
        </span>
      </Popup>
    </div>
  );
};

export default DoctorProfile;
