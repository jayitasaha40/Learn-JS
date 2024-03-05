const inputBox = document.getElementById("input-box");
const List = document.getElementById("list");
showData();
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
        saveData();
    }
    inputBox.value = '';
}

List.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",List.innerHTML);
}
function showData(){
    List.innerHTML = localStorage.getItem("data");
}