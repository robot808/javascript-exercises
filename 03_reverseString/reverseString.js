const reverseString = function(string) {
  const array = string.split("");
  const arrayReversed = array.reverse();
  const stringReversed = arrayReversed.join("");
  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
