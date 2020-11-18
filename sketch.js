var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle1, obstacleImage;
var FoodGroup ;
var score, survivalTime;

function preload()
{
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() 
{
  createCanvas(400,400)
monkey=createSprite(80,315,20,20) ;
monkey.addAnimation("moving", monkey_running);
 monkey.scale=0.1; 
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
 bananaGroup=createGroup();
 obstacleGroup=createGroup(); 
}

score=0;

function draw() 
{
  background("red");
  
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime= Math.ceil(frameCount/frameRate())
 text("survivalTime:" + score,100,50);
 
   if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
   Food();
  obstacle();
    
   if(monkey.isTouching(obstacleGroup)){
    
    ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
  }
  
 
  
  
  
 drawSprites(); 
}

function Food(){
  
  if(frameCount%80===0){
    
    banana=createSprite(190,200,30,30);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.099;
    banana.velocityX=-4;
    banana.lifetime=800;
    bananaGroup.add(banana);
  }
  
}
function obstacle(){
  if(frameCount%300===0){
    obstacle1=createSprite(400,315,70,70)
    obstacle1.addImage( obstaceImage)
    obstacle1.scale=0.2
    obstacle1.velocityX=-4;
    obstacle1.lifetime=800;
    obstacleGroup.add(obstacle1) 
  }
   
}



