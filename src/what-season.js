const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(typeof date === 'object' && Object.keys(date).length !== 0) {
        throw new Error('THROWN');
    }

    const month =  new Date(date).getMonth();
    if(!date) return 'Unable to determine the time of year!';

    switch (month) {
        case 2:
        case 3:
        case 4:
            return 'spring';
            break;

        case 6:
        case 7:
        case 5:
        return 'summer';
            break;

        case 9:
        case 10:
        case 8:
            return 'autumn';
            break;
        case 0:
        case 1:
        case 11:
            return 'winter';
            break;
    default:
        throw new Error('THROWN');
    }
};
