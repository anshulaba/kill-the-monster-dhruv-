class Superman
{
    constructor(x,y)
    {
        var options= { 
                       //'restitution':1,
                       'isStatic' : false,
                       'friction':0.03,
                       'density':1
                    }

        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        this.image=loadImage("Superhero-01.png");
        World.add(world,this.body);
    }

    display()
    {
      var pos = this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      //var angle = this.body.angle;
      push();
      //rotate(angle);
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();

    }
}