var pword = document.querySelector("#word");
var pletter = document.querySelector("#letter");
var space = document.querySelector("#space");
var textarea = document.querySelector("textarea");
var str = textarea.value;
function containsAlphabets(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      return true; // It contains alphabet characters
    }
  }
  return false; // No alphabet characters found
}

function countword(x){
  var n = 0;
  x = x.split(" ");
  x.forEach(e=>{
    if(containsAlphabets(e)){
      n++;
    }
  })
  return n;
}

function countletter(x){
  var n = 0;
  x = x.split("");
  x.forEach(e=>{
    if(containsAlphabets(e)){
      n++;
    }
  })
  return n;
}

textarea.addEventListener("input", ()=>{
  str = textarea.value;
  pword.innerHTML = "words: "+countword(str)
  pletter.innerHTML = "letters: "+countletter(str)
  //space
  space.innerHTML = "spaces: " + String(str.split(" ").length-1);
});