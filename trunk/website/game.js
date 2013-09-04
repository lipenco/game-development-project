var canvas,
    ctx,
    width = 600,
    height = 600,
    enemyTotal = 5,
    enemies = [],
    enemy,
    enemy_x = 50,
    enemy_y = -45,
    enemy_w = 50,
    enemy_h = 50,
    speed = 3,
    rightKey = false,
    leftKey = false,
    upKey = false,
    downKey = false,
    mario,
    laserTotal = 2, 
    lasers = [],
    mario_x = (width / 2) - 25, mario_y = height - 75, mario_w = 50, mario_h = 50;


for (var i = 0; i < enemyTotal; i++) {
 enemies.push([enemy_x, enemy_y, enemy_w, enemy_h, speed]);
 enemy_x += enemy_w + 60;
}

function clearCanvas() {
 ctx.clearRect(0,0,width,height);
}

function drawEnemies() {
 for (var i = 0; i < enemies.length; i++) {
  ctx.drawImage(enemy, enemies[i][0], enemies[i][1]);
 }
}

function drawMario() {
 if (rightKey) mario_x += 5;
 else if (leftKey) mario_x -= 5;
 if (upKey) mario_y -= 5;
 else if (downKey) mario_y += 5;
 if (mario_x <= 0) mario_x = 0;
 if ((mario_x + mario_w) >= width) mario_x = width - mario_w;
  if (mario_y <= 0) mario_y = 0;
 if ((mario_y + mario_h) >= height) mario_y = height - mario_h;
  ctx.drawImage(mario, mario_x, mario_y);

}

function moveEnemies() {
  for (var i = 0; i < enemies.length; i++) {
   if (enemies[i][1] < height) {
     enemies[i][1] += enemies[i][4];
   } else if (enemies[i][1] > height - 1) {
      enemies[i][1] = -45;
    }
  }
}

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  enemy = new Image();
  enemy.src = 'img/princess.png';
  mario = new Image();
  mario.src = 'img/mario1.png';
  setInterval(gameLoop, 25);
  document.addEventListener('keydown', keyDown, false);
  document.addEventListener('keyup', keyUp, false);
}

function gameLoop() {
  clearCanvas();
  moveEnemies();
  drawEnemies();
  drawMario();
}

function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
  if (e.keyCode == 38) upKey = true;
  else if (e.keyCode == 40) downKey = true;
  if (e.keyCode == 88 && lasers.length <= laserTotal) lasers.push([mario_x + 25, mario_y - 20, 4, 20]);

}

function drawLaser() {
  if (lasers.length)
    for (var i = 0; i < lasers.length; i++) {
      ctx.fillStyle = '#f00';
      ctx.fillRect(lasers[i][0],lasers[i][1],lasers[i][2],lasers[i][3])
    }
}

function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  if (e.keyCode == 38) upKey = false;
  else if (e.keyCode == 40) downKey = false;
}

window.onload = init;