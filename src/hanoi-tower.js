module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let turnsSpeedSeconds = turnsSpeed / (60 * 60);
  let seconds = turns / turnsSpeedSeconds;
  return {
    turns: turns,
    seconds: seconds
  };
};
