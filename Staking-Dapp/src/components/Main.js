import React, { Component } from "react";
import tether from "../tether.png";

// create class for component
class Main extends Component {
  render() {
    return (
      <div id="content" className="mt-3">
        <table className="table text-muted text-center">
          <thead>
            <tr style={{ color: "black" }}>
              <th scope="col">Staking Blanace</th>
              <th scope="col">Reward Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ color: "black" }}>
              <td>
                {window.web3.utils.fromWei(this.props.stakingBalance, "Ether")}{" "}
                mUSDT
              </td>
              <td>
                {window.web3.utils.fromWei(this.props.rwdBalance, "Ether")} RWD
              </td>
            </tr>
          </tbody>
        </table>
        <div className="card mb-2" style={{ opacity: ".9" }}>
          <form className="mb-3">
            <div style={{ borderSpacing: "0 1em" }}>
              <label className="float-left" style={{ marginLeft: "15px" }}>
                <b>Stake Tokens</b>
              </label>
              <span className="float-right" style={{ marginRight: "8px" }}>
                Balance:{" "}
                {window.web3.utils.fromWei(this.props.tetherBalance, "Ether")}
              </span>
              <div className="input-group mb-4">
                <input
                  type="text"
                  placeholder="0"
                  style={{ marginLeft: "5px" }}
                  required
                />
                <div className="input-group-open">
                  <div className="input-group-text">
                    <img alt="tether" src={tether} height="33" />
                    &nbsp;&nbsp;&nbsp;mUSDT
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                style={{ width: "60%", marginLeft: "20%" }}
              >
                STAKE
              </button>
            </div>
          </form>
          <button
            className="btn btn-warning btn-lg btn-block"
            style={{ width: "60%", marginLeft: "20%" }}
          >
            UNSTAKE
          </button>
          <div className="card-body text-center" style={{ color: "blue" }}>
            AIRDROP
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
