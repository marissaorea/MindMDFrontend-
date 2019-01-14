import React, { Component } from 'react';
import ProfileList from '../containers/ProfileList'
import { Redirect } from "react-router-dom";

class UserProfile extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(response => response.json())
      .then(users => {
        this.setState({
          users: users
        });
      });
  }

  //find user by id and render on the page



  render() {
    console.log(this.state)
    if (!localStorage.getItem("jwtToken")) {
      return <Redirect to="/login" />;
    } else {
    return (
      <div>
        <ProfileList users={this.state.users}/>
      </div>
      );
    }
  }
}

export default UserProfile;
