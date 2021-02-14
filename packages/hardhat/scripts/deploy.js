/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");

const main = async () => {
  console.log("\n\n 📡 Deploying...\n");

  const yourContract = await deploy("BlockFundDAO", [
    "0xd24b278Fd490CDd09C66C494800F915768c779Cf",
    "0x38E8cE4FBEeF3601a9643c17Ec3628169f7B1152",
    "0xb6dE2c353ea6231126c198255F60d9Ab40c2a8E7",
  ]); // <-- add in constructor args like line 19 vvvv

  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])

  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */

  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */

  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

  console.log(" 💾  Artifacts (address, abi, and args) saved to: ", chalk.blue("packages/hardhat/artifacts/"), "\n\n");
};

const deploy = async (contractName, _args = [], overrides = {}, libraries = {}) => {
  console.log(` 🛰  Deploying: ${contractName}`);

  const contractArgs = _args || [];
  const contractArtifacts = await ethers.getContractFactory(contractName, {
    libraries: libraries,
  });
  const deployed = await contractArtifacts.deploy(...contractArgs, overrides);
  const encoded = abiEncodeArgs(deployed, contractArgs);
  fs.writeFileSync(`artifacts/${contractName}.address`, deployed.address);

  const prop1tx = await deployed.createProposal(
    "Plant Trees on Stanford Campus",
    `The purpose of this plan is to promote and recognize the value of our campus trees. According to trees.stanford.edu, there has been loss of diversity from the original tree and shrub plantings of the 1880s and 1890s, which is well-documented for conifers. Over the past quarter century there has also been a loss of eucalypt species, from over 125 species present in the early 1970s to fifty-one today. The school is already doing a superb restoration of the Arizona Garden, but we want to expand that for a broader restoration of the remaining areas of campus.`,
    "https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg",
    ethers.utils.parseEther("1000")
  );
  const prop2tx = await deployed.createProposal(
    "Cantor Exhibition - Children",
    `The purpose of the Plan is to achieve a mix of land uses, develop a form based design code, improve
    transportation and pedestrian circulation, transportation options, and to enhance the streetscape and
    appearance of the corridor through urban design techniques.
    
    For purpose of the RFP, the consultant is to provide a detailed work plan describing the process and the
    methodology to be employed in deriving the information requested. The City anticipates refinement of
    the final scope of services based on additional information contained in the responses to this RFP or
    information from the presentations made to the Corridor Staff Team by the finalists.
    
    The City of Rockville occupies 13.44 square miles within the Metropolitan Washington, DC area and is
    located 12 miles northwest of Washington. Rockville had a population estimate of approximately 57,100
    according to the 2004 Census estimates.
    
    The City of Rockville operates under the council/manager form of municipal government and derives its
    authority from a charter granted by the State of Maryland. As mandated by state law, Montgomery
    County provides school and health services in Rockville. The City has an employment base of
    approximately 80,059 jobs (2005 estimate, MWCOG Round 7 Forecast projection). The City has
    undergone tremendous redevelopment and infill development in recent years, including an ongoing
    redevelopment of the Town Center.`,
    "https://thecentraltrend.com/wp-content/uploads/2017/02/stars-900x563.jpg",
    ethers.utils.parseEther("3000")
  );
  console.log(prop1tx);
  console.log(prop2tx);

  const tx = console.log(" 📄", chalk.cyan(contractName), "deployed to:", chalk.magenta(deployed.address));

  if (!encoded || encoded.length <= 2) return deployed;
  fs.writeFileSync(`artifacts/${contractName}.args`, encoded.slice(2));

  return deployed;
};

// ------ utils -------

// abi encodes contract arguments
// useful when you want to manually verify the contracts
// for example, on Etherscan
const abiEncodeArgs = (deployed, contractArgs) => {
  // not writing abi encoded args if this does not pass
  if (!contractArgs || !deployed || !R.hasPath(["interface", "deploy"], deployed)) {
    return "";
  }
  const encoded = utils.defaultAbiCoder.encode(deployed.interface.deploy.inputs, contractArgs);
  return encoded;
};

// checks if it is a Solidity file
const isSolidity = fileName =>
  fileName.indexOf(".sol") >= 0 && fileName.indexOf(".swp") < 0 && fileName.indexOf(".swap") < 0;

const readArgsFile = contractName => {
  let args = [];
  try {
    const argsFile = `./contracts/${contractName}.args`;
    if (!fs.existsSync(argsFile)) return args;
    args = JSON.parse(fs.readFileSync(argsFile));
  } catch (e) {
    console.log(e);
  }
  return args;
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
