import React from "react";
import "../CSS/LoginForm.css";
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Register from "./Register"



class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("jwtToken", json.jwt)
        console.log(json)
        this.setState({
          email: "",
          password: ""
        })
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
    console.log("RENDERING")
    if(localStorage.getItem('jwtToken')) {
      return <Redirect to="/" />
    }
     else {
      return(
        <div className="login-page">
        <div className="form">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="email" onChange={this.handleEmailInput} value={this.state.email}/>
          <input type="password" placeholder="password" onChange={this.handlePasswordInput} value={this.state.password}/>
          <input id="submit" type="submit" value="Submit" />
          <NavLink className='message' to='/register'><p>Don't have an account yet? Sign up!</p></NavLink>
        </form>
        </div>
        </div>
      );
    }
  }

}
export default LoginForm;
