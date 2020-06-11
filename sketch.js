

function setup(){
  createCanvas(1200,800)
 orangeShip = createSprite(100, 300);
//orangeShip.setAnimation("orange");
orangeShip.scale = 0.5;
orangeShip.rotateToDirection = true;
 greenShip = createSprite(300, 100);
greenShip.addAnimation("green",pacman_img);
greenShip.scale = 0.5;
greenShip.rotateToDirection = true;
 edges = createEdgeSprites();

 orangeVelocity = 5;
deltaX = 0; // change in x between the mouse and the ship
 deltaY = 0; // change in y between the mouse and the ship
}
function draw() {
  background("navy");
  controlGreenShip();
  follow(orangeShip, greenShip, orangeVelocity);
  if (orangeShip.collide(greenShip)) {
    // play a sound if the orange ship catches you.
   // playSound("sound://category_digital/laser_fade_2.mp3", false);
  }
  // don't go off the screen
  greenShip.collide(edges);
  drawSprites();
  
}

function controlGreenShip() {
  if (keyDown("up")){
    greenShip.velocityY = greenShip.velocityY - 0.5;
  }
  if (keyDown("down")){
    greenShip.velocityY = greenShip.velocityY + 0.5;
  }
  if (keyDown("left")){
    greenShip.velocityX = greenShip.velocityX - 0.5;
  }
  if (keyDown("right")){
    greenShip.velocityX = greenShip.velocityX + 0.5;
  }
}

function follow(follower, followed, velocity) {
  //the follower follows the followed at a constant velocity
    deltaX = followed.x - follower.x;
    deltaY = followed.y - follower.y;
    var followerAngle = Math.atan(deltaY / deltaX); 
    if (deltaX < 0) {
      // the arctan assumes that the angle is in the first or 
      // fourth quadrants, so if it's in the second or third
      // (i.e. deltaX/cosign is negative) correct by adding PI
      followerAngle = followerAngle + Math.PI;
    }
    follower.velocityX = velocity * Math.cos(followerAngle);  
    follower.velocityY = velocity * Math.sin(followerAngle);
}
