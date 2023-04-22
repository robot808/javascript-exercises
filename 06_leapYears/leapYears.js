const leapYears = function(year) {
  /*if (year % 100) {
    if (year % 4) return false;
    else return true;
  }
  else {
    if (year % 400) return false;
    else return true;
  }*/
return !(year % 4) && !!(year % 100) || !(year % 400);
};

// Do not edit below this line
module.exports = leapYears;
