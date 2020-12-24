var bullet,bullet2,bullet3,bullet4,wall,wall2,wall3,wall4,speed,weight,thickness;

function setup() {
  createCanvas(1300,700);
  speed=random(55, 65);
  weight=random(700,1500);
  thickness = random(22,83)
  bullet = createSprite(10,50, thickness, 4);
  bullet2 = createSprite(10,270, thickness, 4);
  bullet3 = createSprite(10,430, thickness, 4);
  bullet4 = createSprite(10,650, thickness, 4);
  
  wall = createSprite(1200,50,50,200);
  wall2 = createSprite(1200,270,50,140);
  wall3 = createSprite(1200,430,50,140);
  wall4 = createSprite(1200,650,50,140);
  //wall.debug = true;
  bullet.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
  bullet4.velocityX = speed;

  bullet.shapeColor = color(255)
  bullet2.shapeColor = "black"
  bullet3.shapeColor = "yellow"
  bullet4.shapeColor = "blue"
  


var line1 = createSprite(0,175,50000,5)
var line2 = createSprite(0,350,50000,5)
var line3 = createSprite(0,525,50000,5)

}


function draw() {
  background(255,155,15);  

if (hasCollided(wall,bullet)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  if (damage>10)
  {
  wall.shapeColor = color(255,0,0)
  textSize(25)
  text ("unsafe",10,50)
  }
if(damage<10)
{
wall.shapeColor=color(0,255,0)
textSize(25)
text ("safe",10,50)
}

bullet2.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  if (damage<10)
  {
  wall2.shapeColor = color(255,0,0)
  textSize(25)
  text ("unsafe",10,250)
  }
if(damage>10)
{
wall2.shapeColor=color(0,255,0)
textSize(25)
text ("safe",10,250)
}


bullet3.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  if (damage>10)
  {
  wall3.shapeColor = color(255,0,0)
  textSize(25)
  text ("unsafe",10,430)
  }
if(damage<10)
{
wall3.shapeColor=color(0,255,0)
textSize(25)
text ("safe",10,430)
}

bullet4.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  if (damage<10)
  {
  wall4.shapeColor = color(255,0,0)
  textSize(25)
  text ("unsafe",10,650)
  }
if(damage>10)
{
wall4.shapeColor=color(0,255,0)
textSize(25)
text ("safe",10,650)
}


}
 drawSprites();
}

function hasCollided(lwall,lbullet){
  bulletRightEdge = lbullet.x + bullet.width
  wallLeftEdge = lwall.x
  if (bulletRightEdge >= wallLeftEdge)
   {
    return true;
   }
   return false;
  
}