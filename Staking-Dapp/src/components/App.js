// main applications where to render all the componenets
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Web3 from "web3";
import Tether from "../truffle_abis/Tether.json";
import RWD from "../truffle_abis/RWD.json";
import DecentralBank from "../truffle_abis/DecentralBank.json";
import Main from "./Main.js";

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
    const account = await web3.eth.getAccounts();

    // set state to display the account number in navbar
    this.setState({ account: account[0] });

    // setup network id and hook it up to our contract
    const networkId = await web3.eth.net.getId();

    // load in tether contract
    const tetherData = Tether.networks[networkId];
    if (tetherData) {
      // get the abi and address of the contract andsend it to tether variable using web3
      const tether = new web3.eth.Contract(Tether.abi, tetherData.address);
      this.setState({ tether });

      // get balance of the account
      let tetherBalance = await tether.methods
        .balanceOf(this.state.account)
        .call();
      this.setState({ tetherBalance: tetherBalance.toString() });
    } else {
      window.alert("Error Tether!! No Detected network");
    }

    // load in RWD contract
    const rwdData = RWD.networks[networkId];
    if (rwdData) {
      // get the abi and address of the contract andsend it to rwd variable using web3
      const rwd = new web3.eth.Contract(RWD.abi, rwdData.address);
      this.setState({ rwd });

      // get balance of the account
      let rwdBalance = await rwd.methods.balanceOf(this.state.account).call();
      this.setState({ rwdBalance: rwdBalance.toString() });
      //console.log({ rwdBalance: rwdBalance });
    } else {
      window.alert("Error RWD!! No Detected network");
    }

    // load in Decentral bank contract
    const decentralBankData = DecentralBank.networks[networkId];
    if (decentralBankData) {
      // get the abi and address of the contract andsend it to rwd variable using web3
      const decentralBank = new web3.eth.Contract(
        DecentralBank.abi,
        decentralBankData.address
      );
      this.setState({ decentralBank });

      // get balance of the account
      let stakingBlance = await decentralBank.methods
        .stakingBlanace(this.state.account)
        .call();
      this.setState({ stakingBalance: stakingBlance.toString() });
      //console.log({ stakignBalance: stakingBlance });
    } else {
      window.alert("Error Bank!! No Detected network");
    }

    this.setState({ loading: false });
  }

  constructor(props) {
    super(props);
    // innitializing state
    this.state = {
      account: "0x0",
      // for getting contracts from abis
      tether: {},
      rwd: {},
      decentralBank: {},
      tetherBalance: "0",
      rwdBalance: "0",
      stakingBalance: "0",
      loading: true,
    };
  }

  // rendering components to the screen
  render() {
    // to hod the content while and after loading
    let content;
    {
      // if loading display LOADING ...
      this.state.loading
        ? (content = (
            <p id="loader" className="text-center" style={{ margin: "30px" }}>
              LAODING ...
            </p>
          ))
        : // else render the main component
          (content = <Main />);
    }
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main
              role="main"
              className="col-lg-12 ml-auto mr-auto"
              style={{ maxWidth: "600px", minHeight: "100vm" }}
            >
              <div>{content}</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
