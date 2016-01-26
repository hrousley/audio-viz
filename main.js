var canvas, context, currentVolume, vol, niceVol, bottomDistance, bandSpacing;

window.onload = function() {
  canvas = document.getElementById('myCanvas');
  context = canvas.getContext('2d');
  //bezier curves (start X, start Y, midpoint X, midpoint Y, end X, end Y)
  context.lineWidth = 10;
  context.strokeStyle = 'black';
  currentVolume = 500;
  vol = 50;
  niceVol = 50;
  bottomDistance = 600;
  bandSpacing = 10;

  update();
}

function volAdjust() {
  context.clearRect(0,0,400,610);
  for (i=0; i < 5; i++ ) {
    var edgeHeight = (bottomDistance - i*bandSpacing);
    var centerHeight = (edgeHeight - Math.pow(1.5, i) * (niceVol*15)/10);
    context.beginPath();
    context.bezierCurveTo(0, edgeHeight, 200,  centerHeight, 400, edgeHeight);
    context.stroke();
    context.closePath();
  }
}

function outputUpdate(vol) {
  document.querySelector('#volume').value = vol;
  niceVol = Math.ceil(vol);
}


function update() {
  window.requestAnimationFrame(update);  
  volAdjust();
  console.log("volAdjust", niceVol);
}