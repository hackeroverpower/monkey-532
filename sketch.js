
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score =0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  FoodGroup= new Group();
  obstacleGroup= new Group();
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  //console.log(ground.x)

  var survivalTime=0;

}


function draw() {
background("white");
  
  if(ground.x>0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY=-15
  }
   monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
  spawnfood()
    spawnobstacles();
  drawSprites(); 
  
    
  if(obstacleGroup.isTouching(monkey)){
    
    ground.velocityX = 0;
    monkey.velocityY = 0;
    
    obstaclesgroup.setVelocityXEach(0);
    obstaclesgroup.setLifetimeEach(-1);
    
    foodgroup.setVelocityXEach(0); 
    foodgroup.setLifetimeEach(-1);
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}



function spawnfood() {
  
  if (frameCount % 80 === 0) {
    
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -6;
    
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
     banana.addImage(bananaImage);
     banana.scale=0.07;
    
    FoodGroup.add(banana);
   }
  
}

function spawnobstacles() {
  
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
     
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.13;
         
    obstacle.lifetime = 300;
    
    obstaclesgroup.add(obstacle);
    }
  







}






