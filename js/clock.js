//userName will be taken from user and will be written in span
let userName = prompt("Lutfen adinizi giriniz.");
document.querySelector("#myName").innerHTML = userName;

function clock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  function addZero(digit) {
    if (digit < 10) {
      digit = "0" + digit;
    }
    return digit;
  }

  document.querySelector("#myClock").innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}
//clock will be updated every second
setInterval(clock, 1000);

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let nameOfDay = days[new Date().getDay()];
document.querySelector("#myDay").innerHTML = nameOfDay;
