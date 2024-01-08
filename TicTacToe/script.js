var user;
document.getElementById('show-content-btn').addEventListener('click', function () {
     user = 1;
    const initialContent = document.getElementById('initial-content');
    initialContent.style.display = 'none';

    const fullContent = document.getElementById('full-content');
    fullContent.style.display = 'block';

    document.body.style.backgroundColor = ' #29272b;';
    setTimeout(function () {
        fullContent.style.opacity = '1';
    }, 10);
});

function changeValue(e){
    if(user==1){
        document.getElementById(e).innerHTML = "X";
        user = 2;
    }
    else{
        document.getElementById(e).innerHTML = "O";
        user = 1;
    }
}