const board = document.getElementById("board");
var bodyArr = [[3,5],[4,5]];
let dir = {x:0,y:0};
// console.log(bodyArr[2]);


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

   //Moving body
   for(var i = bodyArr.length-2;i>=0;i--){
    bodyArr[i+1] = bodyArr[i];
}

bodyArr[0][0] = bodyArr[0][0]+ dir.x;
bodyArr[0][1] = bodyArr[0][1]+ dir.y;


//Logic

document.addEventListener("keydown", (e) =>{
    dir = {x:0,y:0}; //Start
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
   
    
})



// let startTime;

// function animate(timestamp) {
//   if (!startTime) {
//     startTime = timestamp;
//   }
  
//   // Calculate elapsed time since animation started
//   const elapsedTime = timestamp - startTime;

//   // Your animation logic goes here
  
//   // Example: Move an element horizontally
//   const element = document.getElementById('animatedElement');
//   const currentPosition = parseInt(element.style.left) || 0;
//   const newPosition = currentPosition + 1;
//   element.style.left = newPosition + 'px';

//   // Check if elapsed time exceeds a certain duration (e.g., 2000 milliseconds)
//   if (elapsedTime < 2000) { // Change 2000 to the desired duration
//     // Request the next animation frame
//     requestAnimationFrame(animate);
//   }
// }

// // Start the animation loop
// requestAnimationFrame(animate);

