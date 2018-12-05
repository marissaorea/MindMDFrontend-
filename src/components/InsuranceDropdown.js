import React from "react";
import { Dropdown } from 'semantic-ui-react'


const InsuranceDropdown = (props) => {



  return(
    <div id="insurance-drop">
      <select onChange={props.handleDropDown} className='ui search selection dropdown'><option value="">Filter by Insurance</option>
        <option value="Cigna-PPO">Cigna-PPO</option>
        <option value="Cigna-HMO">Cigna-HMO</option>
        <option value="Humana-Choice-Care-Network-PPO">Humana-Choice-Care-Network-PPO</option>
        <option value="Aetna-PPO">Aetna-PPO</option>
        <option value="Bcbsbluecard-PPO">Bcbsbluecard-PPO</option>
        <option value="Multiplan-PPO">Multiplan-PPO</option>
        <option value="Aetna-HMO">Aetna-HMO</option>
        <option value="Medicare">Medicare</option>
        <option value="Medicaid">Medicaid</option>
        <option value="GreatWest-PPO">GreatWest-PPO</option>
        <option value="Empire-Blue-PPO">Empire-Blue-PPO</option>
        <option value="HIP-Insurance-Group">HIP-Insurance-Group</option>
        <option value="WellCare-Group">WellCare-Group</option>
      </select>
    </div>
  );
};
export default InsuranceDropdown;
