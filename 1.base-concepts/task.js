"use strict";
const solveEquation = (a, b, c) => {
 let start = b**2-4*a*c
 if (start < 0) {
  return [];
 }
 if(start===0) {
   return [-b/(2*a)]
  }
 if(start > 0) {
  let first = (-b + Math.sqrt(start) )/(2*a)
  let second = (-b - Math.sqrt(start) )/(2*a)
   return [first,second]
  }
}

/*function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}*/