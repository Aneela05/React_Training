import React from "react";
import "./App.css";
import axios from "axios";

class Adduser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/user/create",
        { email: this.state.email, name: this.state.name },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        this.props.add(this.state.users);
      })
      .catch((err) => {
        console.log(err.toJSON());
      });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          email:
          <input
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.changeHandler}
            required
          />
        </label>
        <br></br>
        <br></br>
        <label>
          username:
          <input
            name="name"
            type="name"
            placeholder="username"
            value={this.state.name}
            onChange={this.changeHandler}
            required
          />
        </label>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    );
  }
}
export default Adduser;
