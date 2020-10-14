var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);

  bullet = createSprite(50, 200, 60, 50);
  bullet.shapeColor = "white";

  speed = random(223, 321);
  weight = random(30, 52);

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor=(80, 80, 80);

  speed = random(55, 90);
  weight = random(400, 1500);
  thickness=random(22, 83);
}
function draw() {
  background("black");
  bullet.velocityX = speed;

  if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
    bullet.velocityX = 0;
    var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed / (thickness*thickness*thickness);

    if (damage < 100) {
      bullet.shapeColor = color(0, 255, 0);
    }
    if (damage < 180 && damage > 100) {
      bullet.shapeColor = color(230, 230, 0);
    }
    if (damage > 180) {
      bullet.shapeColor = color(255, 0, 0);
    }
  }
  drawSprites();
}