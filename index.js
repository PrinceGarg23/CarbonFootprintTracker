// index.js
const Web3 = require("web3");
require("dotenv").config();

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
const web3 = new Web3(infuraUrl);


(async () => {
  try {
    const network = await web3.eth.net.getNetworkType();
    const blockNumber = await web3.eth.getBlockNumber();
    console.log(`Connected to ${network} with the latest block number: ${blockNumber}`);
  } catch (error) {
    console.error("Failed to connect:", error.message);
  }
})();
