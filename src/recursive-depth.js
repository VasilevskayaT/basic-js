const CustomError = require("../extensions/custom-error");


module.exports = class DepthCalculator {
    calculateDepth(arr) {
      const inArrs = arr.filter(inArr => Array.isArray(inArr));
      if(inArrs.length){
          return 1 + this.calculateDepth([].concat(...inArrs));
      } else {
        return 1;
    }
  }
};