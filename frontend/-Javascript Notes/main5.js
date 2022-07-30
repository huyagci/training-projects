let email = "umutyagci@gmail.com";
let firstName = "umut";
let lastName = "YAGCI";

//string karakter sayisi - .length
console.log(email.length);

//ilk karakteri bulmak - [0]
console.log(firstName[0]);
console.log(firstName.charAt(0));

//buyuk harf kucuk harf yapmak
// firstName = firstName.toUpperCase()
console.log(firstName);

lastName = lastName.toLowerCase();
console.log(lastName);

//string icinde istedigimiz bilgiyi aramak ve yerini bulmak - search
console.log(email.search("@"));
console.log(email[9]);

//belirli bir yere kadar almak - slice
console.log(email.slice(0, 11));
console.log(email.slice(10));

let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(DOMAIN.slice(0, DOMAIN.indexOf(".")));

//bilgiyi degistir - replace
email = email.replace("gmail.com", "hotmail.com");
console.log(email);

//istedigim bilgi var mi? - includes
email.includes("xxxx"); //false
email.includes("@"); //true

//istedigim bilgiyle basladi mi? bitti mi? -- startsWith, endsWith
email.endsWith("hotmail.com"); //true

//ilk harflerini buyuk yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)}`;
console.log(fullName);

//metin birlestirme
console.log(firstName.concat(" ", lastName));

let url = "www.hasanumutyagci.com";
let language = "Java";
newLanguage = language.replace("Java", "Javascript");
console.log(newLanguage);

newUrl = url.slice(url.indexOf(".") + 1);
console.log(newUrl);
