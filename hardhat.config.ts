import { HardhatUserConfig } from "hardhat/config";
import { config as envConfig } from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
envConfig();

const { API_URL, PRIVATE_KEY } = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks:{
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};

export default config;
