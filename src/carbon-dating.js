const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' || Number(sampleActivity)==0 || isNaN(+sampleActivity) || +sampleActivity<0) return false;

    let k = 0.693/HALF_LIFE_PERIOD;
    if (Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k)<0) return false;
    return false || Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
};

