// object key value

let laptop1 = {
  brand: "Apple",
  model: "MacBook Pro",
  "2kg": 2,
  modelName: "MacBook Pro 13",
};

console.log(laptop1);

// dogru anahtar bilgisini olusturmak

console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["2kg"]);

// anahtar bilgisine yeni deger eklemek

laptop1.brand = "Mac";
laptop1["brand"] = "Mac1";
console.log(laptop1);

// yeni bilgi eklemek

laptop1.version = "10.15.7";
console.log(laptop1);

// anahtar bilgilerine ulasmak (keys) -> Object.key(item)

keys = Object.keys(laptop1);
console.log(keys);

keys.forEach((keyInfo) => {
  console.log(keyInfo);
  console.log(laptop1[keyInfo]);
});

// deger bilgilerine ulasmak (values) -> Object.values(item)

values = Object.values(laptop1);

values.forEach((values) => {
  console.log("value: ", values);
});

let setting = {
  password: 1234,
  userName: "user1",
};
