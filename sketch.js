var ball; 
var redG; 
var blueG; 
var greenG; 
var purpleG; 
var music; 
function preload()
{ music = loadSound("music.mp3"); } 

function setup(){
  
 createCanvas(900,600);
  
  ball = createSprite(random(20,850),50,30,30);
  ball.shapeColor = "white";
  ball.velocityY = 10; 
 
  redG = createSprite(120,550,200,40);
  redG.shapeColor = "red";
 
  blueG = createSprite(340,550,200,40);
  blueG.shapeColor = "blue";
 
  greenG = createSprite(560,550,200,40); 
  greenG.shapeColor = "lime"; 
 
  purpleG = createSprite(780,550,200,40); 
  purpleG.shapeColor = "purple"; 
  

} 
function draw() { 
  
  background(0); 
 if(ball.isTouching(redG)){
  ball.shapeColor = "red";
  ball.velocityY = 0; 
 } 
  
  if(ball.isTouching(blueG)){
   ball.shapeColor = "blue"; ball.velocityY = 0; 
  }
  
  if(ball.isTouching(greenG)){
  ball.shapeColor = "lime"; ball.velocityY = 0; 
  }
  
  if(ball.isTouching(purpleG)){
   ball.shapeColor = "purple"; ball.velocityY = 0; 
  }
  
  drawSprites(); 
}