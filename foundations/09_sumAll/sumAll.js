const sumAll = function(int1, int2) {
  if (int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
    return 'ERROR';
  }
  let sum = 0;
  const min = Math.min(int1, int2);
  const max = Math.max(int1, int2);
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
