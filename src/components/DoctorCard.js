import React from "react";

const DoctorCard = props => {
  console.log(props);
  // debugger
  return (
    <div class="ui unstackable items">
  <div class="item">
    <div class="image">
      <img src="DocAvatar.png"/>
    </div>
    <div class="content">
      <br />
      <a id="main-header" class="header">Header</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <div class="extra">
        Additional Details
      </div>
    </div>
  </div>
  </div>
  );
};
export default DoctorCard;
