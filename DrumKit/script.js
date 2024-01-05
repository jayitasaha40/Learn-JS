function keyEvent(event) {
    let key = event.key;
    playAudio(key.toUpperCase());
  }

  function playAudio(id) { 
    var x = document.getElementById(id);
    x.play(); 
  } 
 // document.getElementById("body").addEventListener("keypress", keyEvent(Event));
  