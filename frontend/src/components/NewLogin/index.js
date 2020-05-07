import React from "react";

class NewLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", passwordb: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    this.setState({
      email: target.value,
      password: target.value,
      passwordb: target.value,
    });
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
        <label>
          Passwort B:
          <input
            name="passwordb"
            type="password"
            value={this.state.passwordb}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Abbrechen" />
        <input type="button" value="Neuer Benutzer" />
        {/* <Email />
      <Password />
      <Loginbutton /> */}
      </form>
    );
  }
}

export default NewLogin;