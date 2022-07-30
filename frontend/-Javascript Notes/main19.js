let firstName = "Lorem"

function greetings(firstName = "", lastName = "") { //default parametre aliyor
    // console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName}`);
    console.log(`Merhaba ${firstName} ${lastName}`);
}; 



console.log(firstName) 
greetings();
// let info = greetings("Parametre")


function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info;
}

let greetingsInfo = greetings2("Ad", "Soyad")
let info = "deneme" //?????
console.log(greetingsInfo)

function domIDwriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`);
    domObject.innerHTML = info;
}

let htmlInfo = `<span style="color:red">Color RED</span>`;

domIDwriteInfo("info", htmlInfo);
domIDwriteInfo("greeting", greetings2("Lorem", "Ipsum"));