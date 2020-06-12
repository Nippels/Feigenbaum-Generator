
function popSize(){                      //Displays current population
  textSize(32);
  fill("white");
  stroke("black");
  strokeWeight(10);
  text("population Size " + points+"",0,50);
}

// limits population grow to infinity

function numLimit(){                       
  if (points > popLimit){
    points = reset;
  }  
}

// prevents breakdown for wrong inputs

function iBandwidth(){
  this.b = inp.value()
  if (this.b < 1){
    this.b = 1;
  }else if(this.b > 4){   
    this.b = 4;
  }
}

// multiplikator

function expGrowth(){

 points = points*gr
} 

// the logistic function. 

function logis(){
   
  p = th - points;
  j = points * (p/th);
  points = Math.ceil(j);

}
// comming up function to Fade logarythmicly(sqrt function)
//function getLog(y) {
//  return (y * Math.pow(y,1/2));
//}