import React, { Component } from 'react';
import ProfileList from '../containers/ProfileList'

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



  render() {
    console.log(this.state)
    return (
      <div>
        <ProfileList users={this.state.users}/>
      </div>
    );
  }
}

export default UserProfile;
