//array olusturma
let domain = "huyagci";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);

//bos liste
let emptyArray = [];

//array icerisindeki eleman sayisini ogrenme
console.log(items.length);

// document.querySelector("#info").innerHTML = items.length;

//array icindeki ilk elemanin cagirilmasi
console.log(items[0]);

//array icindeki son elemanin cagirilmasi
console.log(items[items.length - 1]);

//degisken icindeki bilginin array olup olmadigini kontrol etmek
console.log(typeof items); //object olarak cikti veriyor
console.log(Array.isArray(items));

//hangileri isArray bilgisidir
console.log(Array.isArray([]));
console.log(Array.isArray(1));
console.log(Array.isArray(true));

//tam ortadaki elemana ulasmak
console.log(items[Math.floor(items.length / 2)]);
