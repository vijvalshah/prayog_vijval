const hre = require("hardhat");

async function main() {
  const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; // Replace with your deployed contract address

  const LabMateData = await hre.ethers.getContractFactory("LabMateData");
  const labMateData = await LabMateData.attach(contractAddress);

  const [signer] = await hre.ethers.getSigners(); // Get the caller's address

  // Get logs length (returned as a BigInt in ethers v6)
  const logsLength = await labMateData.getLogsLength(signer.address);

  if (logsLength === 0n) {
    console.log("No logs found for this address.");
    return;
  }

  // Fetch the latest log entry using BigInt arithmetic
  const latestLog = await labMateData.logs(signer.address, logsLength - 1n);
  const storedCID = latestLog.ipfsCID;

  console.log(`Retrieved CID: ${storedCID}`);
  console.log(`View on IPFS: https://gateway.pinata.cloud/ipfs/${storedCID}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
