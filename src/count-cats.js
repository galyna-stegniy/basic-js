module.exports = function countCats(backyard) {
  return backyard.reduce((acc, row) => {
    return (
      acc +
      row.reduce((acc, el) => {
        if (el === '^^') {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0)
    );
  }, 0);
};
