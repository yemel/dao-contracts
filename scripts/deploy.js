const hre = require("hardhat");

async function main() {
  const List = await hre.ethers.getContractFactory("List");
  const list = await List.deploy("Ban Names", "string");

  await list.deployed();

  console.log("List deployed to:", list.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
