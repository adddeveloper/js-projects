function generate() {
  var max = parseInt(document.querySelectorAll("input")[1].value);
  var min = parseInt(document.querySelectorAll("input")[0].value);
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  document.querySelector("span").innerHTML = randomNumber;
}
