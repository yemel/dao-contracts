const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StringList", function () {

  let List, list;

  beforeEach('deploy list', async () => {
    List = await ethers.getContractFactory("List");
    list = await List.deploy("Point Of Interest", "string");
    await list.deployed();
  });

  it("should start empty", async function () {
    expect(await list.size()).to.equal(0);
    expect(await list.name()).to.equal("Point Of Interest");
    expect(await list.listType()).to.equal("string");
  });

  it("should add elements to the list", async function () {
    await list.add("VALUE1");
    expect(await list.size()).to.equal(1);
    expect(await list.get(0)).to.equal("VALUE1");

    await list.add("VALUE2");
    expect(await list.size()).to.equal(2);
    expect(await list.get(1)).to.equal("VALUE2");
  });

  it("reverts when trying to add a repeated element", async function () {
    await list.add("VALUE1");
    await expect(list.add("VALUE1")).to.be.revertedWith("ERROR_VALUE_PART_OF_THE_LIST");
  });

  it('reverts when trying to get by an invalid index', async () => {
    await expect(list.get(0)).to.be.revertedWith("ERROR_INVALID_INDEX");
  })

  it("should remove values from list", async function () {
    await list.add("VALUE1");
    await list.add("VALUE2");
    await list.add("VALUE3");
    expect(await list.size()).to.equal(3);
    expect(await list.get(1)).to.equal("VALUE2");

    await list.remove("VALUE2");
    expect(await list.size()).to.equal(2);
    expect(await list.get(1)).to.equal("VALUE3");
  });

  it("reverts when trying to remove a non exist", async function () {
    await expect(list.remove("VALUEX")).to.be.revertedWith("ERROR_VALUE_NOT_PART_OF_THE_LIST");
  });

  it("reverts when getting an invalid index", async function () {
    await expect(list.get(0)).to.be.revertedWith("ERROR_INVALID_INDEX");
  });

  //TODOs
  it('reverts when trying to remove an element by an unauthorized sender', async () => {

  });

  it('emits event when adding an element', async () => {

  });

  it('emits event when removing an element', async () => {

  });
  
});
