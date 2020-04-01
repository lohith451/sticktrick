var c=document.getElementById('canvas');
var ctx=c.getContext('2d');
var result = {Line1: 0, Line2: 0,Line3: 0,Line4: 0,Line5: 0,Line6: 0,Line7: 0,Line8: 0,Line9: 0,Line10: 0,Line11: 0,Line12: 0,Line13: 0,Line14: 0,Line15: 0};
var offsetX=c.offsetLeft;
var offsetY=c.offsetTop;
var canvasHeight = c.getAttribute('height');
var canvasWidth = c.getAttribute('width');
var score = 0;
var color1 = "GREY";
var color2 = "transparent";
var color3 = "green";
var x1 = canvasHeight/14;
var y1 = canvasWidth/2;
var x2 = canvasHeight/3.5;
var y2 = canvasWidth/1.4;
var x3 = canvasHeight/1.4;
var y3 = canvasWidth/1.4;
var x4 = canvasHeight/1.07692308;
var y4 = canvasWidth/2;
var x5 = canvasHeight/1.4;
var y5 = canvasWidth/3.5;
var x6 = canvasHeight/3.5;
var y6 = canvasWidth/3.5;
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
  if((mouseX != x5/4 && mouseY != y1)&&(mouseX != x2 && mouseY != y1/1.16666667)&&(mouseX != x2/1.0502513&& mouseY != y1/1.15702479)&&
(mouseX != x3/1.85185185 && mouseY != y3/1.83486239)&&(mouseX != x3/1.83486239 && mouseY != y3/1.81818182)&&(mouseX != x3/1.81818182 && mouseY != y3/1.18343195)&&
(mouseX != x3/1.78571429 && mouseY != y3/1.17647059)&&(mouseX != x3/1.43884892 && mouseY != y1/1.41414141)&&(mouseX != y1 && mouseY != y1/1.4)&&
(mouseX != y1/1.41843972 && mouseY != y1/1.38613861)&&(mouseX != x5/1.17647059 && mouseY != y1/1.26126126)&&(mouseX != x5/1.18343195 && mouseY != y1/1.26126126)&&
(mouseX != x5/1.16959064 && mouseY != y1/1.28440367)&&(mouseX != x5&& mouseY != y1/1.17647059)&&(mouseX != x5/1.00502513 && mouseY != y1/1.16666667)&&
(mouseX != x4/1.29353234 && mouseY != y1/1.15702479)&&(mouseX != x2/1.02564103 && mouseY != y2/1.44927536)&&(mouseX != x2/1.01265823 && mouseY != y2/1.43884892)){
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
