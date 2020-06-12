let graphY = [];                //graph Y axe Arraybuffer
let numPts = 20;               //graph X axe resolution


function createGraph(){
   graphY.push(points/2);       
   drawLines();
   drawEllipses();

}
 

  
function drawEllipses(){
  rightCanvas.noStroke();
   
  for(let i =0; i < graphY.length; i++){
    let x = i * (width / (numPts-1));
    let y = graphY[i];
    rightCanvas.ellipse(x/2, height+ -y, 4);
  
  }
}

 function drawLines(){
  rightCanvas.stroke(0);
 
  let px = 0;
  let py = graphY[0];
  for(let i =0; i < graphY.length; i++){
 
    let x = i * (width / (numPts-1));
    let y = graphY[i];
    rightCanvas.line(px/2,height+ -py, x/2,height+ -y);
    
    px = x;
    py = y;

  } 


}

function moveGraph(){ 
 
  if (tView === false){
  if (graphY.length*2 > numPts){              
    graphY.shift()   
  }   
  }else if(tView === true){
        numPts++
  }
              
}

  
 

