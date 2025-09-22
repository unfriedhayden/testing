const g = 9.8;
let playerx = 0;
let playery = 0;
let px = 10;
let py = 10;

function newframe(){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(px,px,playerx,playery);
  ctx.font = '20px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('test',20,10);
}
while(true){
  newframe();
}
