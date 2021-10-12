// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
// creating a Mock tether Token to use
contract Tether{
    
    string  public name = "Mock Tether Token";// Token name
    string  public symbol = "mUSDT";// Token icon
    uint256 public totalSupply = 1000000000000000000000000; // 1 million tokens 
    uint8   public decimals = 18;// how many decimal places

    // event to transfer from one account to another
    event Transfer(
        address indexed _from,
        address indexed _to, 
        uint _value
    );
    // event to approve transfer
    // aproval has to come ffrom the owner always
    event Approval(
        address indexed _owner,
        address indexed _spender, 
        uint _value
    );

    mapping(address => uint256) public balanceOf;

    constructor() public {
        // owner has the total supply
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        // require that the value is greater or equal to the amount for transfer
        require(balanceOf[msg.sender] >= _value);
        // transfer the amount and subtract the balance from who is currently using the bank
        balanceOf[msg.sender] -= _value;
        // add the balance to the reciever balance in the mapping
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}