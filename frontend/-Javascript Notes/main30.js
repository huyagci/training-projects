// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde
// 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun.
// (sonuç [55, 75, 85] olmalı.)

let dizi = [2, 5, 8, 11, 15, 17];

const biggerThanTens = dizi.filter(function (number) {
  return number > 10;
});

console.log(biggerThanTens);
const multiplesWithFive = biggerThanTens.map(function (number) {
  return number * 5;
});

console.log(multiplesWithFive);

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan
// myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola
// "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

let dizi2 = [3, 6, 9, 14, 16];
let dizi3 = [0, 1, 2, 3];

let isBiggerThanFive = dizi2.some((value) => value > 5);
isBiggerThanFive ? console.log("Beşten büyük bir eleman mevcut.") : console.log("5'ten büyük eleman mevcut değil.");

// Uygun dizi metodunu kullanarak asagida verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.

let dizi4 = [2, 3, 4];
let multiplyAll = dizi4.reduce(function (total, currentValue) {
  return total * currentValue;
}, 1);

console.log(multiplyAll);

let dizi5 = [2, 5, 7];
let multiplyAll2 = dizi5.reduce((total, currentValue) => total * currentValue, 1);
console.log(multiplyAll2);
