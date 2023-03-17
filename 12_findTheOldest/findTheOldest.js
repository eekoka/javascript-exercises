const findTheOldest = function(arr) {
   let yearOfDeath = arr.map((people) => people.yearOfDeath);
   let yearOfBirth = arr.map((people) => people.yearOfBirth);
   
   //array with age
   let age = [];
   yearOfBirth.forEach(calculateAge);
   function calculateAge(yob,index) {
     let yod = yearOfDeath[index];
     //year of death is missing then impute todays date
     if (yod === undefined) yod = new Date().getFullYear(); 
     age.push(yod - yob);
   }

   let index = age.indexOf(Math.max(...age));
   return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
