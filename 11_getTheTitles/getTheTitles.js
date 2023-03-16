const getTheTitles = function(arrObj) {
  /*let bookTitles = [];
  arrObj.forEach(extractTitle);
  function extractTitle (item) {
    bookTitles.push(item.title);
  }
  return bookTitles;*/

  //shorter alternative solution
  return arrObj.map((bookz) => bookz.title)
};

// Do not edit below this line
module.exports = getTheTitles;
