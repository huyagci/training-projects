/*
.add            //adds a class/classes
.remove         //removes a class/classes
.item()         //returns a class on specific index
.contains()     //returns the existence of decleration
.toggle()       //adds a class if doesn't exist, removes it if exists.
.replace()      //replaces a existing class with the one declared
.length()       //retuns the number of objects in selected list
*/

let idSelector = document.querySelector("#greeting");
idSelector.classList.add("text-primary");
idSelector.classList.add("title");
idSelector.classList.add("new-info", "second-class", "third-class");  //birden fazla class eklemek
idSelector.classList.remove("title", "new-info", "second-class", "third-class");  //birden fazla class silmek

console.log(idSelector.classList);

console.log(idSelector.classList.item(0))
console.log(idSelector.classList.contains('title'))


idSelector.classList.toggle("visible");
idSelector.classList.toggle("text-primary");
idSelector.classList.replace("visible", "changed");
console.log(idSelector.classList.length)

console.log(idSelector.classList);