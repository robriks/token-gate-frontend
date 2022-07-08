const hotsthotsAddresses = require("../config.js");
const hre = require("hardhat");

async function main() {

    //Change address variable below to reflect address of desired newFren

    let newFren = '0x3CEB8E4B1180D33380EBCf177B33EaeAC9154283'
    
    let address = hotsthotsAddresses.rinkeby
    let contract = await hre.ethers.getContractAt("HotsThots", address)

    let transaction = await contract.addFren(newFren)
    transaction.wait()
    console.log('New fren added to:' + address)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});