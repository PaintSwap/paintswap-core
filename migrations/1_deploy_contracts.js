var PaintFactory = artifacts.require("./PaintFactory.sol");
var PaintMulticall = artifacts.require("./PaintMulticall.sol");

module.exports = async function(deployer) {

  await deployer.deploy(PaintMulticall);
  await PaintMulticall.deployed();
  await deployer.deploy(PaintFactory, false);
  const paintFactory = await PaintFactory.deployed();

  const initCodeHash = await paintFactory.INIT_CODE_PAIR_HASH();
  console.log("Now update init_code_hash in paint router: " + initCodeHash);
}
