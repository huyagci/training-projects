//Break && Continue

const LOREM_LIST = ["lorem", "ipsum", "dolor", "amet", "consectetur", "adipisicing", "elit"];

let counter = 0;

// for (; counter < 10; counter++) {
//   if (counter === 5) {
//     break;
//   }
//   console.log(counter);
// }

for (; counter < 10; counter++) {
  if (counter < 5) {
    continue;
  }
  console.log(counter);
}

const UL_DOM = document.querySelector("#userList");

let index = 0;

// for (; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "dolor") {
//     break;
//   }
//   let liDOM = document.createElement("li");
//   liDOM.innerHTML = LOREM_LIST[index];
//   UL_DOM.append(liDOM);
// }

for (; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == "dolor") {
    continue;
  }
  let liDOM = document.createElement("li");
  liDOM.innerHTML = LOREM_LIST[index];
  UL_DOM.append(liDOM);
}

//İç içe döngü örneği
//  iç döngü de 3 değerinde break ifadesi çalışır ve o anda iç döngüden çıkılır yani
//iç döngü sonlanır.Fakat dış döngünün işleyişi aynen devam eder
for (var i = 0; i <= 10; i++) {
  console.log("dış döngü: " + i);
  for (var j = 0; j <= 5; j++) {
    if (j == 3) {
      break;
    }
    console.log("iç döngü" + j);
  }
}

//Etiketli break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
//etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
cikis_etiketi: for (var i = 0; i <= 5; i++) {
  for (var j = 0; j <= 50; j++) {
    if (j == 9) {
      break cikis_etiketi;
    }
    console.log("iç döngüden j :" + j);
  }
}

//Etiketli Continue Örneği

gec_etiketi: for (var i = 0; i <= 5; i++) {
  for (var j = 0; j <= 4; j++) {
    if (j == 2) {
      continue gec_etiketi;
    }
    console.log("iç döngüden j :" + j);
  }
}
