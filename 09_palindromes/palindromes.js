const palindromes = function (text) {
  //using regular expression remove non-letters
  //changing to lower case and converting to array
  //comparing with reverse of the string
  return text.replace(/\W/g, "").toLowerCase() ===
         text.replace(/\W/g, "").toLowerCase().split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
