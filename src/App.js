import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Forgot from "./Forgot";
import Reset from "./Reset";
import Admin from "./Admin";
import Normal from "./Normal";
import ProtectedRoute from "./ProtectedRoute";
import Createpassword from "./Createpassword";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  state = {
    loggeduser: {},
    users: [],
  };
  setusers = (users) => {
    this.setState({ users: users });
  };
  addfunction = (name) => {
    this.setState({ users: [...this.state.users, name] });
  };

  deletefunction = (id) => {
    this.setState({
      users: [...this.state.users.filter((user) => user.id !== id)],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/Home" exact component={Home} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Login" exact component={Login} />
            <Route
              path="/Createpassword/:token"
              exact
              component={Createpassword}
            />
            <ProtectedRoute path="/Admin">
              <Admin
                users={this.state.users}
                add={this.addfunction}
                delete={this.deletefunction}
                login={this.state.loggeduser}
                setusers={this.setusers}
              />
            </ProtectedRoute>
            <Route path="/Normal">
              <Normal user={this.state.loggeduser} />
            </Route>
            <Route path="/Forgot" exact component={Forgot} />
            <ProtectedRoute path="/Reset" component={Reset} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
