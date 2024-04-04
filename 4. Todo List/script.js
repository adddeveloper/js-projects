var arr = [];

function update(){
  document.querySelector(".listholder").innerHTML = "";
  
  for(var i = 0; i < arr.length; i++){
    var e = arr[i];
    document.querySelector(".listholder").innerHTML += 
      '<div>'+
        '<span>'+e+'</span>'+
       '<span onclick="dlt('+i+')">x</span>'+
     '</div>';
  }
}

document.getElementById("submit").addEventListener("click", ()=>{
  arr.push(document.querySelector("input").value);
  update();
})

function dlt(x){
  if(arr[x]){
    arr.splice(x, 1)
    update();
  }
}