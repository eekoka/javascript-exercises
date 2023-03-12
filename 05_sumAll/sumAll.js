const sumAll = function(numericRange) {

  //put arguments into an array and sort it
  const args = Array.from(arguments);

  //return error if all arguments are not numeric
  //perform calculation of all arguments are numeric
  if (args.some(notNumeric) || args.some(notPositive)) { 
    return "ERROR";
  } else {
    const lowerLimit = Math.min(...args);
    const upperLimit = Math.max(...args);
    const numberOfValues = upperLimit - lowerLimit + 1;
    //formula to sum numbers within range
    return (numberOfValues/2)*(lowerLimit + upperLimit);
  }
};

//function to return true value is not a number
function notNumeric(val) {
  return !(Number.isInteger(val));
}
//function to return true value less than zero
function notPositive(val) {
    return val < 0;
}

// Do not edit below this line
module.exports = sumAll;
