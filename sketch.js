
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
	
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create the Bodies Here.
	paperball = new Paperball(100,60,0.5,{isStatic:false});
	
	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
if (keyDown("space")){
paperball.isStatic = true;
}
paperball.display();
drawSprites();
}



