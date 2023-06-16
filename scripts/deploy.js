const hre = require('hardhat')

async function main(){
  const DAO = await hre.ethers.getContractFactory('DAO');
  const dao = await DAO.deploy();
  await dao.deployed();

  console.log(`Dao Smart Contract deployed to: ${dao.address}`);
}

main().catch(error =>{
  console.log(error);
  process.exitCode = 1;
})