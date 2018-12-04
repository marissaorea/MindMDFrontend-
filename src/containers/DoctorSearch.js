import React from "react";
import "../DoctorSearch.css";
import DropDown from "../components/InsuranceDropdown"

const DoctorSearch = (props) => {

  return(
    <div className="filter-containers">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder={"Search by city.."}
          onChange={props.handleChange}
        />
        <i className="circular search link icon" />
      </div>
        <div>
          <DropDown />
        </div>
    </div>
  );
};

export default DoctorSearch;
