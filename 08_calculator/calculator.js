const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, value) => total + value, 0);
};

const multiply = function(arr) {
  if (!(arr.length)) return 0;
  return arr.reduce((total, value) => total * value, 1);
};

const power = function(a, b) {
  let product = a;
	for (let i = 0; i < b - 1; i++) product *= a;
  return product;
};

const factorial = function(a) {
  let product = 1;
  for (let i = 1; i <= a; i++) product *= i;
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
