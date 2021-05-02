class Monster
{
    constructor(x,y)
    {
        var options= { isStatic : false}
        this.body = Bodies.rectangle(x,y,20,20,options);
        this.w=20;
        this.h=20;
        this.image=loadImage("Monster-01.png");
        World.add(world,this.body);
    }

    show()
    {
        var pos= this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x,pos.y,this.w,this.h);
    }
}