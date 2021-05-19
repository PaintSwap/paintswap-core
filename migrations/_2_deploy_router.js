var PaintRouter = artifacts.require("./PaintRouter.sol");

module.exports = async function(deployer, network) {

  // Wrapped fantom address
  let wftmAddress;
  let paintFactoryAddress;
  if (network == "ftm_testnet") {
    wftmAddress = "0xf1277d1ed8ad466beddf92ef448a132661956621";
    paintFactoryAddress = "0xa33C3d2Ea5984Cd89077CAB92c244f9da29390f7";
  } else {
    // Assume live
    wftmAddress = "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83";
    paintFactoryAddress = "0xcA372E4c5FE66126e3F17c414a521346a7aABe12";
  }

  await deployer.deploy(PaintRouter, paintFactoryAddress, wftmAddress);
  await PaintRouter.deployed();
}
