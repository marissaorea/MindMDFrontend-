import React from "react";
import "../DoctorSearch.css";

const DoctorSearch = (props) => {

  return (
      <div className="search-bar-container">
        <input
          type="text"
          placeholder={"Search by city.."}
          onChange={props.handleChange}
        />
        <i className="circular search link icon" />
      </div>

  );
};

export default DoctorSearch;
