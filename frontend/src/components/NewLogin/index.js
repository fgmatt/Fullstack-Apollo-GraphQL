import React from "react";

class NewLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", passwordb: "" };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordB = this.handleChangePasswordB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <label>
          Passwort B:
          <input
            name="passwordb"
            type="password"
            value={this.state.passwordb}
            onChange={this.handleChangePasswordB}
          />
        </label>
        <input type="button" value="Abbrechen" />
        <input type="submit" value="Neuer Benutzer" />
        {/* <Email />
      <Password />
      <Loginbutton /> */}
      </form>
    );
  }
}

export default NewLogin;