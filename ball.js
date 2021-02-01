class Ball{
constructor(x,y,width,height){
var kevin={
    'isStatic':true,
'restitution':0.8,
'friction':0.3,
'density':1.0
}
this.body=Bodies.rectangle(x,y,width,height,kevin)
this.width=width;
this.height=height;

this.image=loadImage("walking_1.png")
World.add(world,this.body)

}
display(){
//var pos = this.body.position;



push()
fill("lightBlue")
//translate(this.body.position.x,this.body.position.y);
imageMode(CENTER)

image(this.image,0,0,this.width,this.height);

    //World.remove(world,this.body)

    //this.visiblity-this.visibility-5;
 //tint(255,this.visiblity);
 //rect(this.body.position.x,this.body.position.y,this.width,this.height)
 pop()


  


}


}
 