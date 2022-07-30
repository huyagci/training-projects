// let userName = prompt("Kullanici adinizi yaziniz")
// let info = document.querySelector('#info')

// //ternary kullanim: kosul ? dogruyla : yanlissa

// info.innerHTML = `${userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadi :("}`

let boolean;
const isBooleanTrue = boolean ? true : false;
console.log(isBooleanTrue)
console.log(boolean)

let age = 24;
let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

console.log(permission);


let firstCity = "Ankara";

let secondCity = "İstanbul";

const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

console.log(isEqual)

var money;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy);