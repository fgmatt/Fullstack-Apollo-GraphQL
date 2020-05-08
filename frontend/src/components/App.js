import React, { Component } from "react";
import Login from "./Login";
import NewLogin from "./NewLogin";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Login />
        <NewLogin />
      </div>
    );
  }
}

export default App;
