let a;
console.log(Boolean(a));

const b = "0";
console.log(Boolean(b));

var x = 10 / 'a';
console.log(Boolean(x));
//false

var y = "" || -2 || 'JavaScript';
console.log(Boolean(y));
//true

var z = {2:'js'};
console.log(Boolean(z));
//true

var t = "" && -2 && 'JavaScript';
console.log(Boolean(t));

var w = false || 0;
console.log(Boolean(w));

var y = true;
console.log(Boolean(y));

let userName;
let isUsername = Boolean(userName);
console.log(isUsername);