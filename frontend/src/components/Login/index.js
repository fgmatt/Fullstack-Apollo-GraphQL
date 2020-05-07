import React from "react";
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    this.setState({
      email: target.value,
      password: target.value,
    });
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
            onChange={this.handleChange}
          />
        </label>
        <label>
          Passwort:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Login" />
        {/* <Email />
      <Password />
      <Loginbutton /> */}
      </form>
    );
  }
}

export default Login;
