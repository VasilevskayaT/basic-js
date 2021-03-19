const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let arr = [];
    str = String(str);
    options.addition = String(options.addition);

    let newStr = str;
let separator=options.separator;
if(options.separator==undefined) separator = '+';

let additionSeparator;
    if (options.additionSeparator!==undefined && options.addition!==undefined) additionSeparator=options.additionSeparator;
    if (options.additionSeparator==undefined && options.addition!==undefined) additionSeparator='|';

    if(typeof options.additionRepeatTimes !== 'number' ||
    parseInt(options.additionRepeatTimes)!== options.additionRepeatTimes ||
        !options.additionRepeatTimes) {
    newStr +=options.addition;
}
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
        if(i < options.additionRepeatTimes) newStr += options.addition+additionSeparator;
        if(i === options.additionRepeatTimes) newStr += options.addition;

    }
    if(typeof options.repeatTimes !== 'number' ||
    parseInt(options.repeatTimes)!== options.repeatTimes ||
        !options.repeatTimes) {
    arr.push(newStr)
}

    for (let j = 1; j <= options.repeatTimes; j++) {
    arr.push(newStr)
}

return arr.map(item=>item.split('undefined').filter(i=>i!=='')).join(separator)

};
console.log(module.exports(9.234, { repeatTimes: 4, separator: '||', addition: {a: 5}, additionRepeatTimes: 3, additionSeparator: '&&' }));
