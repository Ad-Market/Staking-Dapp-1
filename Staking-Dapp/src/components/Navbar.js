import React, { Component } from "react";
import bank from "../bank.png";
import { Dropdown } from "react-bootstrap";

// create class for component
class Navbar extends Component {
  render() {
    return (
      <nav
        className=" navbar navbar-dark fixed-top shadow p-0"
        style={{ backgroundColor: "black", height: "50px" }}
        expand="lg"
      >
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          style={{ color: "white" }}
        >
          <img
            alt="bank logo"
            src={bank}
            width="50"
            height="35"
            className="d-inline-block align-top"
          />
          &ensp; Dapp Staking Bank
        </a>

        <ul className="navbar-nav px-3">
          <li className="text-nowrap d-none nav-item d-sm-none d-sm-block">
            <small style={{ color: "white" }}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  style={{ backgroundColor: "rgba(52, 52, 52, 0.8)" }}
                >
                  Account
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ backgroundColor: "grey" }}>
                  <Dropdown.Item
                    href="#"
                    style={{ backgroundColor: "grey", color: "yellow" }}
                  >
                    {this.props.account}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
