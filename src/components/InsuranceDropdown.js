import React from "react";
import { Dropdown } from 'semantic-ui-react'


const InsuranceDropdown = () => {

  return (
    <div id="insurance-drop">
      <select className='ui search selection dropdown'> <option value="">Gender</option>
        <option value="1">Male</option>
        <option value="0">Female</option>
      </select>
    </div>
  );
};
export default InsuranceDropdown;
