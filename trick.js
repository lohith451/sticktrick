var c=document.getElementById('canvas');
var ctx=c.getContext('2d');
var result = {Line1: 0, Line2: 0,Line3: 0,Line4: 0,Line5: 0,Line6: 0,Line7: 0,Line8: 0,Line9: 0,Line10: 0,Line11: 0,Line12: 0,Line13: 0,Line14: 0,Line15: 0};
var offsetX=c.offsetLeft;
var offsetY=c.offsetTop;
var canvasHeight = c.getAttribute('height');
var canvasWidth = c.getAttribute('width');
var color1 = "GREY";
var color2 = "transparent";
var color3 = "green";
var color4 = "red";
var x1 = canvasWidth/1.4;
var y1 = canvasHeight/7.77777778;
var x2 = canvasWidth/3.5;
var y2 = canvasHeight/7.77777778;
var x3 = canvasWidth/14;
var y3 = canvasHeight/2;
var x4 = canvasWidth/3.5;
var y4 = canvasHeight/1.14754098;
var x5 = canvasWidth/1.4;
var y5 = canvasHeight/1.14754098;
var x6 = canvasWidth/1.07692308;
var y6 = canvasHeight/2;
var sec = 250;
var lineRect1=defineLineAsRect(x1,y1,x2,y2,4);
drawLine(x1,y1,x2,y2,3,color1);
var lineRect2=defineLineAsRect(x2,y2,x3,y3,4);
drawLine(x2,y2,x3,y3,3,color1);
var lineRect3=defineLineAsRect(x3,y3,x4,y4,4);
drawLine(x3,y3,x4,y4,3,color1);
var lineRect4=defineLineAsRect(x4,y4,x5,y5,4);
drawLine(x4,y4,x5,y5,3,color1);
var lineRect5=defineLineAsRect(x5,y5,x6,y6,4);
drawLine(x5,y5,x6,y6,3,color1);
var lineRect6=defineLineAsRect(x6,y6,x1,y1,4);
drawLine(x6,y6,x1,y1,3,color1);
var lineRect7=defineLineAsRect(x1,y1,x4,y4,4);
drawLine(x1,y1,x4,y4,3,color1);
var lineRect8=defineLineAsRect(x4,y4,x2,y2,4);
drawLine(x4,y4,x2,y2,3,color1);
var lineRect9=defineLineAsRect(x2,y2,x6,y6,4);
drawLine(x2,y2,x6,y6,3,color1);
var lineRect10=defineLineAsRect(x6,y6,x3,y3,4);
drawLine(x6,y6,x3,y3,3,color1);
var lineRect11=defineLineAsRect(x3,y3,x5,y5,4);
drawLine(x3,y3,x5,y5,3,color1);
var lineRect12=defineLineAsRect(x5,y5,x2,y2,4);
drawLine(x5,y5,x2,y2,3,color1);
var lineRect13=defineLineAsRect(x4,y4,x6,y6,4);
drawLine(x4,y4,x6,y6,3,color1);
var lineRect14=defineLineAsRect(x1,y1,x3,y3,4);
drawLine(x1,y1,x3,y3,3,color1);
var lineRect15=defineLineAsRect(x5,y5,x1,y1,4);
drawLine(x5,y5,x1,y1,3,color1);

function drawLine(x1,y1,x2,y2,lineWidth,color){
    ctx.fillStyle=color;
    ctx.strokeStyle=color;
    ctx.lineWidth=lineWidth;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.restore();
}


function drawLineAsRect(lineAsRect,color){
    var r=lineAsRect;
    ctx.save();
    ctx.beginPath();
    ctx.translate(r.translateX,r.translateY);
    ctx.rotate(r.rotation);
    ctx.rect(r.rectX,r.rectY,r.rectWidth,r.rectHeight);
    ctx.fillStyle=color;
    ctx.strokeStyle=color;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}


function defineLineAsRect(x1,y1,x2,y2,lineWidth){
    var lineLength= Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)));
    var lineRadianAngle=Math.atan2(y2-y1,x2-x1);

    return({
        translateX:x1,
        translateY:y1,
        rotation:lineRadianAngle,
        rectX:10,
        rectY:-lineWidth/2,
        rectWidth:lineLength-20,
        rectHeight:lineWidth
    });
}
function alert_gameOver(){
  setTimeout(function(){ alert("Game Over \n please press ok to restart your game");
  window.location = "stick.html"; }, sec);
}
function gameOver(line)  {
  if((result["Line1"] == 1 && result["Line9"] == 1 && result["Line6"] == 1)){
    drawLine(x1,y1,x2,y2,3,color4);
    drawLine(x2,y2,x6,y6,3,color4);
    drawLine(x6,y6,x1,y1,3,color4);
    alert_gameOver();
  }
  else if((result["Line6"] == 1 && result["Line5"] == 1 && result["Line15"] == 1)){
    drawLine(x6,y6,x1,y1,3,color4);
    drawLine(x5,y5,x6,y6,3,color4);
    drawLine(x5,y5,x1,y1,3,color4);
    alert_gameOver();
  }
  else if((result["Line7"] == 1 && result["Line4"] == 1 && result["Line15"] == 1)){
    drawLine(x1,y1,x4,y4,3,color4);
    drawLine(x4,y4,x5,y5,3,color4);
    drawLine(x5,y5,x1,y1,3,color4);
    alert_gameOver();
  }
  else if((result["Line1"] == 1 && result["Line2"] == 1 && result["Line14"] == 1)){
    drawLine(x1,y1,x2,y2,3,color4);
    drawLine(x2,y2,x3,y3,3,color4);
    drawLine(x1,y1,x3,y3,3,color4);
    alert_gameOver();
  }
  else if((result["Line14"] == 1 && result["Line3"] == 1 && result["Line7"] == 1)){
    drawLine(x1,y1,x3,y3,3,color4);
    drawLine(x3,y3,x4,y4,3,color4);
    drawLine(x1,y1,x4,y4,3,color4);
    alert_gameOver();
  }
  else if((result["Line14"] == 1 && result["Line15"] == 1 && result["Line11"] == 1)){
    drawLine(x1,y1,x3,y3,3,color4);
    drawLine(x5,y5,x1,y1,3,color4);
    drawLine(x3,y3,x5,y5,3,color4);
    alert_gameOver();
  }
  else if((result["Line4"] == 1 && result["Line5"] == 1 && result["Line13"] == 1)){
    drawLine(x4,y4,x5,y5,3,color4);
    drawLine(x5,y5,x6,y6,3,color4);
    drawLine(x4,y4,x6,y6,3,color4);
    alert_gameOver();
  }
  else if((result["Line13"] == 1 && result["Line7"] == 1 && result["Line6"] == 1)){
    drawLine(x4,y4,x6,y6,3,color4);
    drawLine(x1,y1,x4,y4,3,color4);
    drawLine(x6,y6,x1,y1,3,color4);
    alert_gameOver();
  }
  else if((result["Line2"] == 1 && result["Line3"] == 1 && result["Line8"] == 1)){
    drawLine(x2,y2,x3,y3,3,color4);
    drawLine(x3,y3,x4,y4,3,color4);
    drawLine(x4,y4,x2,y2,3,color4);
    alert_gameOver();
  }
  else if((result["Line8"] == 1 && result["Line7"] == 1 && result["Line1"] == 1)){
    drawLine(x4,y4,x2,y2,3,color4);
    drawLine(x1,y1,x4,y4,3,color4);
    drawLine(x1,y1,x2,y2,3,color4);
    alert_gameOver();
  }
  else if((result["Line10"] == 1 && result["Line5"] == 1 && result["Line11"] == 1)){
    drawLine(x6,y6,x3,y3,3,color4);
    drawLine(x5,y5,x6,y6,3,color4);
    drawLine(x3,y3,x5,y5,3,color4);
    alert_gameOver();
  }
  else if((result["Line10"] == 1 && result["Line9"] == 1 && result["Line2"] == 1)){
    drawLine(x6,y6,x3,y3,3,color4);
    drawLine(x2,y2,x6,y6,3,color4);
    drawLine(x2,y2,x3,y3,3,color4);
    alert_gameOver();
  }
  else if((result["Line1"] == 1 && result["Line12"] == 1 && result["Line15"] == 1)){
    drawLine(x1,y1,x2,y2,3,color4);
    drawLine(x5,y5,x2,y2,3,color4);
    drawLine(x5,y5,x1,y1,3,color4);
    alert_gameOver();
  }
  else if((result["Line12"] == 1 && result["Line5"] == 1 && result["Line9"] == 1)){
    drawLine(x5,y5,x2,y2,3,color4);
    drawLine(x5,y5,x6,y6,3,color4);
    drawLine(x2,y2,x6,y6,3,color4);
    alert_gameOver();
  }
  else if((result["Line12"] == 1 && result["Line11"] == 1 && result["Line2"] == 1)){
    drawLine(x5,y5,x2,y2,3,color4);
    drawLine(x3,y3,x5,y5,3,color4);
    drawLine(x2,y2,x3,y3,3,color4);
    alert_gameOver();
  }
  else if((result["Line12"] == 1 && result["Line4"] == 1 && result["Line8"] == 1)){
    drawLine(x5,y5,x2,y2,3,color4);
    drawLine(x4,y4,x5,y5,3,color4);
    drawLine(x4,y4,x2,y2,3,color4);
    alert_gameOver();
  }
  else if((result["Line6"] == 1 && result["Line14"] == 1 && result["Line10"] == 1)){
    drawLine(x6,y6,x1,y1,3,color4);
    drawLine(x1,y1,x3,y3,3,color4);
    drawLine(x6,y6,x3,y3,3,color4);
    alert_gameOver();
  }
  else if((result["Line13"] == 1 && result["Line9"] == 1 && result["Line8"] == 1)){
    drawLine(x4,y4,x6,y6,3,color4);
    drawLine(x2,y2,x6,y6,3,color4);
    drawLine(x4,y4,x2,y2,3,color4);
    alert_gameOver();
  }
  else if((result["Line11"] == 1 && result["Line4"] == 1 && result["Line3"] == 1)){
    drawLine(x3,y3,x5,y5,3,color4);
    drawLine(x4,y4,x5,y5,3,color4);
    drawLine(x3,y3,x4,y4,3,color4);
    alert_gameOver();
  }
  else if((result["Line13"] == 1 && result["Line3"] == 1 && result["Line10"] == 1)){
    drawLine(x4,y4,x6,y6,3,color4);
    drawLine(x3,y3,x4,y4,3,color4);
    drawLine(x6,y6,x3,y3,3,color4);
    alert_gameOver();
  }
}
function avoid(x,y){
  if((x>canvasWidth/2.04081633 && x<canvasWidth/1.95121951)&&(y>canvasHeight/4.21052635&&y<canvasHeight/3.80952381)){
    return 0;
  }
  else if ((x>canvasWidth/3.63636364 && x<canvasWidth/3.33333333)&&(y>canvasHeight/2.05128205&&y<canvasHeight/1.96078431)) {
    return 0;
  }
  else if ((x>canvasWidth/3.63636364 && x<canvasWidth/3.33333333)&&(y>canvasHeight/2.75862069&&y<canvasHeight/2.58064516)) {
    return 0;
  }
  else if ((x>canvasWidth/2.66666667 && x<canvasWidth/2.5)&&(y>canvasHeight/3.33333333&&y<canvasHeight/3.07692308)) {
    return 0;
  }
  else if ((x>canvasWidth/1.70212766 && x<canvasWidth/1.63265306)&&(y>canvasHeight/3.33333333&&y<canvasHeight/3.07692308)) {
    return 0;
  }
  else if ((x>canvasWidth/1.42857143 && x<canvasWidth/1.37931034)&&(y>canvasHeight/2.77777778&&y<canvasHeight/2.5974026)) {
    return 0;
  }
  else if ((x>canvasWidth/1.42857143 && x<canvasWidth/1.37931034)&&(y>canvasHeight/2.05128205&&y<canvasHeight/1.96078431)) {
    return 0;
 }
  else if ((x>canvasWidth/1.42857143 && x<canvasWidth/1.37931034)&&(y>canvasHeight/1.63265306&&y<canvasHeight/1.56862745)) {
    return 0;
  }
  else if ((x>canvasWidth/1.66666667 && x<canvasWidth/1.6)&&(y>canvasHeight/1.48148148 &&y<canvasHeight/1.42857143)) {
    return 0;
  }
  else if ((x>canvasWidth/2.05128205 && x<canvasWidth/1.95121951)&&(y>canvasHeight/1.3559322&&y<canvasHeight/1.31147541)) {
    return 0;
  }
  else if ((x>canvasWidth/2.66666667 && x<canvasWidth/2.5)&&(y>canvasHeight/1.48148148 && y<canvasHeight/1.42857143)) {
    return 0;
  }
  else if ((x>canvasWidth/3.63636364 && x<canvasWidth/3.33333333)&&(y>canvasHeight/1.63265306&&y<canvasHeight/1.56862745)) {
    return 0;
  }

 else if ((x>canvasWidth/2.05128205 && x<canvasWidth<1.95121951)&&(y>canvasHeight/2.05128205 && y<canvasHeight/1.95121951))
  {
    return 0;
  }

  return 1;
}
function click(e){
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

if(avoid(mouseX,mouseY)){
    if(result['Line1'] == 0){
      drawLineAsRect(lineRect1,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x1,y1,x2,y2,3,color3);
              result["Line1"]= 1;
              gameOver('Line1');
      }
    }
    if(result['Line2'] == 0){
      drawLineAsRect(lineRect2,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x2,y2,x3,y3,3,color3);
              result["Line2"]= 1;
              gameOver('Line2');
      }
    }
    if(result['Line3'] == 0){
      drawLineAsRect(lineRect3,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x3,y3,x4,y4,3,color3);
              result["Line3"]= 1;
              gameOver('Line3');
      }
    }
    if(result['Line4'] == 0){
      drawLineAsRect(lineRect4,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x4,y4,x5,y5,3,color3);
              result["Line4"]= 1;
              gameOver('Line4');
      }
    }
    if(result['Line5'] == 0){
      drawLineAsRect(lineRect5,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x5,y5,x6,y6,3,color3);
              result["Line5"]= 1;
              gameOver('Line5');
      }
    }
    if(result['Line6'] == 0){
      drawLineAsRect(lineRect6,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x6,y6,x1,y1,3,color3);
              result["Line6"]= 1;
              gameOver('Line6');
      }
    }
    if(result['Line7'] == 0){
      drawLineAsRect(lineRect7,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x1,y1,x4,y4,3,color3);
              result["Line7"]= 1;
              gameOver('Line7');
      }
    }
    if(result['Line8'] == 0){
      drawLineAsRect(lineRect8,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x4,y4,x2,y2,3,color3);
              result["Line8"]= 1;
              gameOver('Line8');
      }
    }
    if(result['Line9'] == 0){
      drawLineAsRect(lineRect9,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x2,y2,x6,y6,3,color3);
              result["Line9"]= 1;
              gameOver('Line9');
      }
    }
    if(result['Line10'] == 0){
      drawLineAsRect(lineRect10,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x6,y6,x3,y3,3,color3);
              result["Line10"]= 1;
              gameOver('Line10');
      }
    }
    if(result['Line11'] == 0){
      drawLineAsRect(lineRect11,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x3,y3,x5,y5,3,color3);
              result["Line11"]= 1;
              gameOver('Line11');
      }
    }
    if(result['Line12'] == 0){
      drawLineAsRect(lineRect12,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x5,y5,x2,y2,3,color3);
              result["Line12"]= 1;
              gameOver('Line12');
      }
    }
    if(result['Line13'] == 0){
      drawLineAsRect(lineRect13,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x4,y4,x6,y6,3,color3);
              result["Line13"]= 1;
              gameOver('Line13');
      }
    }
    if(result['Line14'] == 0){
      drawLineAsRect(lineRect14,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x1,y1,x3,y3,3,color3);
              result["Line14"]= 1;
              gameOver('Line14');
      }
    }
    if(result['Line15'] == 0){
      drawLineAsRect(lineRect15,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x5,y5,x1,y1,3,color3);
              result["Line15"]= 1;
              gameOver('Line15');
      }
    }
  }
//  console.log("x = "+mouseX+"y = "+mouseY);
}

canvas.addEventListener("click", click);
