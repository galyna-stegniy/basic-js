const chainMaker = {
  valueArr: [],

  getLength() {
    return this.valueArr.length;
  },
  addLink(value) {
    this.valueArr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.valueArr.length = 0;
      throw new Error();
    } else {
      this.valueArr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.valueArr.reverse();
    return this;
  },
  finishChain() {
    return this.valueArr.join('~~');
  }
};

module.exports = chainMaker;
