import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import "../NavBar.css";


const NavBar = () => {

  return(
    <div className="nav-bar">
      <NavLink className="home-link" style={{ marginRight: '20px', color: '#231C3A'}} to="/"> Home</NavLink>
      <NavLink className="doctors-link" style={{ marginRight: '20px', color: '#231C3A' }} to="/doctors">Get Started</NavLink>
    </div>
  )




}
export default NavBar;
