require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  
  networks: {

    development: {
     host: "127.0.0.1",     
     port: 8545,            
     network_id: "*",       
    },
    kovan: {
      provider: () => new HDWalletProvider({ mnemonic : process.env.MNEMONIC, providerOrUrl : `https://kovan.infura.io/v3/${process.env.INFURA_APIKEY}`, addressIndex : 0 ,  numberOfAddresses : 10}),
      network_id: 42,
      gas: 8000000
    }  

  },

  mocha: {
    
  },

  compilers: {
    solc: {
      version: "^0.8.0",    
      
    }
  },
};
