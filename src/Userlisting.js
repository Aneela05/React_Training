import React, { Component } from "react";
import "./App.css";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import axios from "axios";
import User from "./User";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

class Userlisting extends React.Component {
  componentDidMount() {
    api
      .get("/user", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // this.setState({
        //   persons: res.data.users,
        // });
        this.props.setusers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <table style={{ width: "100%" }}>
        {this.props.xyz.map((user) => {
          return <User key={user.id} user={user} cde={this.props.abc} />;
          // {user.email}-{user.name}-{user.role}
        })}
      </table>
    );
  }
}

export default Userlisting;
