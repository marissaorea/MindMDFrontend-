import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../CSS/NavBar.css";
import {Redirect} from "react-router-dom"

const NavBar = () => {


  return(
    <div className="nav-bar">
      <NavLink className="home-link" to="/">Home</NavLink>
      <NavLink className="doctors-link" to="/doctors">Search Doctors</NavLink>
    </div>
    )



}
export default NavBar;
