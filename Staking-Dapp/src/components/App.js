// main applications where to render all the componenets
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";

// create class for component
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="text-center">
          <h1>Hello, World</h1>
        </div>
      </div>
    );
  }
}

export default App;
