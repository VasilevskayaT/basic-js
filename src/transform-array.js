const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error('THROW');
    const conditions = ['--double-next', '--discard-next', '--double-prev', '--discard-prev', 'Del']
    let newArr = [...arr];
    let newNewArr = [];

    newArr = newArr.map((item, i, array) => {
    return (array[i]==='--double-next' && i!==array.length-1) ? array[i]=array[i+1] :
    (array[i+1]==='--discard-prev') ? array[i]='Del' :
        (array[i]==='--discard-next') ? array[i+1]='Del' :
            (array[i]==='--double-prev' && i!==0) ? array[i]=array[i-1] :
                array[i];
});

    for (let i = 0; i < newArr.length; i++) {
    let item = newArr[i];
        if(!conditions.includes(item)) newNewArr.push(item);


}
    return newNewArr
}
