"use strict";

const fs = require("fs");
const should = require("chai").should();
const expect = require("chai").expect;
const createReactComponent = require("../create-react-component");

describe("createReactComponent module", function() {
  it("should be a function", function() {
    createReactComponent.should.be.a("function");
  });
});

describe("component folder generation", function() {
  const componentName = "componentName";

  it("should create a folder matching a given component name string", function() {
    createReactComponent(componentName);

    const folderExists = fs.existsSync(componentName);

    expect(folderExists).to.be.true;
  });

  after(function() {
    fs.rmdirSync(componentName);
  });
});

describe("component name input validation", function() {
  const invalidName = "$£%^&";

  /**
   * POSIX portable filename charater set:
   *   https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282
   */
  it("should error incompatible POSIX portable filename", function() {
    expect(
      createReactComponent.bind(createReactComponent, invalidName)
    ).to.throw();
  });

  after(function() {
    if (fs.existsSync(invalidName)) {
      fs.rmdirSync(invalidName);
    }
  });
});
