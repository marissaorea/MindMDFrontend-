import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ProfileCard from "../components/ProfileCard"

class UserContainer extends Component {
  state = {
    currentUser: {}
  };

  componentDidMount() {
    if (localStorage.getItem("jwtToken")) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
        }
      })
      .then(response => response.json())
      .then(userLogged => {
        console.log(userLogged)
        this.setState({
          currentUser: userLogged.user
      });
    });
  }
};

  render() {
    console.log(this.state)
    if (!localStorage.getItem("jwtToken")) {
      return <Redirect to="/login" />;
    } else {
      return(
        <div>
          <ProfileCard currentUser={this.state.currentUser} />
        </div>
      );
    }
  }
}

export default UserContainer;
