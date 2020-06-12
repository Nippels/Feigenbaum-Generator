//2020 by Daniel Pollinger. using Stock p5 by Daniel Shiffman, MIT 
//Population Caos Tool. Out-commented functions are currently not working. 


let points = 0;                //population Size Buffer
let gr = 1;                      //growth Rate Buffer
let fr = 60;                    //speed(iterations = frames)
let popLimit = 4096;            //to avoid crash dont set higher than 10.000 
let reset = 1;                  //popcount after reset
let th = "";                   //environment limit

   

function setup() {  
  let cnv = createCanvas(800, 400);
   leftCanvas = createGraphics(400,400); 
   rightCanvas = createGraphics(400,400);
  cnv.mousePressed(touchaPoint);
  giveFood()
  inputs();
  createPoint();
 

 
  noLoop();
}

function draw() {
  frameRate(fr);
  numLimit();
  expGrowth();
  iBandwidth();
  logis();
  popSize();
  moveGraph(); 
  drawLeftCanvas();
  image(leftCanvas, 0, 0);
  popSize();
  drawRightCanvas();
  image(rightCanvas, 400, 0);
  text("growth Rate " + gr+"", 0,380);
  fader();
  grSlider.value(gr*slMin);

}
 
function drawRightCanvas() {
  rightCanvas.background(255, 100, 255);
  createGraph()
 
}
  
function drawLeftCanvas() {
  leftCanvas.background("Black")
  createPoints()
   
}


