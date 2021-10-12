// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
// importing other contracts
import './RWD.sol';
import './Tether.sol';




contract DecentralBank {
    //setup variables for the bank
    string public name = 'Decentral Bank';
    address public owner;

    Tether public tether;
    RWD public rwd;

    // the constructor takes reward and tehter token and set arguments to the contracts
    constructor(RWD _rwd, Tether _tether) public {
        rwd = _rwd;
        tether = _tether;
        owner = msg.sender;
    }


}
