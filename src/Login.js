import React from "react";
import "./App.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.emailHandler = this.emailHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.state = {
      email: "",
      password: "",
      status: "",
      redirect: "",
    };
  }
  loginUser(event) {
    this.setState({ status: "login successful" });
  }

  emailHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  passwordHandler(event) {
    this.setState({
      password: event.target.value,
    });
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("role") === "admin") {
        this.setState({
          redirect: "/Admin",
        });
      } else {
        this.setState({
          redirect: "/Normal",
        });
      }
    }
  }
  submitHandler(event) {
    event.preventDefault();
    console.log(this.state.email);
    api
      .post("/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.loginUser(res.data);
        //storing the data
        localStorage.setItem("token", res.data.token.original.token);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("role", res.data.role);

        console.log(res.data);
        if (res.data.role === "normal") {
          this.setState({
            redirect: "/normal",
          });
        } else {
          this.setState({ redirect: "/admin" });
        }
      })
      .catch((err) => {
        this.setState({ status: "Invalid email/password" });
      });
  }

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirect} />;
    return (
      <form onSubmit={this.submitHandler}>
        <h3>Hello User! Login here</h3>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={this.emailHandler}
              required
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.emailHandler}
              required
            />
          </label>
        </div>
        <br></br>
        <button type="submit">Login</button>

        <p>{this.state.status}</p>

        <p className="forgot password">
          <Link to={"/forgot"}>Forgot password?</Link>
        </p>
        <p className="Reset password">
          <Link to={"/Reset/:id"}> Reset password?</Link>
        </p>
      </form>
    );
  }
}

export default Login;
