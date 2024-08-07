import { ethers } from 'ethers';
const provider = new ethers.providers.Web3Provider(ethereum);
const ADD = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
import ExistingContracts from './artifacts/contracts/ExistingContracts.sol/ExistingContract';


//实现三个function：

  //调用existingContraxct的addEscrow
  //在existing Contract approve该合约
  //从existing Contract中找到所有合约，并且setEscrows
const contract = new ethers.Contract(ADD, ExistingContracts.ABI, provider);

export default async function addContract() {
      const signer = provider.getSigner();
      await contract.connect(signer).approve();
      const contract = await hre.ethers.getContractAt("Escrow",ADD);
  }


