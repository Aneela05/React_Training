import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Userlisting from "./Userlisting";
import Adduser from "./Adduser";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <Adduser add={this.props.add} />
        <br></br>
        <br></br>
        <Userlisting
          xyz={this.props.users}
          abc={this.props.delete}
          setusers={this.props.setusers}
        />
      </div>
    );
  }
}

export default Admin;
