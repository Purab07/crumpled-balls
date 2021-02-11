
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var ground;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	ground = createSprite(400,690,800,10);

	//leftwall = createSprite(600,)
	
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create the Bodies Here.
	paperball = new Paperball(100,60,0.5,{isStatic:true});
	
	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
keyPressed();
paperball.display();
drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position),{x:85,y:-85};
	}
}
