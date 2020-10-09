import React from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.nameHandler = this.nameHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.passwordConfirmHandler = this.passwordConfirmHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.SignupUser = this.SignupUser.bind(this);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      status: "",
    };
  }
  SignupUser(event) {
    this.setState({ status: "Signup successful" });
  }

  nameHandler(event) {
    this.setState({
      name: event.target.value,
    });
  }
  emailHandler(event) {
    this.setState({
      email: event.target.value,
    });
  }

  passwordConfirmHandler(event) {
    this.setState({
      password_confirmation: event.target.value,
    });
  }
  passwordHandler(event) {
    this.setState({
      password: event.target.value,
    });
  }

  submitHandler(event) {
    // console.log(this.state.email);
    api
      .post("/register", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      })
      .then((res) => {
        this.SignupUser(res.data);
      })
      .catch((res) => {
        this.setState({ status: "Invalid email/password" });
      });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            username:
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.nameHandler}
              required
            />
          </label>
        </div>
        <br></br>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.emailHandler}
              required
            />
          </label>
        </div>
        <br></br>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.passwordHandler}
              required
            />
          </label>
        </div>
        <br></br>
        <div>
          <label>
            password_confirmation:
            <input
              type="text"
              name="password_confirmation"
              placeholder="password_confirmation"
              value={this.state.password_confirmation}
              onChange={this.passwordConfirmHandler}
              required
            />
          </label>
        </div>
        <br></br>
        <button type="submit">Signup</button>
        <p>{this.state.status}</p>
        <p>Already signed up?</p>
        <Link to={"/login"}>Login</Link>
      </form>
    );
  }
}

export default Register;
