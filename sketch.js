function setup() {
    createCanvas(600, 400);
    background("yellow")
  }
  
  function draw() {
    stroke("green");
    fill("brown");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }