const fibonacci = function(n) {
  //reject if number is less than 0 or not an integer
  if (n < 0) return "OOPS";
  //returning the nth fibonacci number
  return (
    Math.round(
        (Math.pow(1 + Math.sqrt(5),n) - Math.pow(1 - Math.sqrt(5),n)) / (Math.pow(2,n) * Math.sqrt(5))
    )
  )

};

// Do not edit below this line
module.exports = fibonacci;
