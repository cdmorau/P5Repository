

let img;
// the setup function is only run once when the sketch is lunched
function preload() {
  textura = loadImage('./imgs/batman.webp');
}


function setup() {
  createCanvas(800, 800, WEBGL);
  frameRate(500);
  
}

// the draw function is run continuously
// function draw() {
//   background(255, 0, 255);
//   stroke(0, 255, 0);
//   strokeWeight(100);
//   line((frameCount * 10) % width, 0, (frameCount * 10) % width, height);
// }



function draw() {
  background(220);
  beginShape();
  texture(textura);
  vertex(100, 100,);
  vertex(300, 100, textura.width, 0);
  vertex(200, 300, textura.width/2, textura.height);
  endShape(CLOSE);
}