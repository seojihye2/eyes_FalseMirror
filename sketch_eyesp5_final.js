var q=320;
var w=320;
var t=320;
var y=320;
var i=320;
var j=320;
var f=320
var h=320;
var n=320;
var m=320;
var speed = 10;
var r=115;
var g=162;
var b=219;
var k=120;
var l=130;


function setup() {
  createCanvas(640,640);

  
}
function draw() {
  background(126,96,64);
  
  push();
  translate(320,320); 
  
  noStroke();
  fill(255,230);
  bezier(-330,0,-330,340,330,340,330,0);
  bezier(-330,0,-330,-340,330,-340,330,0);
  
  noStroke();
  fill(r,g,b,200);
  ellipse(0,0,500,550);
 
  pop();
   
  //draw cloud1
  noStroke();
  fill(255);
  ellipse(n,m,140,140);
  ellipse(n-80,m,0.8*130,0.8*120);
  ellipse(n+80,m,0.8*130,0.8*120);

  //draw cloud2
  noStroke();
  fill(255);
  ellipse(q+200,w-100,100,80);
  ellipse((q+200)-50,w-100,0.8*100,0.8*80);
  ellipse((q+200)+50,w-100,0.8*100,0.8*80);
  
  //draw cloud3
  noStroke();
  fill(255);
  ellipse(t-200,y+100,80,60);
  ellipse((t-200)-40,y+100,0.8*80,0.8*60);
  ellipse((t-200)+40,y+100,0.8*80,0.8*60);

  //draw cloud4
  noStroke();
  fill(255);
  ellipse(i+200,j+150,35,30);
  ellipse((i+200)-20,j+150,0.8*35,0.8*30);
  ellipse((i+200)+20,j+150,0.8*35,0.8*30);
  
  //draw cloud5
  noStroke();
  fill(255);
  ellipse(f-200,h-150,35,30);
  ellipse((f-200)-20,h-150,0.8*35,0.8*30);
  ellipse((f-200)+20,h-150,0.8*35,0.8*30);
  
  push();
  translate(320,320);

  noFill();
  stroke(126,96,64);
  strokeWeight(120);
  bezier(-450,0,-450,-460,450,-460,450,0);
  bezier(-450,0,-450,460,450,460,450,0);
  
  noFill();
  stroke(100,60,22);
  strokeWeight(10);
  bezier(-330,0,-330,-340,330,-340,330,0);
  bezier(-330,0,-330,340,330,340,330,0);
    
  noFill();
  stroke(170,131,94);
  strokeWeight(10);
  bezier(-340,0,-340,-350,340,-350,340,0);
  bezier(-340,0,-340,350,340,350,340,0);
  
  noFill();
  stroke(232,187,138);
  strokeWeight(10);
  bezier(-350,0,-350,-360,350,-360,350,0);
  bezier(-350,0,-350,360,350,360,350,0);  
  
  noFill();
  stroke(242,203,161);
  strokeWeight(10);
  bezier(-360,0,-360,-370,360,-370,360,0);
  bezier(-360,0,-360,370,360,370,360,0);
 
  noFill();
  stroke(245,220,193);
  strokeWeight(10);
  bezier(-370,0,-370,-380,370,-380,370,0);
  bezier(-370,0,-370,380,370,380,370,0);  
  
  noFill();
  stroke(255,242,219);
  strokeWeight(10);
  bezier(-380,0,-380,-390,380,-390,380,0);
  bezier(-380,0,-380,390,380,390,380,0);
 
  noFill();
  stroke(245,220,193);
  strokeWeight(10);
  bezier(-390,0,-390,-400,390,-400,390,0);
  bezier(-390,0,-390,400,390,400,390,0); 
  
  noFill();
  stroke(242,203,161);
  strokeWeight(10);
  bezier(-400,0,-400,-410,400,-410,400,0);
  bezier(-400,0,-400,410,400,410,400,0);

  noFill();
  stroke(232,187,138);
  strokeWeight(9);
  bezier(-410,0,-410,-420,410,-420,410,0);
  bezier(-410,0,-410,420,410,420,410,0); 
  
  noFill();
  stroke(170,131,94);
  strokeWeight(9);
  bezier(-420,0,-420,-430,420,-430,420,0);
  bezier(-420,0,-420,430,420,430,420,0);
 
  fill(0,200);
  noStroke();
  ellipse(0,0,k,l); 
  
  pop(); 

if(keyIsDown(LEFT_ARROW)) n-= speed;
if(keyIsDown(RIGHT_ARROW)) n+= speed;
if(keyIsDown(UP_ARROW)) m-= speed;
if(keyIsDown(DOWN_ARROW)) m+= speed;
if(keyIsDown(65)) i-=speed;
if(keyIsDown(83)) i+=speed;
if(keyIsDown(87)) j-=speed;
if(keyIsDown(90)) j+=speed;
if(keyIsDown(49)) q-=speed;
if(keyIsDown(50)) q+=speed;
if(keyIsDown(51)) w-=speed;
if(keyIsDown(52)) w+=speed;
if(keyIsDown(70)) t-=speed;
if(keyIsDown(71)) t+=speed;
if(keyIsDown(84)) y-=speed;
if(keyIsDown(86)) y+=speed;
if(keyIsDown(74)) f-=speed;
if(keyIsDown(75)) f+=speed;
if(keyIsDown(73)) h-=speed;
if(keyIsDown(77)) h+=speed;

}

/*function keyPressed() {
    if(keyCode === LEFT_ARROW) x-= speed;
    else if(keyCode === RIGHT_ARROW) x+= speed;
    else if(keyCode === UP_ARROW) y-= speed;
    else if(keyCode === DOWN_ARROW) y+= speed;
}*/
/*
function keyTyped() {
  if(key === 'a') i-=speed;
  else if(key === 's') i+=speed;
  else if(key === 'z') j-=speed;
  else if(key === 'x') j+=speed;
  else if(key === 'v') n-=speed;
  else if(key === 'b') n+=speed;
}
*/
function mousePressed() {
  if(r==115 && g==162 && b==219) {  
    r=201;
    g=120;
    b=99;
    k+=80;
    l+=80;
  }
  else if(r==201 && g==120 && b==99) {
    r=163;
    g=142;
    b=203;
    k-=80;
    l-=80;
  }
  else if(r==163 && g==142 && b==203) {
    r=211;
    g=192;
    b=119;
    k+=80;
    l+=80;
  }
  else if(r==211 && g==192 && b==119) {
    r=142;
    g=196;
    b=149;
    k-=80;
    l-=80;
  }
  else if(r==142 && g==196 && b==149) {
    r=32;
    g=39;
    b=165;
    k+=80;
    l+=80;
  }
  else if(r==32 && g==39 && b==165) {
    r=115;
    g=162;
    b=219;
    k-=80;
    l-=80;
  }
}