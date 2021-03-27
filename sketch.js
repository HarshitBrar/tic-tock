var hr,mn,sc;
var small,medium,big;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
 
}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();
  //text(hr+":"+ mn+":" + sc,400,200);
  //arc(400,200,100,100,0,180)
  translate(400,200);
 
  rotate(-90);
  noFill();
  stroke("red");
  strokeWeight(7);
  small = map(sc,0,60,0,360)
  arc(0,0,250,250,0,small);
  stroke('rgb(131,245,44)');
  medium = map(mn,0,60,0,360);
  arc(0,0,230,230,0,medium);
  stroke("blue")
  big = map(hr%12,0,12,0,360);
  arc(0,0,210,210,0,big);
  push()
  rotate(small);
  stroke("red");
  line(0,0,95,0);
  pop()
  push()
  rotate(medium);
  stroke('rgb(131,245,44)');
  line(0,0,75,0);
  pop() 
  push()
  rotate(big)
  stroke("blue")
  line(0,0,50,0);
  pop()
}