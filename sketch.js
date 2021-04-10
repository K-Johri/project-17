
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0;
var survivalTime;


function preload(){
  
   
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(90,320,20,20);
  monkey.addAnimation("monkey_moving",monkey_running)
monkey.scale = 0.1;
  
  ground = createSprite(400,360,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
background("white");
  if(ground.x < 0){
    ground.x = ground.width/2;
    }
  if(keyDown("space")){
    monkey.velocityY = -11;
  }
  monkey.velocityY += 0.8;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  drawSprites();
  text("Score : " + score,500,50);
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
  stroke("white");
  textSize(20);
  fill("white");
    text("Score : " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");  
  survivalTime = Math.round(frameCount/frameRate())
  text("Survival Time : "+ survivalTime,100,50);
}
function spawnFood(){
  if(frameCount%80 === 0){
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);
    banana.velocityX = -6;
    banana.lifetime = 300;
    monkey.depth = banana.depth+1;
    banana.addImage(bananaImage)
    banana.scale = 0.06;
    foodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%300 === 0){
  obstacle = createSprite(800,300,10,40);
    obstacle.velocityX = -6;
    obstacle.lifetime = 300;
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.12;
    obstacleGroup.add(obstacle);
  }
}





