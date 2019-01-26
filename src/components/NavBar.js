import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../CSS/NavBar.css";
import {Redirect} from "react-router-dom"

const NavBar = ({logOut}) => {


  if(localStorage.getItem("jwtToken")) {
    return(
      <div className="nav-bar">
        <NavLink className="home-link" to="/">Home</NavLink>
        <NavLink className="doctors-link" to="/doctors">Search Doctors</NavLink>
        <NavLink className="profile-link" to="/profile">My Profile</NavLink>
        <button onClick={logOut} className="logout">Logout</button>
      </div>
      )
    }


}
export default NavBar;
