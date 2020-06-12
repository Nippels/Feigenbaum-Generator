let Start = false;
let offValue = true;
let tView = false;
let Run = false;
let slMin = 10000;
let slMax = 40000;
let clickCount=0;

function inputs(){
  grSlider = createSlider(slMin, slMax);
  grSlider.position(width-width, 400);
  inp = createInput("" );            // interface for single value
  inp.position(width/4+30,400)
  sub = createButton('console');        // interface for single value
  sub.position(inp.width,400);
  sub.mousePressed(consoleBar);
  button = createButton('clear');       //push a dot if population collapsed
  button.position(width/2, 400);
  button.mousePressed(clearPoints);
  sButton = createButton('Run');      
  sButton.position(0,0);   
  sButton.mousePressed(toggleRun);
  pButton = createButton('Fade');      // moves fader evenly after play pressed
  pButton.position(width-width/4, 400);   
  pButton.mousePressed(faderMove);
  vButton = createButton('View static/fluent');      
  vButton.position(width-width/6, 400);   
  vButton.mousePressed(toggleView);
}

function clearPoints() {
    points = 0;
}

function touchaPoint() { 
  
   clickCount += 1;
   points += 1;
   bacs.splice(clickCount-1,1,new Point(mouseX,mouseY))
   console.log(points)
}

function toggleRun(){
    Run = !Run;
    console.log("is running: "+Run);
  if (Run === false){
    noLoop();
  }else if(Run === true){
    loop();
  }  
}

function faderMove() {
  Start = !Start;
}

function toggleView(){
    tView = !tView;
}

function consoleBar(){
      console.log(eval(inp.value())); 
      alert(eval(inp.value())+"",300,380); 
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fader() {
 
  if (Start===false){
   gr = (grSlider.value()/slMin)

  }else if(Start===true && offValue===true){
    offValue = !offValue
      for (let i = grSlider.value(); i < slMax; i++) {        
        gr = i/slMin           
        await sleep(1000/(fr));  

      if (Start===false && offValue===false){
        offValue = !offValue
        break;     
      }
      if (i === slMax-1){
        offValue = !offValue
        break;     
      }
   }
  }
}





 



