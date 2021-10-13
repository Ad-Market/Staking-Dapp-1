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

  // Mock Tether token Tests
  describe("Mock tether deployment", async () => {
    it("Matches name successfuly", async () => {
      const name = await tether.name();
      assert.equal(name, "Mock Tether Token");
    });
  });

  // Reward token Tests
  describe("Reward Token deployment", async () => {
    it("Matches name successfuly", async () => {
      const name = await rwd.name();
      assert.equal(name, "Reward Token");
    });
  });

  // Decentral Bank Tests
  describe("Decentral Bank deployment", async () => {
    it("Matches name successfuly", async () => {
      const name = await decentralBank.name();
      assert.equal(name, "Decentral Bank");
    });

    it("Bank has Tokens", async () => {
      // get balance of decentral bank in reward contract
      balance = await rwd.balanceOf(decentralBank.address);
      assert.equal(balance, tokens("1000000"));
    });

    // tests for the staking
    describe("Yeild farming", async () => {
      it("rewards tokens for staking", async () => {
        let result;

        // check investor balance
        result = await tether.balanceOf(customer);
        assert.equal(
          result.toString(),
          tokens("100"),
          "Customer mock tether balance before staking"
        );

        /*SIMULATING DEPOSIT AND APPROVING*/
        // approve the deposit first because a third party is doing it
        await tether.approve(decentralBank.address, tokens("100"), {
          from: customer,
        });

        // Check staking for customer
        await decentralBank.depositTokens(tokens("100"), { from: customer });

        // Check updated balance of customer after deposit
        result = await tether.balanceOf(customer);
        assert.equal(
          result.toString(),
          tokens("0"),
          "Customer mock tether balance after staking"
        );

        // Check decentral bank balance after deposit
        balance = await tether.balanceOf(decentralBank.address);
        assert.equal(
          balance,
          tokens("100"),
          "Bank mock tether balance after staking"
        );

        // Check updtaed status isStaking
        result = await decentralBank.isStaking(customer);
        assert.equal(
          result.toString(),
          "true",
          "Customer staking status is true"
        );

        // Check issue reward tokens

        // End of rewards tokens for staking 'it'
      });

      // end of yeild farming 'describe'
    });

    // end of decentral bak deployment 'describe'
  });
});
