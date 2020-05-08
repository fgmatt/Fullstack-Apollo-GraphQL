import React from "react";
import { Link } from "react-router-dom";
import Email from "../Elements/Email";
import Password from "../Elements/Password";
import Loginbutton from "../Elements/Loginbutton";
import { useMutation } from "@apollo/react-hooks";
import SIGNIN from "../../graphQL/mutations";

// const [signin, { data }] = useMutation(SIGNIN);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert(
      "Eine Email wurde abgeschickt: " +
        this.state.email +
        " Ein Passwort wurde abgeschickt: " +
        this.state.password
    );
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <label>
          E-Mail:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </label>
        <label>
          Passwort:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <p>
          <Link to="/NeuerBenutzer">Neuer Benutzer</Link>
        </p>
        <input type="submit" value="Login" />
        {/* <Email />
      <Password />
      <Loginbutton /> */}
      </form>
    );
  }
}

export default Login;

