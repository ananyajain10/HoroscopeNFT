require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const {PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "mumbai",
   networks: {
     hardhat: {},
     mumbai: {
       url: "https://rpc.ankr.com/polygon_mumbai",
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
};