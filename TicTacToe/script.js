var user;
const winningPattern = [[0,1,2],
                        [3,4,5],
                        [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

                        
const boxes = document.querySelectorAll(".box");
var modal = document.getElementById("modal");

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
    
    
    if(boxes[pat[0]].textContent == 'X' && boxes[pat[1]].textContent == 'X' && boxes[pat[2]].textContent == 'X'){
        document.getElementById("win").play();
        document.getElementById("player").innerHTML = "Player 1 Win!!!"
        modal.innerHTML= "Player 1 Win!!!"
        modal.style.display = "block";
        
    }
    else if(boxes[pat[0]].textContent == 'O' && boxes[pat[1]].textContent == 'O' && boxes[pat[2]].textContent == 'O'){
        document.getElementById("win").play();
        document.getElementById("player").innerHTML = "Player 2 Win!!!"
        modal.style.display = "block";
        
    }
  });
}
//comment12