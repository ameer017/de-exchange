// import hre from 'hardhat';

// async function main() {
//   const quickNodeToken = await hre.ethers.deployContract('QuickNodeToken');
//   await quickNodeToken.waitForDeployment();
//   console.log(`Contract deployed to ${quickNodeToken.target}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exit(1);
// });


import hre from 'hardhat';

async function main() {
  console.log("deploying...")
  const singleSwap = await hre.ethers.deployContract('SingleSwap');
  await singleSwap.waitForDeployment();
  console.log(`Contract deployed to ${singleSwap.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

