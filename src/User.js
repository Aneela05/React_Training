import React from "react";
import "./App.css";
import axios from "axios";

class User extends React.Component {
  submitHandler = (e) => {
    axios
      .get(`http://localhost:8000/api/user/delete/${this.props.user.id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.props.cde(this.props.user.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <tr>
        <td> {this.props.user.name}</td>
        <td>{this.props.user.email}</td>
        <td>
          <button onClick={this.submitHandler}>delete</button>
        </td>
      </tr>
    );
  }
}

export default User;
