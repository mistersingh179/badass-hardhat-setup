const { ethers } = require("hardhat");

const {
  constants: { WeiPerEther },
  BigNumber,
} = ethers;

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("FavContract", {
    from: deployer,
    args: [BigNumber.from(5).mul(WeiPerEther)],
  });

  const { abi, address } = await deployments.get("FavContract");
  const FavContract = await ethers.getContractAt(abi, address);
  await FavContract.changeName("abc");
};
module.exports.tags = ["MyContract"];
