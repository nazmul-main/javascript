const accoutId = 13434;
let accoutEamil = "nazmulhossen539@gmail.com";
var accoutPassword = "password@1";
accountCity = "Bogura";
let mangoState; // if you make a state and not a value on this state then the state deafult valu 'undefined'

/* 
Prefer not  to use var 
beacuse of issue in block scope and functional scope
*/

// accountId =  234234 /* not allowed */

accoutEamil = "nazmulhossen@gmail.com";
accoutPassword = "password2";
accountCity = "Bogura | Sariakandi";
console.table([accoutId, accoutEamil, accoutPassword, accountCity, mangoState]);
