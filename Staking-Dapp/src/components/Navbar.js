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
          // justifyContent: "space-around",
          display: "flex",
          position: "absolute",
          justifyContent: "space-around",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#202224",
            color: "#FECA33",
            borderRadius: "10px",
            width: "230px",
            verticalAlign: "center",
          }}
        >
          <div style={{ margin: "5%", verticalAlign: "middle" }}>
            {" "}
            <img
              alt="bank logo"
              src={bank}
              width="50"
              height="35"
              className="d-inline-block align-top"
            />
          </div>{" "}
          <div style={{ width: "100px" }}>
            DAPP <div style={{ color: "white" }}>Staking Bank</div>
          </div>{" "}
        </div>
        <div
          style={{
            backgroundColor: "#202224",
            color: "#FECA33",
            // borderRadius: "15px",
            // paddingRight: "1%",
            // paddingLeft: "1%",
            textAlign: "center",
            width: "400px",

            verticalalign: "middle",
            lineHeight: "50px",
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
