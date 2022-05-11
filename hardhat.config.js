require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_API_KEY = "zRXIeyII3iE8brygmmhKbI5JIqU2jkCZ";
const MATIC_PRIVATE_KEY = "1494ad9477559ee7f2d02131809bd5cffee2a7c946fdb5a0ceb30974b171f7a5";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    matic: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${MATIC_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: "941GYH13FB369DU6XGAEWX4Q7V32DY3BKW"
  }
};
