let score = "33";

console.log(typeof score); //this is valid
console.log(typeof (score)); // also this is valid

let setValueNumber = Number(score);
console.log(typeof setValueNumber); 
console.log(setValueNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 | false => 0

let isLoggedIn = 91;

let boolean = Boolean(isLoggedIn);
console.log(boolean);

// 1 => true | 0 => false
// "" => false
// "nazmul" => true

let someNumber = 54;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
