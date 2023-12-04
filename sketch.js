
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball_options={
		isStatic: false,
		restitution: 5,
		frictionAir: 0,
		density:1.2

	}

	ground = new Ground(500,995,1000,50)

	

	Engine.run(engine);
  
}
ball=Bodies.circle(200,100,20,ball_options);

  World.add(world,ball)
  ellipseMode(RADIUS);

function draw() {
  rectMode(CENTER);
  background(0);
  display();
  drawSprites();
 
}



