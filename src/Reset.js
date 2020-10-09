import React from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.emailHandler = this.emailHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.passwordConfirmHandler = this.passwordConfirmHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.new_passwordHandler = this.new_passwordHandler.bind(this);
    this.state = {
      email: "",
      Old_Password: "",
      New_Password: "",
      New_Password_confirmation: "",
      redirect: null,
      reset: "",
    };
  }

  emailHandler(event) {
    this.setState({ email: event.target.value });
  }

  passwordHandler(event) {
    this.setState({ Old_Password: event.target.value });
  }

  passwordConfirmHandler(event) {
    this.setState({ New_Password_confirmation: event.target.value });
  }

  new_passwordHandler(event) {
    this.setState({ New_Password: event.target.value });
  }

  submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      Old_Password: this.state.Old_Password,
      New_Password: this.state.New_Password,
      New_Password_confirmation: this.state.New_Password_confirmation,
    };
    api
      .post("/reset", data)
      .then((res) => {
        console.log(res.data);
        this.setState({ reset: true });
      })
      .catch((err) => {
        console.log(err.toJSON());
      });
  };

  render() {
    if (this.state.reset) {
      return <Redirect to={"/login"} />;
    }
    return (
      <form onSubmit={this.submitHandler}>
        <h3> Reset password</h3>
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
        <br></br>
        <br></br>
        <label>
          Old Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.Old_Password}
            onChange={this.passwordHandler}
            required
          />
        </label>

        <div>
          <br></br>
          <label>New Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.New_Password}
            onChange={this.new_passwordHandler}
            required
          />
        </div>

        <div>
          <br></br>
          <label>New Password Confirmation:</label>
          <input
            type="password"
            name="password_confirm"
            placeholder="password_confirm"
            value={this.state.New_Password_confirmation}
            onChange={this.passwordConfirmHandler}
            required
          />
        </div>
        <br></br>
        <button type="submit">submit</button>
        <p>{this.state.status}</p>
      </form>
    );
  }
}

export default Reset;
