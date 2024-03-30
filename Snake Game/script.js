const board = document.getElementById("board");
let bodyArr = {x:1,y:2};
// console.log(bodyArr.x);
let dir = {x:0,y:0};

//Show Food
const food = document.createElement("div");
food.classList.add("food");
food.style.gridColumnStart = 2;
food.style.gridRowStart = 2;
board.append(food);

//Showing head
const head = document.createElement("div");
head.classList.add("head");
head.style.gridColumnStart = 5;
head.style.gridRowStart = 2;
board.append(head);

