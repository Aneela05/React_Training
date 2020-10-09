import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Normal extends React.Component {
  render() {
    return (
      <div>
        <h1>Normal Dashboard</h1>
        <h2>Hi {localStorage.getItem("name")} </h2>
      </div>
    );
  }
}

export default Normal;
