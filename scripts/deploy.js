const constructorArgs = require('./arguments.js');
const hre = require("hardhat");

async function main() {

  const HotsThots = await hre.ethers.getContractFactory("HotsThots");
  console.log(constructorArgs);
  const hotsThots = await HotsThots.deploy( constructorArgs );

  await hotsThots.deployed();

  console.log("HotsThots deployed to:", hotsThots.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
