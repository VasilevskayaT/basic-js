const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(isksNumber, turnsSpeed) {
  return { turns: 2**isksNumber-1, seconds: Math.floor(((2**isksNumber-1)/turnsSpeed)*3600)}

  // throw new CustomError('Not implemented');
};
