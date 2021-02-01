const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var maxDroups; 
var engine,world;



function preload(){
    


}

function setup(){
    var canvas=createCanvas(600,900)
   engine = Engine.create();
    world = engine.world;
 

ball=new Ball(300,668,80,410)

ground=new Ground(300,890,600,20)


//ball1=new B1(0,0,5,5)


    
for(var i=0;i<maxDroups; i++){
    maxDroups.push(new B1(random(0,400),random(0,400),10,10));
}

}

function draw(){
    background("black")
Engine.update(engine);

ball.display();
ground.display();
//ball1.display();
maxDroups.drops();
}   


