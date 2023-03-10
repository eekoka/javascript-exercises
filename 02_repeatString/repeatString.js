const repeatString = function(text, n) {
  if (!(n >= 0)) {
    return "ERROR";
  }
  else {
    return text.repeat(n);
  }
};

// Do not edit below this line
module.exports = repeatString;
