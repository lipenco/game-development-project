canvasId = "gameCanvas";
var canvas = null;
var ctx = null;
var frameRate = 1000/30;
var frame = 0;
var assets = ['img/mario1.png',
              'img/mario2.png',
              'img/mario3.png',
              'img/mario4.png',
              'img/mario5.png',
              'img/mario6.png',
              'img/mario7.png',
              'img/mario8.png'
             ];
var frames = [];

var onImageLoad = function(){
    console.log("IMAGE!!!");
};

var setup = function() {
 var canvas = document.getElementById(canvasId);
 ctx = canvas.getContext('2d');

  for (var i = 0; i < assets.length; i++ ) {
    frames.push(new Image());
    frames[i].onload = onImageLoad;
    frames[i].src = assets[i];
  }
  setInterval(animate, frameRate);
};

var animate = function(){
  ctx.clearRect(0,0, 500, 500);
  ctx.drawImage(frames[frame], 200, 40);
  frame = (frame +1 ) % frames.length;
};












