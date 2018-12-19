import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../CSS/NavBar.css";


const NavBar = () => {

  return(
    <div className="nav-bar">
      <NavLink className="home-link" to="/">Home</NavLink>
      <NavLink className="doctors-link" to="/doctors">Search Doctors</NavLink>
      <NavLink className="profile-link" to="/profile">My Appointments</NavLink>
    </div>
    )


}
export default NavBar;
