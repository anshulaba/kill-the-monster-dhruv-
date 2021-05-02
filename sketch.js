const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;

function preload()
{
  //bgimg=loadImage("GamingBackground.png");
  monsterImg=loadImage("Monster-01.png");
  superheroImg=loadImage("superhero-02.png");
}

function setup()
{
  createCanvas(1200,800);

  engine=Engine.create();
  world=engine.world;
  
  //bg=createSprite(200,200,50,50);
  //bg.addImage("background",bg);

  ground= new Ground(600,700,1200,20);
  box1 = new Box(400,600);
  box2 = new Box(400,550);
  box3 = new Box(400,500);
  box4 = new Box(400,450);
  box5 = new Box(400,400);
  box6 = new Box(400,350);
  box7 = new Box(400,300);
  box8 = new Box(400,250);
  box9 = new Box(400,200);

  box10 = new Box(450,500);
  box11 = new Box(450,450);
  box12 = new Box(450,400);
  box13 = new Box(450,350);
  box14 = new Box(450,300);
  box15 = new Box(450,250);
  box16 = new Box(450,200);
  box17 = new Box(450,150);

  box18 = new Box(500,600);
  box19 = new Box(500,550);
  box20 = new Box(500,500);
  box21 = new Box(500,450);
  box22 = new Box(500,400);
  box23 = new Box(500,350);
  box24 = new Box(500,300);
  
  superhero= new Superman(200,200);

}

function draw()
{
  background("white");
  Engine.update(engine);
  ground.show();
  box1.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();
  box6.show();
  box7.show();
  box8.show();
  box9.show();
  box10.show();

  box11.show();
  box12.show();
  box13.show();
  box14.show();
  box15.show();
  box16.show();
  box17.show();
  
  box18.show();
  box19.show();
  box20.show();
  box21.show();
  box22.show();
  box23.show();
  box24.show();
 
  superhero.display();
}


