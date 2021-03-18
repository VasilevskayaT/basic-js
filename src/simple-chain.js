const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],
    getLength() {

        return this.chain.length;
    },
    addLink(value) {

        if (value!==undefined) {
            this.arr.push('( ' + value + ' )');
        }
        else this.arr.push('( )');
        return this;
    },
    removeLink(position) {
        if (position < 1 || position%1) {
            this.arr = [];
            throw new Error('THROW');
        }
        this.arr.splice(position - 1, 1);
        return this
    },
    reverseChain() {

        this.arr.reverse()
        return this

    },
    finishChain() {

        let res = this.arr.join('~~');
        this.arr = [];
        return res;
    }
};

module.exports = chainMaker;
