module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  let transformedArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (transformedArr.length) transformedArr.pop();
        break;
      case '--double-prev':
        if (i) transformedArr.push(arr[i - 1]);
        break;
      case '--double-next':
        if (i < arr.length - 1) transformedArr.push(arr[i + 1]);
        break;
      case '--discard-next':
        i++;
        break;

      default:
        transformedArr.push(arr[i]);
    }
  }
  return transformedArr;
};
