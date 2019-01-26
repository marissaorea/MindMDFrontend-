import React from "react";
import "../CSS/InsuranceDropdown.css";


const InsuranceDropdown = (props) => {

  return(
    <div class="dropdown">
      <button className="dropbtn" onChange={props.handleDropDown}>Filter by Insurance</button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  );
};
export default InsuranceDropdown;


// <select onChange={props.handleDropDown}><option value="">Filter by Insurance</option>
//   <option value="Cigna-PPO">Cigna-PPO</option>
// </select>

// <option value="Cigna-HMO">Cigna-HMO</option>
// <option value="Humana-Choice-Care-Network-PPO">Humana-Choice-Care-Network-PPO</option>
// <option value="Aetna-PPO">Aetna-PPO</option>
// <option value="Bcbsbluecard-PPO">Bcbsbluecard-PPO</option>
// <option value="Multiplan-PPO">Multiplan-PPO</option>
// <option value="Aetna-HMO">Aetna-HMO</option>
// <option value="Medicare">Medicare</option>
// <option value="Medicaid">Medicaid</option>
// <option value="GreatWest-PPO">GreatWest-PPO</option>
// <option value="Empire-Blue-PPO">Empire-Blue-PPO</option>
// <option value="HIP-Insurance-Group">HIP-Insurance-Group</option>
// <option value="WellCare-Group">WellCare-Group</option>
