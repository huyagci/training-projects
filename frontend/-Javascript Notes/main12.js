//Add
const div=document.getElementById("add");
div.classList.add("fancy", "add", "addMetod");

const classNames = div.classList;
document.getElementById("pAdd").innerHTML="Class ekledikten sonra liste: "+ classNames;

//Remove
div.classList.remove("addMetod");
document.getElementById("pRemove").innerHTML="Class sildikten sonra liste: "+ classNames;

//Item
 const firstClassName=div.classList.item(0);
 document.getElementById("pItem").innerHTML= "İlk class: "+ firstClassName;

//Contains
const result=div.classList.contains("add");
document.getElementById("pContainsTrue").innerHTML="'add' class'ını içeriyor mu? "+" --> "+ result;
const result2=div.classList.contains("addMetod");
document.getElementById("pContainsFalse").innerHTML="'addMetod' class'ını içeriyor mu? "+" --> "+ result2;

//Replace
div.classList.replace("add","newClass");
document.getElementById("pReplace").innerHTML=classNames;

//Toggle
const pToggle=document.getElementById("pToggle")
const button=document.getElementById("toggleButton");
button.addEventListener("click",function(){
pToggle.classList.toggle("colorp");
})

//Length
document.getElementById("length").innerHTML="Class names length:"+" "+div.classList.length

// 
// 
// 


let nButton1 = document.querySelector("#nButton1");
let nButton2 = document.querySelector("#nButton2");
let nButton3 = document.querySelector("#nButton3");
let nButton4 = document.querySelector("#nButton4");

//add
nButton1.addEventListener("click", function() {
    nButton1.classList.add("nButton1-state1");
} );

//remove
nButton2.addEventListener("click", function() {
    nButton1.classList.remove("nButton1-state1");
    nButton1.classList.remove("nButton1-state2");
    nButton1.classList.remove("nButton1-state3");
    nButton1.classList.remove("nButton1-state4");
} );

//replace
nButton3.addEventListener("click", function() {
    nButton1.classList.replace("nButton1-state1", "nButton1-state2");
} );

//item-alert (class should be defined first with "Add" button)
nButton4.addEventListener("click", function() {
    alert(nButton1.classList.item(0));
} );

//contains
nButton5.addEventListener("click", function() {
    alert(Boolean(nButton1.classList.contains("nButton1-state1")));
} );  



// alert(Boolean(nButton1.classList.contains("nButton1-state1")));