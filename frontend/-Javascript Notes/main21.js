let greeting = document.querySelector("#info");
greeting.addEventListener("click", domClick)

function domClick() {
    console.log("Tiklandi");
    this.style.color == "red" ? this.style.color = "white" : this.style.color = "red";
};

greeting.addEventListener(eventName, functionName);
const buton = document.querySelector("#button");

buton.addEventListener('click' , function(){
  alert("Buton Tıklandı");
})
 