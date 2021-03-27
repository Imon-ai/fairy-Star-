var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 450);

	fairy = createSprite(130, 320);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.20;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
   


	fairyVoice.loop();
}


function draw() {
  	
  background(bgImg);

  Engine.update(engine);

  keyPressed();

  if( keyCode === DOWN_ARROW || fairy.x < 450 ){
	Matter.Body.setStatic(starBody,false);
 }

 if(star.y < 470 || starBody.position.y < 470){
   Matter.Body.setStatic(starBody,true); 
}

  drawSprites();

}

function keyPressed() {
	//write code here	

  if(keyDown(LEFT_ARROW)) {
	  fairy.x = fairy.x - 2;
  }	

  if(keyDown(RIGHT_ARROW)) {
	fairy.x = fairy.x + 2;
  }
  star.x = starBody.position.x;
  star.y = starBody.position.y; 
}
