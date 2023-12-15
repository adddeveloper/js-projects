var arr = [["✋", "p"], ["✌", "s"], ["👊", "r"]]
var output = document.getElementById("computer");
var scorew = 0, scorel = 0;
function check(x, y){
// Rock, Paper, Scissors Game Logic
  if(x == "✋" && y == "✌"){
    return false;
  } else if(y == "✋" && x == "✌"){
    return true;
  } else if(x == "✋" && y == "👊"){
    return true;
  } else if(y == "✋" && x == "👊"){
    return false;
  } else if(x == "✌" && y == "👊"){
    return false;
  } else if(y == "✌" && x == "👊"){
    return true;
  } else {return "none"};
}

function randout(ex){
  var n = Math.floor(Math.random()*arr.length);
  if(check(ex, arr[n][0]) && check(ex, arr[n][0]) != "none"){
    document.getElementById("computer").innerHTML = 
    '<h1>You Vs Computer</h1>'+
    '<h1>'+ex+' X '+arr[n][0]+'</h1>'+
    '<h1 style="color: green;">You Won!</h1>';
    scorew++;
    document.getElementById("score").innerHTML = "<span>won: "+scorew+"</span> <br> <span>lost: "+scorel+"</span>";
  } else if(check(ex, arr[n][0]) != "none"){
    document.getElementById("computer").innerHTML = 
    '<h1>You Vs Computer</h1>'+
    '<h1>'+ex+' X '+arr[n][0]+'</h1>'+
    '<h1 style="color: red;">You Lost!</h1>';
    scorel++;
    document.getElementById("score").innerHTML = "<span>won: "+scorew+"</span> <br> <span>lost: "+scorel+"</span>";
  } else {
    document.getElementById("computer").innerHTML = 
    '<h1>You Vs Computer</h1>'+
    '<h1>'+ex+' X '+arr[n][0]+'</h1>'+
    '<h1 style="color: black;">You Tied!</h1>';
    document.getElementById("score").innerHTML = "<span>won: "+scorew+"</span> <br> <span>lost: "+scorel+"</span>";
  }
}

document.querySelectorAll(".button").forEach(e=>{
  e.addEventListener("click", ()=>{
    randout(e.innerHTML);
  });
})