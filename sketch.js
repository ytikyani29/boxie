

function setup() {
  createCanvas(400,400);
  boxie = createSprite(200,200,10,10);
  boxie.shapeColor = "blue"
  
}

function draw() 
{
  if(keyDown("right")){
    boxie.x = boxie.x + 3;
  }
  if(keyDown("left")){
    boxie.x = boxie.x - 3;
  }
  if(keyDown("up")){
    boxie.y = boxie.y - 3;
  }
  if(keyDown("down")){
    boxie.y = boxie.y + 3;
  }
  background(255);
  drawSprites();
}




