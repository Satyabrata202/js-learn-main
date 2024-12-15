const accId = 123;
var city = "delhi";
const password = "63728"
let email = "me@gmail.com"
let accountState;
console.table([accId,city,password,email,accountState])
console.log("Do not use var");
console.log(typeof accountState);
//Due to issue in block scope and functional scope