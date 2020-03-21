const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') {
    return false;
  }
  let sampleActivityNum = parseFloat(sampleActivity);
  if (
    isNaN(sampleActivityNum) ||
    sampleActivityNum <= 0 ||
    sampleActivityNum >= 15
  ) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivityNum).toFixed(20) / k
  );
  return t;
};
