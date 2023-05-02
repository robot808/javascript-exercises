const fibonacci = function(nth) {
nth = parseInt(nth);
if (nth < 0) return "OOPS";
if (nth < 1) return 0;
let number = 1;
let previous = 0;
  for (let i = 1; i < nth; i++) {
    const current = number;
    number = current + previous;
    previous = current;
  }
return number;
};

// Do not edit below this line
module.exports = fibonacci;
