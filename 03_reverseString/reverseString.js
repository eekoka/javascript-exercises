const reverseString = function(text) {
  let result = "";

  for (let i = 1; i <= text.length; i++) {
    result += text.substr(-i, 1);
  }
  return result;

  //return text.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
