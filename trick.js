var c=document.getElementById('canvas');
var ctx=c.getContext('2d');
var result = {Line1: 0, Line2: 0,Line3: 0,Line4: 0,Line5: 0,Line6: 0,Line7: 0,Line8: 0,Line9: 0,Line10: 0,Line11: 0,Line12: 0,Line13: 0,Line14: 0,Line15: 0};
var offsetX=c.offsetLeft;
var offsetY=c.offsetTop;
var canvasHeight = 280;
var canvasWidth = 280;
var score = 0;
var color1 = "GREY";
var color2 = "transparent";
var color3 = "green";
var x1 = canvasHeight-260;
var y1 = canvasWidth-140;
var x2 = canvasHeight-200;
var y2 = canvasWidth-80;
var x3 = canvasHeight-80;
var y3 = canvasWidth-80;
var x4 = canvasHeight-20;
var y4 = canvasWidth-140;
var x5 = canvasHeight-80;
var y5 = canvasWidth-200;
var x6 = canvasHeight-200;
var y6 = canvasWidth-200;
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
drawLine(x6,x6,x1,y1,3,color1);
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
function gameOver()  {
  if((result["Line1"] == 1 && result["Line9"] == 1 && result["Line6"] == 1) ||
  (result["Line6"] == 1 && result["Line5"] == 1 && result["Line15"] == 1) ||
  (result["Line7"] == 1 && result["Line4"] == 1 && result["Line15"] == 1) ||
  (result["Line1"] == 1 && result["Line2"] == 1 && result["Line14"] == 1) ||
  (result["Line14"] == 1 && result["Line3"] == 1 && result["Line7"] == 1) ||
  (result["Line14"] == 1 && result["Line15"] == 1 && result["Line11"] == 1) ||
  (result["Line4"] == 1 && result["Line5"] == 1 && result["Line13"] == 1) ||
  (result["Line13"] == 1 && result["Line7"] == 1 && result["Line6"] == 1) ||
  (result["Line2"] == 1 && result["Line3"] == 1 && result["Line8"] == 1) ||
  (result["Line8"] == 1 && result["Line7"] == 1 && result["Line1"] == 1) ||
  (result["Line10"] == 1 && result["Line5"] == 1 && result["Line11"] == 1) ||
  (result["Line10"] == 1 && result["Line9"] == 1 && result["Line2"] == 1) ||
  (result["Line1"] == 1 && result["Line12"] == 1 && result["Line15"] == 1) ||
  (result["Line12"] == 1 && result["Line5"] == 1 && result["Line9"] == 1) ||
  (result["Line12"] == 1 && result["Line11"] == 1 && result["Line2"] == 1) ||
  (result["Line12"] == 1 && result["Line4"] == 1 && result["Line8"] == 1) ||
  (result["Line6"] == 1 && result["Line14"] == 1 && result["Line10"] == 1) ||
  (result["Line13"] == 1 && result["Line9"] == 1 && result["Line8"] == 1) ||
  (result["Line11"] == 1 && result["Line4"] == 1 && result["Line3"] == 1) ||
  (result["Line13"] == 1 && result["Line3"] == 1 && result["Line10"] == 1)){
  alert("Game Over your Score is :"+score+"\n please press ok to restart your game");
  window.location = "stick.html";
}else{
  score++;
  document.getElementById('score').innerHTML = "<h1>Score : "+score+"</h1>";
}
}

function click(e){
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  
  if((mouseX != x5-60 && mouseY != y1)&&(mouseX != x2 && mouseY != y1-20)&&(mouseX != x2-1 && mouseY != y1-19)&&
(mouseX != x3-92 && mouseY != y3-91)&&(mouseX != x3-91 && mouseY != y3-90)&&(mouseX != x3-90 && mouseY != y3-31)&&
(mouseX != x3-88 && mouseY != y3-30)&&(mouseX != x3-61 && mouseY != y1-41)&&(mouseX != x6+60 && mouseY != y6+20)&&
(mouseX != x6+61 && mouseY != y6+21)&&(mouseX != x5-30 && mouseY != y5+31)&&(mouseX != x5-31 && mouseY != y5+30)&&
(mouseX != x5-29 && mouseY != y5+29)&&(mouseX != x5&& mouseY != y5+39)&&(mouseX != x5-1 && mouseY != y5+40)&&
(mouseX != x5+1 && mouseY != y5+41)&&(mouseX != x2-2 && mouseY != y2-62)&&(mouseX != x2-1 && mouseY != y2-61)){
    if(result['Line1'] == 0){
      drawLineAsRect(lineRect1,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x1,y1,x2,y2,3,color3);
              result["Line1"]= 1;
              gameOver();
      }
    }
    if(result['Line2'] == 0){
      drawLineAsRect(lineRect2,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x2,y2,x3,y3,3,color3);
              result["Line2"]= 1;
              gameOver();
      }
    }
    if(result['Line3'] == 0){
      drawLineAsRect(lineRect3,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x3,y3,x4,y4,3,color3);
              result["Line3"]= 1;
              gameOver();
      }
    }
    if(result['Line4'] == 0){
      drawLineAsRect(lineRect4,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x4,y4,x5,y5,3,color3);
              result["Line4"]= 1;
              gameOver();
      }
    }
    if(result['Line5'] == 0){
      drawLineAsRect(lineRect5,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x5,y5,x6,y6,3,color3);
              result["Line5"]= 1;
              gameOver();
      }
    }
    if(result['Line6'] == 0){
      drawLineAsRect(lineRect6,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x6,x6,x1,y1,3,color3);
              result["Line6"]= 1;
              gameOver();
      }
    }
    if(result['Line7'] == 0){
      drawLineAsRect(lineRect7,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x1,y1,x4,y4,3,color3);
              result["Line7"]= 1;
              gameOver();
      }
    }
    if(result['Line8'] == 0){
      drawLineAsRect(lineRect8,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x4,y4,x2,y2,3,color3);
              result["Line8"]= 1;
              gameOver();
      }
    }
    if(result['Line9'] == 0){
      drawLineAsRect(lineRect9,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x2,y2,x6,y6,3,color3);
              result["Line9"]= 1;
              gameOver();
      }
    }
    if(result['Line10'] == 0){
      drawLineAsRect(lineRect10,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x6,y6,x3,y3,3,color3);
              result["Line10"]= 1;
              gameOver();
      }
    }
    if(result['Line11'] == 0){
      drawLineAsRect(lineRect11,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x3,y3,x5,y5,3,color3);
              result["Line11"]= 1;
              gameOver();
      }
    }
    if(result['Line12'] == 0){
      drawLineAsRect(lineRect12,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x5,y5,x2,y2,3,color3);
              result["Line12"]= 1;
              gameOver();
      }
    }
    if(result['Line13'] == 0){
      drawLineAsRect(lineRect13,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x4,y4,x6,y6,3,color3);
              result["Line13"]= 1;
              gameOver();
      }
    }
    if(result['Line14'] == 0){
      drawLineAsRect(lineRect14,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x1,y1,x3,y3,3,color3);
              result["Line14"]= 1;
              gameOver();
      }
    }
    if(result['Line15'] == 0){
      drawLineAsRect(lineRect15,color2);
      if(ctx.isPointInPath(mouseX,mouseY)){
              drawLine(x5,y5,x1,y1,3,color3);
              result["Line15"]= 1;
              gameOver();
      }
    }
  }

}

canvas.addEventListener("click", click);
