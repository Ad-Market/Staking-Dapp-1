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

    //keep track of our stakers
    address[] public stakers;

    // keep track of who is staking what
    mapping(address => uint) public stakingBlanace;
    // to check who staked before or not
    mapping(address => bool) public hasStaked;
    // to check if investor is currently staking
    mapping(address => bool) public isStaking;

    // the constructor takes reward and tehter token and set arguments to the contracts
    constructor(RWD _rwd, Tether _tether) public {
        rwd = _rwd;
        tether = _tether;
        owner = msg.sender;
    }

    function depositTokens(uint _amount) public{
        // the amount must be greater than zero to stake
        require(_amount>0,'amount cannot be 0');

        // trasnfer tether tokens to this contract address from the person calling this contract for staking
        tether.transferFrom(msg.sender, address(this), _amount);

        // updtae staking balance
        stakingBlanace[msg.sender] = stakingBlanace[msg.sender]+_amount;

        // check if they have not staked before
        if(!hasStaked[msg.sender]){
            stakers.push(msg.sender);
        }

        // update staking blance
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
        
    }

    // issue reward tokens for the stakers
    function issueTokens() public{

        // only owner issues tokens
        require(msg.sender == owner, 'The issuer must be the owner');

        // loop to itterate through and stakers and reward who are staking
        for(uint i = 0;i<stakers.length;i++){
            //keep track of each address
            address recipient = stakers[i];
            // get how much the recipient is staking
            uint balance =  stakingBlanace[recipient]/9;
            if(balance > 0){
                // send transfer rward tokens to user
                rwd.transfer(recipient, balance);
            }
        }

    }

    // unstaking function
    function unstakeTokens() public {

        // get balance of staking
        uint balance = stakingBlanace[msg.sender];

        // require amount to be greater than 0
        require(balance>0,'cannot unstake values less than zero');

        // transfer thet tokens unstaked to the specified contract adress from the bank
        tether.transfer(msg.sender, balance);

        // reset staking balance
        stakingBlanace[msg.sender] = 0;

        // Updating staking status
        isStaking[msg.sender] = false;
    } 

}
