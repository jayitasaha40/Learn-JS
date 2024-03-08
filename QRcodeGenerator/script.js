const qr_img = document.getElementById("qr");
const text = document.getElementById("text");

function showImg(){
    if(text.value === ""){
        alert("Please enter the taxt or URL first!")
    }
    else{
        var src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(text.value);
        console.log(src);
        qr_img.src = src;
        qr_img.classList.add("showimg");
    }
}