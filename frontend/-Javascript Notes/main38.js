// objects

let arrayObj = [1, 2, 3];
let object1 = { obj: 1 };

console.log("arrayObj", typeof arrayObj);
console.log("object1", typeof object1);

let item1 = new Object();
let item2 = {};

console.log("item1", typeof item1);
console.log("item2", typeof item2);

// object olusturma
let item3 = {};
let item4 = new Object();

console.log("object1", object1);

let countriesTalkSpanish = {
  continent: "South America",
  language: "Spanish",
};

//Görev: yukarıdaki objeyle aynı propertylere sahip ve başkenti "Montevideo" olan uruguay objesini oluşturalım.
//Alttaki yorum satırını kaldırıp kodunuzu yazmaya başlayabilirsiniz.
//hazır olunca aşağıdaki kodu yorum satırından çıkarın. Not: kodun çıktısını görmek için sol alttan console'u açtığınızdan emin olun

let uruguay = Object.create(countriesTalkSpanish);
uruguay.capital = "Montevideo";

console.log(uruguay);
