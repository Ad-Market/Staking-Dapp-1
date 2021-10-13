// using mocha as testing framework
// and using chai for assertions

const RWD = artifacts.require("RWD");
const Tether = artifacts.require("Tether");
const DecentralBank = artifacts.require("DecentralBank");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("DecentralBank", ([owner, customer]) => {
  // code for testing
  // running assersions to vheck if contract deployed has the same name
  let tether, rwd, decentralBank;

  function tokens(number) {
    return web3.utils.toWei(number, "ether");
  }

  before(async () => {
    // loading contracts
    tether = await Tether.new();
    rwd = await RWD.new();

    // checking if the adresses are coming through
    decentralBank = await DecentralBank.new(rwd.address, tether.address);

    // check if the rewards are transfered to decentral bank 1 million
    await rwd.transfer(decentralBank.address, tokens("1000000"));

    // check if 100 tokens sent to the second address
    await tether.transfer(customer, tokens("100"), { from: owner });
  });

  describe("Mock tether deployment", async () => {
    it("Matches name successfuly", async () => {
      const name = await tether.name();
      assert.equal(name, "Mock Tether Token");
    });
  });

  describe("Reward Token deployment", async () => {
    it("Matches name successfuly", async () => {
      const name = await rwd.name();
      assert.equal(name, "Reward Token");
    });
  });
});
