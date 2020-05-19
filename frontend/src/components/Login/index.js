import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Mutation } from "react-apollo";
import { SIGNIN } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import  LogButton  from "../Elements/Buttons";
import Email from "../Elements/Email";
import  PasswordInput  from "../Elements/Password";

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
      <Form onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <Email
          value={this.state.email}
          onChange={this.handleChangeEmail} 
        />
        <PasswordInput
          name="Password"
          value={this.state.password}
          onChange={this.handleChangePassword}
        >
          Passwort:
        </PasswordInput>
        <p>
          <Link to="/NeuerBenutzer">Neuer Benutzer</Link>
        </p>
        <LogButton value="Login" />
      </Form>
    );
  }
}

export default Login;

