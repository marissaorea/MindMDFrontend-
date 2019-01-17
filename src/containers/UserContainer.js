import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ProfileCard from "../components/ProfileCard"

class UserContainer extends Component {
  state = {
    currentUser: {},
    isLoggedIn: false
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

logOut = () => {
    window.localStorage.removeItem("jwtToken")
    this.setState({
      isLoggedIn: false
    })
}


  render() {
    console.log(this.logout)
    if (!localStorage.getItem("jwtToken")) {
      return <Redirect to="/login" />;
    } else {
      return(
        <div>
          <ProfileCard currentUser={this.state.currentUser}  logOut={this.logOut}/>
        </div>
      );
    }
  }
}

export default UserContainer;
