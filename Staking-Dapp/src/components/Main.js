import React, { Component } from "react";

// basic user interface skeleton
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
              <td>mUSDT</td>
              <td>RWD</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
