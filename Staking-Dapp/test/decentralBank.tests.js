// using mocha as testing framework
// and using chai for assertions

const RWD = artifacts.require("RWD");
const Tether = artifacts.require("Tether");
const DecentralBank = artifacts.require("DecentralBank");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("DecentralBank", (accounts) => {
  // code for testing
  // running assersions to vheck if contract deployed has the same name
  describe("Mock tether deployment", async () => {
    it("Matches name successfuly", async () => {
      let tether = await Tether.new();
      const name = await tether.name();
      assert.equal(name, "Mock Tether Token");
    });
  });

  describe("Reward Token deployment", async () => {
    it("Matches name successfuly", async () => {
      let reward = await RWD.new();
      const name = await reward.name();
      assert.equal(name, "Reward Token");
    });
  });
});
