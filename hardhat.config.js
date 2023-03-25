require("@nomiclabs/hardhat-waffle");
// require('dotenv').config()

// module.exports = {
//   defaultNetwork: 'localhost',
//   networks: {
//     localhost: {
//       url: 'http://127.0.0.1:8545',
//     },
//   },
//   solidity: {
//     version: '0.8.11',
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   paths: {
//     sources: './src/contracts',
//     artifacts: './src/abis',
//   },
//   mocha: {
//     timeout: 40000,
//   },
// }

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./src/contracts",
    artifacts: "./src/abis",
  },
  mocha: {
    timeout: 40000,
  },
};
