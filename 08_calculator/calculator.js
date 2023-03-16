const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(input) {
  if (input.length === 0) return 0;

  let ans = 0;
  input.forEach(myFxn);
  function myFxn(value) {
    ans += value;
  }
  return ans;
};

const multiply = function(input) {
  let ans = 1;
  input.forEach(myFxn);
  function myFxn(value) {
    ans *= value;
  }
  return ans;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let ans;
  //zero factorial is 1
	if (a === 0) {
    ans = 1;
  } else if (Number.isInteger(a) === true && a > 0) {
    ans = 1;
    for (let i=1; i <= a; i++) {
      ans *= i;
    }
  } else {
    return "ERROR";
  }
  return ans;
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
