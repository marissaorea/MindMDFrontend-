import React from "react";
import "../CSS/DoctorSearch.css";
import InsuranceDropdown from "../components/InsuranceDropdown"
import LoadingSpinner from '../components/LoadingContainer'

const DoctorSearch = (props) => {

  console.log(props)

  return(
        <div>
          <InsuranceDropdown handleDropDown={props.handleDropDown} />
        </div>
  );
};

export default DoctorSearch;
