var car,car2,car3,wall;
var speed,weight;
function setup() {
 var canvas = createCanvas(1600,400);
 speed=random(55,90)
weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed; 
  car2=createSprite(500, 200, 50, 50);
  car2.velocityX = speed;
  car3=createSprite(100, 200, 50, 50);
  car3.velocityX = speed;  
  wall=createSprite(1200,200, 60, height/2)
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocity=0;
    var deformation  = 0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation>180 && deformation>100){
      car2.shapeColor=color(230,230,0);
    }
    if(deformation>100){
      car3.shapeColor=color(0,255,0);
    }
  } 
  drawSprites();
}