const accountId = 144224
let accountEmail = "helo@gmail.com"
var accountPassword = "098765"
accountCity = "fsd"
let accountState;

// accountId = 2     // not allowed
console.log(accountId);

accountEmail ="12@gmail.com"
accountPassword = "23456"
accountCity = "lhr"

//console table for all variables

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
prefer not to use var 
because of issue in block scope and functional scope
*/