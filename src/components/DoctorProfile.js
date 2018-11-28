import React from "react";
import { Button } from 'semantic-ui-react'
import Popup from "reactjs-popup";

const DoctorProfile = () => {

  return (
    <div>
      <Popup
        trigger={<button basic color='blue'>Profile</button>}
        modal
        closeOnDocumentClick
        >
        <span> Modal content </span>
      </Popup>
    </div>
  );
};

export default DoctorProfile;
