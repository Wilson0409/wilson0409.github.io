let x = 150;
let y = 500;
let angle = 0;
let circle3Angle = 0;
let circle3X = 400;
let circle3Y = 200;
let circle3Completed = false;
let img;
let imgAngle = 0;

function preload() {
  img = loadImage('Crescendo.png');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  strokeWeight(0);

  push();
  translate(50, 50); 
  rotate(radians(imgAngle)); 
  imageMode(CENTER);
  image(img, 0, 0, 100, 50); 
  pop();

  imgAngle += 5;

  // Circle 1
  push();
  fill(255, 153, 51);
  ellipse(x, 200, 200, 200);
  pop();

  // Circle 2
  push();
  fill(255, 0, 127);
  ellipse(200, 300, 150, 150);
  pop();

  // Circle 3
  push();
  fill(51, 0, 102);
  ellipse(circle3X, circle3Y, 50, 50);
  pop();

  // Circle 4
  push();
  fill(255, 153, 51);
  ellipse(420, y, 150, 150);
  pop();

  // Stick
  push();
  fill(0, 102, 204);
  translate(120, 450);
  rotate(radians(angle));
  rect(-40, -125, 80, 250, 40, 40, 50, 40);
  pop();

  angle += 1; // Increment angle for rotation

  // Circle 1 movement
  if (x <= 400) {
    x += 1; 
  } else if (!circle3Completed) {
    let centerX = 400;
    let centerY = 350;
    let radius = 150;

    // Calculate the position of Circle 3
    if (circle3Angle <= 165) {
      circle3Angle += 2;
      circle3X = centerX + radius * cos(radians(circle3Angle) - HALF_PI);
      circle3Y = centerY + radius * sin(radians(circle3Angle) - HALF_PI);
    } else {
      circle3Completed = true;
    }
  } else {
    if (y >= 390) {
      y -= 1;
    } else {
      // Reset the positions and angles
      x = 150;
      y = 500;
      angle = 0;
      circle3Angle = 0;
      circle3X = 400;
      circle3Y = 200;
      circle3Completed = false;
    }
  }
}