const removeFromArray = function(a, ...allArgs) {
   let baseArray = a;
   let removeValues = allArgs;
   //removeValues.shift();

   for (const value of removeValues) {
     if (baseArray.indexOf(value) >= 0) {
        baseArray.splice(baseArray.indexOf(value),1);
     }
   }
   return baseArray;
};

// Do not edit below this line
module.exports = removeFromArray;