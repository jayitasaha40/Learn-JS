const board = document.getElementById("board");
var bodyArr = [[3,5],[4,5]];
// console.log(bodyArr.x);


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

//Showing Body
for(var i = 0; i < bodyArr.length; i++) {
    const body = document.createElement("div");
    body.classList.add("snakeBody");
    body.style.gridColumnStart = bodyArr[i][1];
    body.style.gridRowStart = bodyArr[i][0];

    const point = document.createElement("div");
    point.classList.add("point");
    body.append(point);
    board.append(body);    
}

document.addEventListener("keydown", (e) =>{
    let dir = {x:0,y:0}; //Start
    let key = e.key;
    
    switch(key) {
        case "ArrowRight":
          // code block
          dir.x = 1;
          dir.y = 0;
          break;
        case "ArrowLeft":
          // code block
          dir.x = -1;
          dir.y = 0;
          break;
        
        case "ArrowDown":
          // code block
          dir.x = 0;
          dir.y = 1;
          break;
        
        case "ArrowUp":
          // code block
          dir.x = 0;
          dir.y = -1;
          break;
        default:
            break
          // code block
      }
    
    //   console.log(key);
    //   console.log(dir);
    
    
})
