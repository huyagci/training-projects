let price = 100;
let tax = 0.18;
let taxPrice = price * tax;
let totalPrice = price + taxPrice;

console.log(
    "Fiyat: ",price,
    "Vergi Orani: ",tax,
    "Vergi Tutari: ", taxPrice,
    "Toplam Ucret: ",totalPrice
    );

let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);

console.log("Number Constractor icine bilgi gonderildi: ", Number("111"));

//matematiksel islemler
let counter = 320;
counter = counter + 1;
counter += 1;
counter ++;
console.log(counter);

counter --;
counter -= 1;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 10;
console.log(counter);

//islem onceligi
console.log((2 + 3) * 10);

//mod alma
console.log("Mod Alma: ", 14 % 2);
console.log("Paket Ornegi: ", 18 % 8);

//us alma
console.log("Us Alma: ", 2 * 2 * 2 * 2);
console.log("Us Alma: ", 2 ** 4);

//asagi yuvarlama
console.log("Asagi Yuvarlama: ", Math.floor(1.9) );

//yukari yuvarlama
console.log("Yukari Yuvarlama: ", Math.ceil(1.9) );

//yakina yuvarlama
console.log("Yakina Yuvarlama: ", Math.round(1.2) );
console.log("Yakina Yuvarlama: ", Math.round(1.49) );
console.log("Yakina Yuvarlama: ", Math.round(1.4999999999999999) );
console.log("Yakina Yuvarlama: ", Math.round(1.49999999999999999999999999999999999) );
console.log("Yakina Yuvarlama: ", Math.round(1.5) );
console.log("Yakina Yuvarlama: ", Math.round(1.8) );