/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      volta: {
         url: API_URL,
         accounts: [`${PRIVATE_KEY}`],
         gas: 2100,
         gasPrice: 800,
      }
   },
}
