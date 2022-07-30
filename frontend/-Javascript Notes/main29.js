let items = [1, 2, 3, 4, 5];

//array icinde array
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);
console.log(items);

items.push(maleUsers);
console.log(items);

console.log(items.length);
console.log(items[0].length); //array icindeki istedigimiz arrayin length bilgisini aldik
console.log(items[0][0]); //ayse bilgisine ulastik

//array icerisinden oge ayirmak - splice(position, items?)
let newItems = items.splice(1, 5);
console.log(newItems);
console.log(items);

//array icerisindeki ogenin index bilgisini bulmak - indexOf('value')
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum"));
console.log(items[items.indexOf("ipsum")]);

//array kopyalamak - slice
let copyItems = items;
console.log(items);

copyItems.pop();

console.log(copyItems);
console.log(items);

copyItems = items.slice(); //kopyalama yapti
copyItems.pop(); //son ogeyi cikarttik

console.log("Copy Items: ", copyItems);
console.log("Items :", items);

let es6Items = [...items]; //es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items);

//iki array bilgisini birlestirmek
let allUsers = [...femaleUsers, ...maleUsers]; //es6 array yapisini birlestirme
console.log(allUsers);

//array icerisindeki bilgiyi stringe cevirmek - toString, join
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

//istedigimiz index bilgisine gore oge eklemek - splice(index, 0, value)
allUsers.splice(allUsers.length - 1, 0, "Melisa");
console.log(allUsers);
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);

// .includes
// .slice
// .join
// .concat
// .forEach()
// .map()
// .some()
// .every()
// .filter()
// .find()
// .sort()
// .reduce()
