const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');

require('dotenv').config();  // Store environment-specific variable from '.env' to process.env

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "build"),
  networks: {
    develop: {
      port: 7545,
      host: "127.0.0.1",
      network_id: 5777,
      gas: 46123881231231,
      gasPrice: 0x00
    },
    bsc_testnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC_TEST, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    ropsten_testnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC_TEST, `https://ropsten.infura.io/v3/13114bd1767b441ab638877cafce0890`),
      network_id: 3,
      networkCheckTimeout: 1000000000,
      skipDryRun: true
    },
    ftm_testnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC_TEST, "https://rpc.testnet.fantom.network"),
      network_id: 4002,
      gasPrice: 220000000000,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    ftm: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://rpc.ftm.tools/"),
      network_id: 250,
      gasPrice: 82000000000,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {    
    solc: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
