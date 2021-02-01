class B1{
    constructor(x,y,width,height){
    var kevin={
        //'isStatic':true,
    'restitution':0.8,
    'friction':0.1,
    'density':1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,kevin)
    this.width=width;
    this.height=height;
    
    //this.image=loadImage("walking_1.png")
    World.add(world,this.body)
    
    }
     drops(){

        if(this.body.position.y > height){
    
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
         }
        }

    display(){

    
    
    
   // push()
    fill("lightBlue")
    
    rectMode(CENTER)
    
    
    
        
     rect(this.body.position.x,this.body.position.y,this.width,this.height)
    
    
    }
    
     
    //pop()
    
    
      
    
    
    }
    
    
    
     