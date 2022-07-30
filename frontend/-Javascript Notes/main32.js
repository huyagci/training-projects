let users = ["Lorem", "Ipsum", "Dolor"];

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// let index = 0;

// for (; index < 10; index++) {
//   console.log(index);
// }

// for (0; index < 10; index++) {
//   console.log(index);
// }

const userListDOM = document.querySelector("#userList");
for (index = 0; index < users.length; index++) {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = users[index];
  console.log(users[index]);
  userListDOM.appendChild(liDOM);
}

// for (i = 20; i < 40; i++) {
//   console.log(i);
// }

for (i = 0; i < 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
