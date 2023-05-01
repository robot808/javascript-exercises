const palindromes = function (string) {
  let newString = string.toLowerCase().replace(/[^a-z]/g, "");
  let reversedString = newString.split("").reverse().join("");
  return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
