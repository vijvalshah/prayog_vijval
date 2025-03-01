const hre = require("hardhat");

async function main() {
  // The deployed contract address (Replace with the actual address from deploy.js)
  const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; 

  // Get the deployed contract
  const LabMateData = await hre.ethers.getContractFactory("LabMateData");
  const labMateData = await LabMateData.attach(contractAddress);

  // Example CID (Replace this with your actual IPFS CID)
  const ipfsCID = "QmbtYDrL5sEvApSd1ZVyvC6CjHw8ZzYbNrQxKMJqk7uLde"; 

  console.log(`Storing IPFS CID: ${ipfsCID} in the smart contract...`);

  // Call the contract function to store the CID
  const tx = await labMateData.storeLog(ipfsCID);
  await tx.wait();

  console.log(`CID successfully stored in contract at ${contractAddress}`);
}

// Run the function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
