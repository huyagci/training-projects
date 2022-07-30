console.log(!!2);

var user = "guest";
var price = "1";

console.log(13 !== 14)


let N = 24

if (N % 2 === 1 || (N % 2 === 0 && N >= 6 && N <= 20)) {
    console.log("Weird");
} 

else if (N % 2 === 0 && (N >= 2 && N <= 5) || (N > 20)) {
    console.log("Not Weird");
}