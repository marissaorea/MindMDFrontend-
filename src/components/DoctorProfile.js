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
          <h1>About:</h1>
            <hr />
          <p>Dr. Dean Ishiki, MD treats patients in Seattle, Washington and specializes in addiction psychiatry, child & adolescent psychiatry, clinical neurophysiology, cognitive & behavioral psychology, counseling psychology, psychiatry, psychology, psychiatry & neurology behavioral neurology & neuropsychiatry, psychiatry & neurology diagnostic neuroimaging, psychiatry & neurology forensic psychiatry, psychiatry & neurology hospice and palliative medicine, psychiatry & neurology psychosomatic medicine, and psychiatry & neurology pain medicine. Dr. Ishiki is licensed to treat patients in Washington. Dr. Ishiki has been found during an automated background check to be clear of any malpractice history and holds one or more active medical licenses."</p>
        </span>
      </Popup>
    </div>
  );
};

export default DoctorProfile;
