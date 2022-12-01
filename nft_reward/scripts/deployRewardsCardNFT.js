const hre = require("hardhat");

async function main() {
  const RewardCardNFT = await hre.ethers.getContractFactory("RewardCardNFT");
  const rewardCard = await RewardCardNFT.deploy();

  await rewardCard.deployed();

  console.log("Character deployed to:", rewardCard.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
