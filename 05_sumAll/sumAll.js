const sumAll = function(number1, number2) {
  if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
    return "ERROR";
  } 
  else if (number1 < 0 || number2 < 0) {
    return "ERROR";
  }

  let first, last;
  if (number1 < number2) {
    first = number1;
    last = number2;
  } 
  else if (number1 > number2) {
    first = number2;
    last = number1;
  } 
  else {
    return "ERROR";
  }

  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
