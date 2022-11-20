# Badass hardhat setup

With this setup you get the following awesome things:

1. As you type in code it being compiled and deployed in real time to your local hardhat.
2. The address & ABI of the contract(s) is also being stored neatly in a json file.
3. No more accidentally re-deploying old contracts as it will skip them.
4. One command to verify contracts

This is all possible because of 🎉🎉 [hardhat-deploy](https://github.com/wighawag/hardhat-deploy) 🎉🎉.

## Short video

In this video you will see what your setup will become like.

## How to add new contracts

1. Add your contracts by creating a new `*.sol` file in the `contracts` directory.
2. Then create a `*.js` deployment script in the `deploy` directory for each contract you add.
3. You may copy-paste existing files to reduce errors.

## How to run

1. In development do:
   1. `npm run chain` to get a local hardhat node going
   2. `npm run deploy` to monitor & deploy your contracts to your local chain.
2. When ready to move to testnet do:
   1. `npm run deploy-goerli` to deploy your new code to goerli chain.
   2. `npm run verify-goerli` to verify your new code on etherscan.
3. When ready to move to mainnet do:
   1. `npm run deploy-mainnet` to deploy your new code to mainnet chain.
   2. `npm run verify-mainnet` to verify your new code on etherscan.

## Keys

Copy `.env.example` and setup your own `.env` file. In this file add your keys. **Very Important** to use your own keys.

## Complete video

In this video we will go through the entire setup process. We will:
1. install all the needed plugins & configure them.
2. Then we will write our first 2 contracts and their deployment scripts.
3. Next we will deploy them to testnet & have them be verified.
4. Finally, we will manually test them using [sidekik.xyz](https://sidekik.xyz) & [etherscan.io](https://etherscan.io/).

## References

1. [hardhat-deploy](https://github.com/wighawag/hardhat-deploy)

## Contribute

Please create a PR 🙏
