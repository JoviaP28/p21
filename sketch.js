
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var wall1
var wall2
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
options={
isStatic:false,
restitution:0.3,
friction:0,
denisty:1.2
}

	//Create the Bodies Here.
ground=new Ground(800,670,1600,20)
wall1=new Ground(800,600,30,120)
wall2=new Ground(1100,600,30,120)
ball=Bodies.circle(100,200,20,options)
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  wall1.display()
  wall2.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.8,y:-0.8})
	}
}

