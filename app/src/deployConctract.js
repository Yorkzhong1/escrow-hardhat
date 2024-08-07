import { ethers } from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow';
import ExistingContract from './artifacts/contracts/ExistingContracts.sol/ExistingContract';




export default async function deployExisting(signer) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log(signer)
  console.log('deploy existing contracts')
  const factory = new ethers.ContractFactory(
    ExistingContract.abi,
    ExistingContract.bytecode,
    signer
  );
  const contract = await factory.deploy();
  console.log(contract.address)
  
}

//0xe7f1725e7734ce288f8367e1bb143e90bb3f0512