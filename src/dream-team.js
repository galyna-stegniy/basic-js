module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let membersArray = members.reduce((acc, el) => {
    if (typeof el === 'string') {
      acc.push(el.trim()[0].toUpperCase());
    }
    return acc;
  }, []);
  return membersArray.sort().join('');
};
