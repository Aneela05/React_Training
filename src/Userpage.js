import React from "react";
import "./App.css";
import Adduser from "./Adduser";
import Admin from "./Admin";
import Normal from "./Normal";

class Userpage extends React.Component {
  render() {
    return (
      <div>
        <h1>Userpage</h1>
        <Adduser xyz={this.props.add} />
        <Admin xyz={this.props.users} abc={this.props.delete} />
        <Normal />
      </div>
    );
  }
}

export default Userpage;
