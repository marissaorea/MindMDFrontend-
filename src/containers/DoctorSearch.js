import React from "react";
import "../DoctorSearch.css";
import InsuranceDropdown from "../components/InsuranceDropdown"

const DoctorSearch = (props) => {

  console.log(props)

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
          <InsuranceDropdown handleDropDown={props.handleDropDown} />
        </div>
    </div>
  );
};

export default DoctorSearch;
