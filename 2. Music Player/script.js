var audio = document.querySelector("#audio");
var button = document.querySelector("#play");
var image__ = document.querySelector("#image__music");

function toggle_btn(){
  button.children[0].classList.toggle("d-none");
  button.children[1].classList.toggle("d-none");
}
var playing=false;
button.addEventListener("click", ()=>{
  
  if(!playing){
    audio.play();
  } else {
    audio.pause();
  }
  playing = !playing;
  toggle_btn();
  image__.classList.toggle("animate");
})