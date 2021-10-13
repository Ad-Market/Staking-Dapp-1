// main applications where to render all the componenets
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";

// create class for component
class App extends Component {
  constructor(props) {
    super(props);
    // innitializing state
    this.state = {
      account: "0x0",
    };
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="text-center">
          <h1>Hello, World</h1>
        </div>
      </div>
    );
  }
}

export default App;
