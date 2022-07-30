// map kullanimi

// userName icinde orjinal isim kalsin
// shortName icinde ilk harf buyuk . olsun
// newName icinde sadece ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];
const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);

// const USERS_OBJ = USERS.map((item) => {
//   return {
//     userName: item,
//     shortName: `${item[0]}.`,
//     newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
//   };
// });

const USERS_OBJ = USERS.map((item) => ({
  userName: item,
  shortName: `${item[0]}.`,
  newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
}));

console.log(USERS_OBJ);
