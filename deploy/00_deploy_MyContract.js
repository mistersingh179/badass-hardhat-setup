const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("MyContract", {
    from: deployer,
    args: [],
  });

};
module.exports.tags = ["MyContract"];
