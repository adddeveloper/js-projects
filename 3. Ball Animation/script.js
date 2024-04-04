// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ball canvas
const canvasOne = document.getElementById("canvasOne");
canvasOne.width = window.innerWidth;
canvasOne.height = window.innerHeight;
canvasOne.style.border ="solid 1px black";
const contextOne = canvasOne.getContext('2d');
class One {
    constructor(x,y,s,color){
        this.x = x; this.y = y; this.s = s; this.color = [Math.random()*255,Math.random()*255,Math.random()*255];
        this.ax = s/2-1; this.ay = s/2;
    }
    draw(){
        /*------ color ball -------*/
        this.color[0]+=2*0.2126;
        this.color[1]+=2*0.0722;
        this.color[2]+=2*0.7152;
        if(this.color[0] >= 255){
            this.color[0]=0
        }else if(this.color[1] >= 255){
            this.color[1]=0
        }else if(this.color[2] >= 255){
            this.color[2]=0
        }
        /*------ draw ball -------*/
        contextOne.beginPath();
        contextOne.arc(this.x, this.y, this.s, 0, Math.PI * 2);
        contextOne.fillStyle="rgb("+this.color[0]+","+this.color[1]+","+this.color[2]+")";
        contextOne.fill();
        this.update()
    }
    update(){
        this.x+=this.ax;
        this.y+=this.ay;
        this.ay+=0.2;
        if(this.x + this.s > canvasOne.width){
            this.ax *=  -1;
        } else if(this.x < 0){
            this.ax *=  -1;
        }

        if(this.y + this.s > canvasOne.height){
            this.y = 0;
            this.ay = 0;
        }
    }
}
var numberOfBalls = parseInt(document.querySelector("input").value);
var balls = [];
for(var i=0; i < numberOfBalls; i++){
    balls.push(new One(Math.random()*canvasOne.width, Math.random()*canvasOne.height, Math.random()*11));
}
document.querySelector("input").addEventListener("change", ()=>{
  balls = [];
  numberOfBalls = parseInt(document.querySelector("input").value);
  for(var i=0; i < numberOfBalls; i++){
    balls.push(new One(Math.random()*canvasOne.width, Math.random()*canvasOne.height, Math.random()*11));
  }
})

var context = [];
function animate(){
    contextOne.fillStyle = "rgb(255, 255, 255, 0.1)"
    contextOne.fillRect(0,0,canvasOne.width, canvasOne.height);
    balls.forEach(e =>{
        e.draw()
    })
    requestAnimationFrame(animate);
} animate();