const findTheOldest = function(array) {
  const oldestPerson = array.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
    return (currentAge > oldestAge) ? current: oldest;
  });
  return oldestPerson;
};

const getAge = function(deathYear, birthYear) {
  if (deathYear) return deathYear - birthYear;
  else return new Date().getFullYear() - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
