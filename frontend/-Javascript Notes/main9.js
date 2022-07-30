//liste icerisindeki son elemana ulasmak veya eleman eklemek

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk oge degisti";
console.log(firstChild.innerHTML);

let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "son oge degisti";
console.log(lastChild.innerHTML);

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
liDOM.innerHTML = "kendi olusturdugumuz oge";

//ulDOM.append(liDOM);  //sona ekleme
ulDOM.prepend(liDOM);   //basa ekleme