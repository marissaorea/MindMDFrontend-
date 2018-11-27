import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import "../NavBar.css";


const NavBar = () => {

  return(
    <div className="nav-bar">
      <NavLink style={{ marginRight: '20px' }} to="/"> Home</NavLink>
      <NavLink style={{ marginRight: '20px' }} to="/doctors">List of Doctors</NavLink>
    </div>
  )




}
export default NavBar;
