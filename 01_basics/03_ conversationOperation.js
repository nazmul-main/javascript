let score = "33";

// console.log(typeof score); //this is valid
// console.log(typeof score); // also this is valid

let setValueNumber = Number(score);
// console.log(typeof setValueNumber);
// console.log(setValueNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 | false => 0

let isLoggedIn = 91;

let boolean = Boolean(isLoggedIn);
// console.log(boolean);

// 1 => true | 0 => false
// "" => false
// "nazmul" => true

let someNumber = 54;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

/************************ Operations ************************/

let value = 5;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello"
let str2 = " Nazmul"

const str3 = str1 + str2;
console.log(str3);


// console.log("1" + 2 );
// console.log(1 + "2" );
// console.log("1" + 2 + 2 );
// console.log(1 + 2 + "2");

// console.log((3 + 4 ) * 2 / 2); 

//-------------Not Prefer like this -----------------
console.log(true); // result true
console.log(+true); // result 1
console.log(+""); // result 0

// -----

let gameCount = 100;
 ++gameCount;
 console.log(gameCount);