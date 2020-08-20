const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body,bodyIMG;


function preload(){

bodyIMG=loadImage("dustbingreen.png");

}


function setup() {
	createCanvas(1200,400);
    
 

    engine = Engine.create();
	world = engine.world;

  body = createSprite(1086,325,100,110);
  body.addImage(bodyIMG);
  body.scale=0.4;

 

	ground = new Ground(600,height,1200,20);
  ball = new Ball(100,10,20)  
  
  box1 = new Box(1100,384,130,10);
  box2 = new Box(1041,325,10,100);
  box3 = new Box(1145,325,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  ground.display();
  ball.display();
 
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){

     Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

  }
  
}


