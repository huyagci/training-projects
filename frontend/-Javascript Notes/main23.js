let user = {userName: "umutyagci", isActive: true};

localStorage.setItem("userInfo", JSON.stringify(user));

let userInfo = localStorage.getItem("userInfo")     //bilgiyi al
userInfo = JSON.parse(userInfo)
// console.log(userInfo)

let items = [1, 2, 3, user];
localStorage.setItem('newItem', JSON.stringify(items));
// console.log(JSON.parse(localStorage.getItem('newItem')));

localStorage.clear()


var movies = ["Kasaba", "Kış uykusu","Bir Zamanlar Anadolu"]; 

localStorage.setItem('movies1', movies)
console.log(localStorage.getItem('movies1'));

let getMovies1 = localStorage.getItem('movies1');
console.log(getMovies1[0])



localStorage.setItem('movies2', JSON.stringify(movies))
console.log(JSON.parse(localStorage.getItem('movies2')));

let getMovies2 = JSON.parse(localStorage.getItem('movies2'));
console.log(getMovies2[0])