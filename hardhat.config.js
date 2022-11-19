require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.BADASS_ALCHEMY}`,
      },
    },
    goerli: {
      chainId: 5,
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.BADASS_ALCHEMY}`,
      accounts: {
        mnemonic: process.env.BADASS_MNEMONIC
      }
    },
    mainnet: {
      chainId: 1,
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.BADASS_ALCHEMY}`,
      accounts: {
        mnemonic: process.env.BADASS_MNEMONIC
      }
    },
  },
  verify: {
    etherscan: {
      apiKey: process.env.BADASS_ETHERSCAN
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
