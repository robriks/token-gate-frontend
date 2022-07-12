const hotsthotsAddresses = require("../config.js");
const hre = require("hardhat");

async function main() {
    // Change domain variable below to reflect new metadata
    let newURI = 'ipfs://QmYDkPs2xsDpBv5X9PjoC3ffXNLGDzj2Mjo73H1Qdq2ALm'

    let address = hotsthotsAddresses.rinkeby
    let contract = await hre.ethers.getContractAt("HotsThots", address)

    let transaction = await contract.changeTokenURI(newURI)
    transaction.wait()
    console.log('HotsThots metadata tokenURI changed to: ' + newURI)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});