class Box
{
    constructor(x,y)
    {
        var options= { isStatic : false,
                       restitution : 1,
                       friction : 1.0,
                       density : 0.1
                     }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.w=50;
        this.h=50;
        World.add(world,this.body);
    }

    show()
    {
        var pos= this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.w,this.h);
    }
}