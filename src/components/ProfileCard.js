import React from "react";

const ProfileCard = props => {


  return (
    <div>
      <div class="ui card">
        <img src={props.user.profile_img} class="ui image" />
        <div class="content">
          <div class="header">{props.user.name}r</div>
          <div class="description">
            Marissa is a sound engineer living in Brooklyn who enjoys Mariachi music when she's stressed.
          </div>
        </div>
        <div class="extra content">
          <div class="meta">Mood Today: Cheerful</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
