const removeFromArray = function(array, ...elementsToRemove) {
  let filteredArray = array;
  for (const elementToRemove of elementsToRemove) {
    filteredArray = filteredArray.filter(element => {
      return element !== elementToRemove;
    });
  }
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
