import React from "react";
import "../DoctorSearch.css";

const DoctorSearch = (props) => {


  return (
    <section className="search-bar-container">
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search by city"}
          onChange={props.handleChange}
        />
        <i className="circular search link icon" />
      </div>
    </section>
  );
};

export default DoctorSearch;
