import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
   await Config.initConfig();
   const network = hardhatArguments.network ?? 'dev';
   const [deployer] = await ethers.getSigners();
   console.log('deploy from address: ', deployer.address);

   // const AgiToken = await ethers.getContractFactory("AgriToken");
   // const agriToken = await AgiToken.deploy();
   // console.log("AgriToken address: ", agriToken.address);
   // Config.setConfig(network + '.AgriToken', agriToken.address);

   // const Ico = await ethers.getContractFactory("AGTCrowdSale");
   // const ico = await Ico.deploy(1000, '0x8d245Ed555b734031078F5F4Fd78733a6a626Ab5', '0x7C42A6CDDd2Bb4B242d796a21beEb8254C0eD4bf')
   // console.log("ICO address: ", ico.address);
   // Config.setConfig(network + '.Ico', ico.address);

   const SupplyChain = await ethers.getContractFactory("SupplyChain");
   const supplyChain = await SupplyChain.deploy('0x8d245Ed555b734031078F5F4Fd78733a6a626Ab5', '0x7C42A6CDDd2Bb4B242d796a21beEb8254C0eD4bf');
   console.log("Supplychain address: ", supplyChain.address);
   Config.setConfig(network + '.SupplyChain', supplyChain.address);

   await Config.updateConfig()
}

main()
   .then(() => process.exit(0))
   .catch(error => {
      console.log(error);
      process.exit(1)
   })