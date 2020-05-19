import React from "react";
import { Link } from "react-router-dom";
import Form from "../Elements/Form";
import  LogButton  from "../Elements/Buttons";
import Email from "../Elements/Email";
import  PasswordInput from "../Elements/Password";

class NewLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", passwordb: "" };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordB = this.handleChangePasswordB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleQuitButton = this.handleQuitButton(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleChangePasswordB(event) {
    this.setState({passwordb: event.target.value});
  }

  handleSubmit(event) {
    alert(
      "Eine Email wurde abgeschickt: " +
        this.state.email +
        " Ein Passwort wurde abgeschickt: " +
        this.state.password +
        " Ein Passwort B. wurde abgeschickt: " +
        this.state.passwordb
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
          name="password" 
          value={this.state.password}
          onChange={this.handleChangePassword}
        >
          Passwort:
        </PasswordInput>
        <PasswordInput
          name="passwordb" 
          value={this.state.passwordb}
          onChange={this.handleChangePasswordB}
        >
          Passwort B:
        </PasswordInput>
        <button>
          <Link to="/">Abbrechen</Link>
        </button>
        <LogButton value="Neuer_Benutzer" />
      </Form>
    );
  }
}

export default NewLogin;