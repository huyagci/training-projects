// filter kullanimi

const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

const NEW_PRODUCTS = PRODUCTS.filter((item) => item.length > 5);

console.log(NEW_PRODUCTS);

// aktif kullanicilari secme
const USER = [
  { fullName: "Ayse Sumer", isActive: false },
  { fullName: "Ahmet Urgan", isActive: true },
  { fullName: "Asya Basar", isActive: true },
  { fullName: "Aksel Durmaz", isActive: false },
];

// const ACTIVE_USERS = USER.filter((user) => user.isActive === true);
const ACTIVE_USERS = USER.filter((user) => user.isActive);
console.log(ACTIVE_USERS);

// Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
// Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.

const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

console.log(person.filter((person) => person.age > 30));

let result2 = person.filter((person) => {
  return person.languages.includes("JavaScript");
});

console.log(result2);
