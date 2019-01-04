import React from "react";
import {Redirect} from "react-router-dom"

class Register extends React.Component {

  state = {
    name: "",
    email: "",
    password: ""
  }

  registerUser = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/api/v1/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }
      })
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      localStorage.setItem("jwtToken", json.jwt)
      this.setState({
        name: "",
        email: "",
        password: ""
      })
    })
  }


  handleNameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmailInput = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordInput = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    if(localStorage.getItem('jwtToken')) {
      return <Redirect to="/" />
    } else {
    return(
      <div className="login-page">
      <div className="form">
      <form className="login-form" onSubmit={this.registerUser}>
        <input type="text" placeholder="Full Name" onChange={this.handleNameInput}/>
        <input type="text" placeholder="Email" onChange={this.handleEmailInput} />
        <input type="password" placeholder="Choose Password" onChange={this.handlePasswordInput}/>
        <input id="submit" type="submit" value="Register" />
      </form>
      </div>
      </div>
    );
  }
}
}

export default Register;
