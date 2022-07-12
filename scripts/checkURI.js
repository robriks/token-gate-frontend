const hotsthotsAddresses = require('../config.js');
const hre = require("hardhat");

async function main() {
    let address = hotsthotsAddresses.rinkeby
    let contract = await hre.ethers.getContractAt("HotsThots", address)

    let transaction = await contract.tokenURI(0)
    console.log(transaction)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});