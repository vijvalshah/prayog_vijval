const hre = require("hardhat");

async function main() {
  // Get the Contract Factory
  const LabMateData = await hre.ethers.getContractFactory("LabMateData");

  // Deploy the contract
  const labMateData = await LabMateData.deploy(); // 👈 Fix: Use `deploy()` correctly

  await labMateData.waitForDeployment(); // 👈 Fix: Use `waitForDeployment()` instead of `deployed()`

  console.log(`LabMateData deployed to: ${await labMateData.getAddress()}`);
}

// Run the function and catch errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
