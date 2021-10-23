import React, { Component } from "react";
import tether from "../tether.png";
import Airdrop from "./Airdrop";
import "./Main.css";

// create class for component
class Main extends Component {
  render() {
    if (this.props.stakingBalance == "12344321") {
      return (
        <div
          id="content"
          style={{
            position: "relative",
            backgroundColor: "#FFFFFF",
            marginTop: "40%",
            borderRadius: "10px",
            justifyContent: "center",
            paddingBottom: "5%",
          }}
        >
          <div
            style={{
              display: "inline-block",
              width: "70%",
              paddingTop: "5%",
            }}
          >
            <div style={{ fontSize: "12px" }}>
              <b style={{ fontSize: "23px" }}>Loading</b>
              <p>Please while we connect the dots ...</p>
              <div class="loader">Loading...</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          id="content"
          style={{
            position: "relative",
            backgroundColor: "#FFFFFF",
            marginTop: "40%",
            borderRadius: "10px",
            justifyContent: "center",
            paddingBottom: "5%",
          }}
        >
          <div
            style={{
              marginLeft: "15%",
              marginTop: "15%",
              display: "inline-block",
              width: "70%",
            }}
          >
            <div style={{ fontSize: "12px" }}>
              {" "}
              <b style={{ fontSize: "23px" }}>Stake Tokens</b>
              <br />
              Start by inputing the amount you would like to stake/unstake
            </div>
            <div
              style={{
                marginTop: "10%",
                width: "100%",
              }}
            >
              <form
                onSubmit={(event) => {
                  // button can only be hit once
                  event.preventDefault();
                  let amount;
                  amount = this.input.value.toString();
                  amount = window.web3.utils.toWei(amount, "Ether");
                  this.props.stakeTokens(amount);
                }}
              >
                <div style={{ display: "flex" }}>
                  <input
                    ref={(input) => {
                      this.input = input;
                    }}
                    type="text"
                    placeholder="Amount"
                    style={{
                      paddingLeft: "5%",
                      borderRadius: "7px",
                      height: "40px",
                      borderColor: "#E5E5E5",
                      width: "75%",
                    }}
                    required
                  />
                  <div className="input-group-open">
                    <div
                      className="input-group-text"
                      style={{ color: "black", width: "100%" }}
                    >
                      <b>mUSDT</b>&nbsp;&nbsp;&nbsp;
                      <img
                        alt="tether"
                        src={tether}
                        height="23"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",

                    marginTop: "5%",
                    justifyContent: "space-around",
                  }}
                >
                  <div>
                    {" "}
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        this.props.unstakeTokens();
                      }}
                      className="btn btn-block"
                      style={{
                        marginTop: "2%",
                        flex: "50%",
                        color: "white",
                        backgroundColor: "#202224",
                        width: "190px",
                        borderRadius: "10px",
                        boxShadow: "2px 2px #CCC7C7",
                      }}
                    >
                      UNSTAKE
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-block"
                      style={{
                        marginTop: "2%",
                        backgroundColor: "#FECA33",
                        width: "190px",
                        borderRadius: "10px",
                        fontWeight: "bold",
                        boxShadow: "2px 2px #CCC7C7",
                      }}
                    >
                      STAKE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              width: "90%",
              margin: "auto",
              marginTop: "13%",
              borderRadius: "7px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                margin: "3%",
                width: "30%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#696969",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                STAKING BALANCE
              </div>
              <div
                style={{ color: "black", fontWeight: "bold", fontSize: "19px" }}
              >
                {window.web3.utils.fromWei(this.props.stakingBalance, "Ether")}
                &nbsp;&nbsp;mUSDT
              </div>
            </div>
            <div
              style={{
                margin: "3%",
                textAlign: "center",
                width: "30%",
              }}
            >
              <div
                style={{
                  color: "#696969",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                REWARD BALANCE
              </div>
              <div
                style={{ color: "black", fontWeight: "bold", fontSize: "19px" }}
              >
                {window.web3.utils.fromWei(this.props.rwdBalance, "Ether")}
                &nbsp;&nbsp;RWD
              </div>
            </div>
            <div
              style={{
                margin: "3%",
                textAlign: "center",
                width: "30%",
              }}
            >
              <div
                style={{
                  color: "#696969",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                NEXT AIRDROP
              </div>
              <div>
                <Airdrop stakingBalance={this.props.stakingBalance} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Main;
