var ball,ballImage;
var edges;


function setup() {
    createCanvas(700, 500);
    
    ball=createSprite(350,300,20,20);
  
    

    edges=createEdgeSprites();
}

function draw() {
  // Fill the canvas with light gray, covering up previous images
    background(50);
   
    
  
    drawSprites();
    
    
}

