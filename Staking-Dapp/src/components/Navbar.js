import React, { Component } from "react";
import bank from "../bank.png";
import { Dropdown } from "react-bootstrap";

// create class for component
class Navbar extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          flexWrap: "wrap",
          display: "flex",
          position: "absolute",
          justifyContent: "space-between",
          marginTop: "1%",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#202224",
            color: "#FECA33",
            borderRadius: "10px",
            width: "210px",
            verticalAlign: "center",
          }}
        >
          <div style={{ margin: "5%", verticalAlign: "middle" }}>
            {" "}
            <img
              alt="bank logo"
              src={bank}
              // width="50"
              height="35"
              className="d-inline-block align-top"
            />
          </div>{" "}
          <div style={{ width: "100px" }}>
            <div
              style={{
                border: "2px solid #202224",
                borderBottom: "1px solid #202224",
                fontWeight: "bold",
              }}
            >
              DAPP
            </div>
            <div style={{ color: "white", fontWeight: "bold" }}>
              Staking Bank
            </div>
          </div>{" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 15px",
            backgroundColor: "#202224",
            color: "#FECA33",
            borderRadius: "10px",
          }}
        >
          {this.props.account}{" "}
        </div>
      </div>
    );
  }
}

export default Navbar;
