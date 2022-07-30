//form submit

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit);


function formSubmit(event) {
    event.preventDefault()
    console.log("Submit completed");
    let scoreInputDOM = document.querySelector('#score').value
    console.log(scoreInputDOM)
    localStorage.setItem('score', scoreInputDOM)
};