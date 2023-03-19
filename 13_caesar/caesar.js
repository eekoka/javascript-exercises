/*
//Reference Notes:
//how to convert to unicode and back
console.log("z".charCodeAt(0));
console.log(String.fromCharCode(65,32,122));

//js +operator to convert true/false in to 0/1
console.log(10+(+1==1))
//js ternary operator can do the same: if true then use 1 else use 0
console.log(10+(1==1 ? 1:0))
*/

const caesar = function(text, n) {
  //allow to take any number of shift but still remain within 1-26 shifts
  const shift = (n % 26);
  //covert text to unicode
  let codeArr = stringToUnicode(text);
  let shiftedArr = cShift(codeArr, shift);
  //return string from unicode
  return String.fromCharCode(...shiftedArr);
};

//function to convert string to array 
//then convert to the unicode for each char
const stringToUnicode = function(str) {
  let strArray = str.split("");
  return strArray.map((char) => {
    return char.charCodeAt(0);
  });
}

//return array after performing the shift
const cShift = function (arr, shift) {
  return arr.map((code) => {
    //code separately for a-z and A-Z + corrections
    if (97 <= code && code <= 122) {
      return code+shift + ((+code+shift < 97)*(+26)) + ((+code+shift > 122)*(-26));
    } else if (65 <= code && code <= 90) {
      return code+shift + ((+code+shift < 65)*(+26)) + ((+code+shift > 90)*(-26));
    } else return code;
  });
}

//cipher
//console.log(caesar("Brown Fox", 5))
//decipher
//console.log(caesar("Gwtbs Ktc", -5))

// Do not edit below this line
module.exports = caesar;
