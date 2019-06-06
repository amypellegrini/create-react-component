"use strict";

const fs = require("fs");

function createReactComponent(name) {
  if (name.match(/\W/)) {
    throw new Error(
      "Component name should be composed of letters, numbers, or hyphens (_, -)"
    );
  }

  fs.mkdirSync(name);
}

module.exports = createReactComponent;
