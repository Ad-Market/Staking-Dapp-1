// main applications where to render all the componenets
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Web3 from "web3";

// create class for component
class App extends Component {
  // calls load web3 before rendering
  async UNSAFE_componentWillMount() {
    // calling load web3
    await this.loadWeb3();
    // loading blochain Data
    await this.loadBlockchainData();
  }
  // web3 detect metamask when loading page
  async loadWeb3() {
    // if we detect metamask
    if (window.ethereum) {
      // create new instance for web3
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      // if we find web3 then we go with the provider
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("No ethereum browser detected, example: MetaMast");
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const account = web3.eth.getAccounts();
    console.log(account);
  }

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
