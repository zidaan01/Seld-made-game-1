var player;
var bush;
var edges;


function preload(){

playerImg = loadImage("player.png");
bushImg = loadImage("Bush1.png");


}

function setup(){
createCanvas(800,600);
edges = createEdgeSprites();




bush = createSprite(210, 530, 50, 50);
bush.addImage(bushImg);
bush.scale = 0.4;



player = createSprite(100, 440, 50, 50);
player.addImage(playerImg);
player.debug = false;
player.scale = 1.5;


}
function draw(){

background("red");

player.collide(edges);

controls();

drawSprites();
}
function controls(){
   if(keyDown(UP_ARROW)){
     player.velocityY = -7;
   }
   if(keyDown(LEFT_ARROW)){
    player.x = player.x - 7;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 7;
  }
  
player.velocityY = player.velocityY + 4;


}





