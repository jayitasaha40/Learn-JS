var user;
const winningPattern = [[0,1,2],
                        [3,4,5],
                        [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const boxes = document.querySelectorAll(".box");

document.getElementById('show-content-btn').addEventListener('click', function () {
     user = 1;
    const initialContent = document.getElementById('initial-content');
    initialContent.style.display = 'none';

    const fullContent = document.getElementById('full-content');
    fullContent.style.display = 'block';
    setTimeout(display("Player 1"), 1000);

    

    document.body.style.backgroundColor = ' #29272b;';
    setTimeout(function () {
        fullContent.style.opacity = '1';
    }, 10);
});

function display(text){
    document.getElementById("player").innerHTML= text;
}
function changeValue(e){
    
    if(user==1 && document.getElementById(e).innerHTML!="X" && document.getElementById(e).innerHTML!="O"){
        document.getElementById("tap").play();
        document.getElementById(e).innerHTML = "X";
        user = 2;
        
        document.getElementById("player").innerHTML="Player 2";
    }
    else if(user==2 && document.getElementById(e).innerHTML!="X" && document.getElementById(e).innerHTML!="O"){
        document.getElementById("tap").play();
        document.getElementById(e).innerHTML = "O";
        user = 1;
        document.getElementById("player").innerHTML="Player 1";
    }
    else{
        document.getElementById("error").play();
    }
    
  winningPattern.forEach(pat => {
    console.log( boxes[pat[0]].textContent);
    if(boxes[pat[0]].textContent ==  boxes[pat[1]].textContent == boxes[pat[2]].textContent == 'X'){
        console.log("JJJ")
    }
  });
}
//comment12