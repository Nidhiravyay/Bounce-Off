function setup() {
  createCanvas(800,400);
  square=createSprite(400, 300, 50, 50);
  rect=createSprite(400,200,30,50);
  square.velocityY=-2;
  rect.velocityY=2;
  square.shapeColor="violet";
  rect.shapeColor="tomato";
  hi=createSprite(500, 300, 50, 50);
  hello=createSprite(400,300,30,50);
  hi.velocityX=-2;
  hello.velocityX=2;
  hi.shapeColor="skyblue";
  hello.shapeColor="lightgreen";
}

function draw() {
  background(0);  
  
 Nidhiravyay(hi,hello);
 Nidhiravyay(square,rect);
  
drawSprites();
}










