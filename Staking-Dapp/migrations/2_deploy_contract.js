// grab our contract
const Tether = artifacts.require("Tether");
const RWD = artifacts.require("RWD");
const DecentralBank = artifacts.require("DecentralBank");

module.exports = async function(deployer, network, accounts) {
  // Deploy Mock Tether Token
  await deployer.deploy(Tether);
  const tether = await Tether.deployed();

  // Deploy RWD Token
  await deployer.deploy(RWD);
  const rwd = await RWD.deployed();

  // Deploy DecentralBank with reward token and tether token
  await deployer.deploy(DecentralBank, rwd.address, tether.address);
  const decentralBank = await DecentralBank.deployed();

  // transfer 1 million (all) reward tokens to the bank on migration
  await rwd.transfer(decentralBank.address, "1000000000000000000000000");

  // Transfer 100 Mock Tether tokens to the second account in the test network
  await tether.transfer(accounts[1], "100000000000000000000");
};
