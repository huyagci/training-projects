// promt ile kullanicidan bilgi almak

// let fullName = prompt("Lutfen adinizi giriniz");
let greeting = document.querySelector("#greeting");

// greeting.innerHTML = `${greeting.innerHTML} <small style = "color: red;">${fullName}</small>`

function istek() {
  let kelime = prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")
  document.write(kelime)
};