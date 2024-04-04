
function validate() {
    var x = document.querySelector("input").value;
    let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
  
    if (x.match(pattern)) {
      document.querySelector("p").style.color = "green";
      document.querySelector("p").innerHTML = "true";
    } else {
      document.querySelector("p").style.color = "red";
      document.querySelector("p").innerHTML = "false";
      
    }
  }