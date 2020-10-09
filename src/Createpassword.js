import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class Createpassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }
  passwordHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/createpassword", {
        password: this.state.password,
        token: this.props.match.params.token,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.passwordHandler}
          />
        </div>
        <br></br>
        <br></br>
        <button>Button</button>
      </form>
    );
  }
}

export default Createpassword;
