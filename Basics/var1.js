const accountId = 144553
let accEmail = "anish@google.com"
var accPwd = "1365"
/*
we do not prefer using var as it has problems with block scope and functional scope
*/
accCity = "Samastipur" //not good method to declare variables
let accState
// we cannot change constant data
// accountId = 2 //not allowed
accEmail ="allah@gmail.com"
accCity ="Delhi"

// console.log(accountId);
// to print every data at one time we use tables
console.table([accEmail,accPwd,accountId,accState])
