let x = 150;
let y = 500;
let angle = 0;
let circle3Angle = 0;
let circle3X = 400;
let circle3Y = 200;
let circle3Completed = false;
let img;
let imgAngle = 0;
let trail1 = []; // Array to store the positions of Circle 1
let trail3 = []; // Array to store the positions of Circle 3
let trail4 = []; // Array to store the positions of Circle 4
let trailFrameSkip1 = 5; // Skip frames for Circle 1 trail to improve performance
let trailFrameSkip3 = 2; // Skip fewer frames for Circle 3 to make the trail smoother
let trailFrameSkip4 = 5; // Skip frames for Circle 4 trail to improve performance

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

  imgAngle += 1;

  // Draw the trail for Circle 1
  for (let i = 0; i < trail1.length; i++) {
    let pos = trail1[i];
    push();
    fill(255, 153, 51, 150); // Semi-transparent tail
    ellipse(pos.x, pos.y, 200, 200);
    pop();
  }

  // Draw the trail for Circle 3
  for (let i = 0; i < trail3.length; i++) {
    let pos = trail3[i];
    push();
    fill(51, 0, 102, 150); // Semi-transparent tail
    ellipse(pos.x, pos.y, 50, 50);
    pop();
  }

  // Draw the trail for Circle 4
  for (let i = 0; i < trail4.length; i++) {
    let pos = trail4[i];
    push();
    fill(255, 153, 51, 150); // Semi-transparent tail
    ellipse(pos.x, pos.y, 150, 150);
    pop();
  }

  // Add the current positions to the trails every few frames
  if (frameCount % trailFrameSkip1 === 0) {
    trail1.push({x: x, y: 200});
  }
  if (frameCount % trailFrameSkip3 === 0) {
    trail3.push({x: circle3X, y: circle3Y});
  }
  if (frameCount % trailFrameSkip4 === 0) {
    trail4.push({x: 420, y: y});
  }

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
      trail1 = []; // Clear the trail for Circle 1
      trail3 = []; // Clear the trail for Circle 3
      trail4 = []; // Clear the trail for Circle 4
    }
  }
}
