import React from "react";
import ProfileCard from "../components/ProfileCard";


class ProfileList extends React.Component {


  render() {
    console.log(this.props)
    return(
      <div>
        {this.props.users.map(user => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>
    );
  }

} //end of class

export default ProfileList;