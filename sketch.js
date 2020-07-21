var bullet,wall,thickness;
var speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,70,70);
  wall=createSprite(1500,200,60,400);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
   {
    bullet.velocityX=0;
     if (damage>10){
      wall.shapeColor="red"
     }
     if(damage<10){
      wall.shapeColor="green"
     }
   }
  drawSprites();
}