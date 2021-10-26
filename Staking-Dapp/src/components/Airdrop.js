import React, { Component } from "react";

// import issueTokens from "../../scripts/issue-tokens";
// const issue = require("../scripts/issue-tokens");
import DecentralBank from "../truffle_abis/DecentralBank.json";

class Airdrop extends Component {
  constructor() {
    super();
    this.state = {
      //86400
      time: {},
      seconds: 15,
      decentralBank: {},
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  // function to calculate how many hours, minutes, and seconds from total seconds
  secondsToTime(secs) {
    let hours, minutes, seconds;
    hours = Math.floor(secs / (60 * 60));

    let devisor_for_minutes = secs % (60 * 60);
    minutes = Math.floor(devisor_for_minutes / 60);

    let devisor_for_seconds = devisor_for_minutes % 60;
    seconds = Math.ceil(devisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  countDown() {
    //  countdown one second at a time
    let seconds = this.state.seconds - 1;

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    // stop counting when we hit zero
    if (seconds == 0) {
      clearInterval(this.timer);
      // this.state.decentralBank.methods
      //   .issueTokens()
      //   .call({ from: "0x941A8910Cd702ba920CeC301095593b912A6834d" });
      this.props.issue();
      console.log("hello");
    }
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  componentDidMount() {
    let timeLeft = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeft });
  }

  airdropReleaseTokens() {
    let stakingB = this.props.stakingBalance;
    if (stakingB >= "50000000000000000000") {
      this.startTimer();
    }
  }

  render() {
    this.airdropReleaseTokens();

    return (
      <div style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
        {this.state.time.h}:{this.state.time.m}:{this.state.time.s}
      </div>
    );
  }
}

export default Airdrop;
