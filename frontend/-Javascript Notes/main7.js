// .getElementById              returns an object
// .getElementsByName           returns
// .getElementsByTagName        returns an array
// .getElementsByClassName      returns
//. querySelector               returns

let title = document.getElementById('title');;
title.innerHTML = "Degisen Bilgi";
console.log(title.innerHTML);

let link = document.querySelector("ul#list>li>a");
link.innerHTML += " degisti";

let link2 =document.querySelector("#kodluyoruzLink");
console.log(link2.innerHTML);

link.style.color = "red";
link.classList.add("btn");

let unicorn = document.getElementById("unicorn");
console.log(unicorn.innerHTML);

let testcase = document.getElementById('unicorn');
console.log(testcase);

let animals = document.getElementsByTagName('p');
console.log(animals);

let elements = document.getElementsByName("e-posta");
console.log(elements);

let birds = document.getElementsByClassName("kusu");
console.log(birds);

const email = document.querySelector('#signup input[name="email"]');
console.log(email);

const elems = document.querySelectorAll(".bird, .animal");
console.log(elems);
console.log(elems.length);

const inputs = document.getElementById('signup').getElementsByTagName('input');
const inputs2 = document.querySelector('#signup').querySelectorAll('input');
