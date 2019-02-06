import React from "react";
import "../CSS/DoctorSearch.css";
import LoadingSpinner from "../components/LoadingContainer";
import Select from 'react-select';

class Dropdown extends React.Component {

  state = {
    selectedOption: ''
  }

  nonDuplicate = () => {
    let uniqueList = [];

    let listing = this.props.insuranceData.map((list) => {
      uniqueList.push(list.company)
    });

    let unique = [...new Set(uniqueList)];
    return unique
  }


  option = () => {
    let list = this.nonDuplicate().map((company) => {
      return {'label': company, 'value': company }
    })
      return list;
  }

  handleChange = (selectedOption) => {
     this.setState({ selectedOption });
     console.log(`Option selected:`, selectedOption);
   } //event handler

  render() {
    console.log(this.option())

    return(
        <div>
          <Select value={this.state.selectedOption} options={this.option()}/>
        </div>
      );
    }
}

export default Dropdown;
