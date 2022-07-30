let items = [10, 20, 30, 40];
console.log("items - ilk hali :", items);

//array, sona oge eklemek - push
items.push(50);
console.log("items - ikinci hali :", items);

//array, basa oge eklemek - unshift
items.unshift(5);
console.log("items - ucuncu hali :", items);

//array, sondaki ogeyi cikarmak - pop
let lastItem = items.pop();
console.log(lastItem);
console.log("items - dorduncu hali :", items);

//array, bastaki ogeyi cikarmak - shift
let firstItem = items.shift();
console.log(firstItem);
console.log("items - besinci hali :", items);

//array icerisindeki ilk ogenin bilgisini degistirmek
items[0] = 5;
console.log(items);

//array icerisindeki son ogenin bilgisini degistirmek
items[items.length - 1] = 1000;
console.log(items);

//ekleme yada silme - splice(index, number of elements, "element")
items.splice(4, 1, 50);
console.log(items);

items.splice(0, 2);
console.log(items);
