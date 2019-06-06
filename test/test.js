"use strict";

/**
 * It should accept a `--componentName=` parameter followed by
 * the desired component name.
 *
 * E.g., `create-react-component --componentName=example-component`
 */

const createReactComponent = require("../create-react-component");
const should = require("chai").should();
const expect = require("chai").expect;

describe("create-react-component module", function() {
  it("should be an object", function() {
    createReactComponent.should.be.an("object");
  });
});
