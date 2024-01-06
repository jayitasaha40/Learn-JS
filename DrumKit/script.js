function keyEvent(event) {
    let key = event.key;
    playAudio(key.toUpperCase());
  }

  function playAudio(id) { 
    var x = document.getElementById(id);
    x.play(); 
  } 

  function pauseAudio(id) { 
    var x = document.getElementById(id); //x = audio
    x.pause(); 
  } 
 // document.getElementById("body").addEventListener("keypress", keyEvent(Event));
 document.addEventListener('keyup', (event) => {
    let key = event.key;
    pauseAudio(key.toUpperCase());
 });
