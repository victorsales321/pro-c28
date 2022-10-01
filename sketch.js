const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon,tower2,ground2,cannon2,angle2;
var ball



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);

  var ball_options ={
		isStatic: true
	  };

  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  angle2= -PI / 10+500
  ground = new Ground(0, height - 1, width * 2, 1);
  ground2 = new Ground(1050, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  tower2 = new Tower(1050, 290, 160, 310);
  
  ball = Bodies.circle(259,30,50,ball_options)
  World.add(world,ball);
 
  cannon = new Cannon(180, 110, 100, 50, angle);
  cannon2 = new Cannon(1080, 70, 100, 50, angle2);
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  ground2.display();
  

  cannon.display();
  cannon2.display();
  tower.display();
  tower2.display();
 
  ellipse(ball.position.x,ball.position.y,50);
}



