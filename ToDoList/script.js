const inputBox = document.getElementById("input-box");
const List = document.getElementById("list");

function addItem(){
    
    if(inputBox.value == ''){
        alert("Please add text first!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "&#x2718;";
        li.appendChild(span);
        List.appendChild(li);
    }
}

List.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);