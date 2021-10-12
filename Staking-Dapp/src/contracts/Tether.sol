// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
// creating a Mock tether Token to use
contract Tether{
    
    string  public name = "Mock Tether Token";// Token name
    string  public symbol = "mUSDT";// Token icon
    uint256 public totalSupply = 1000000000000000000000000; // 1 million tokens 
    uint8   public decimals = 18;// how many decimal places
}