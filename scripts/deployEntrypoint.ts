import { ethers } from 'hardhat';

async function main() {
    const [signer] = await ethers.getSigners()
    console.log("Deploying contracts with the account:", signer.address)

    const contractFactory = await ethers.getContractFactory('EntryPoint', signer);
    const contract = await contractFactory.deploy();

    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
    }

    main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});