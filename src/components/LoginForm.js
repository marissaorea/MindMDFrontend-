import React from "react";
import "../CSS/LoginForm.css";


class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }; //end of handleSubmit function

  userlogin = event => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
    }).then(response => {
      debugger
      if(!response) {
        window.alert("invalid")
      } else {
        return response.json()
      }
    })
    .then(jsonObj => {
      if(jsonObj.user) {
        window.localStorage.setItem('jwt', jsonObj.jwt)
        this.props.currentUser(jsonObj.user)
      }
    })
  }; //end of user login function

  render() {
    console.log(this.props)
    return (
      <div className="login-page" onSubmit={this.userlogin}>
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username" onChange={this.handleSubmit}/>
            <input type="password" placeholder="password" onChange={this.handleSubmit}/>
            <input type="submit" value="Sign in" className='loginButtons'/>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginForm;
