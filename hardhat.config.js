require("@nomiclabs/hardhat-ethers");
require('dotenv').config()

module.exports = {
  
  defaultNetwork: "matic",
  networks: {
    // hardhat: {
    //   chainId: 1337
    // }, 
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    // mumbai: {
    //   url: process.env.DEPLOY_API_MUMBAI,
    //   accounts: [process.env.DEPLOY_SECRET_MUMBAI]
    // },
    matic: {
      url: process.env.POLYGON_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  

  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
