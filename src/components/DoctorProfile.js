import React from "react";
import "semantic-ui-css/semantic.min.css";
import Popup from "reactjs-popup";

const DoctorProfile = (props) => {


  console.log(props)
  return (
    <div>
      <Popup
        trigger={<button className="ui blue basic button">Profile</button>}
        modal
        closeOnDocumentClick
        >
        <span>
          <h1>About</h1>
            <hr />
            <br />
            <p>{props.docProfile.bio}</p>
            <br />
        </span>
      </Popup>
    </div>
  );
};

export default DoctorProfile;
