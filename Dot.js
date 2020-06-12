let bacs =[]                  // Bacteria Array Buffer


class Point {
  constructor(x,y) {
    this.x = x 
    this.y = y 
  }
  
  update(){
    let i
    i = Math.round(random(0,points)); 
   this.x = bacs[i].x+random(-1,1);
   this.y = bacs[i].y+random(-1,1);

  }
  
  render() {
 
    leftCanvas.stroke("purple");
    leftCanvas.strokeWeight(10);
    leftCanvas.point(this.x, this.y);

  }
}

function createPoint(){
let yx = 200
let xy = 200  
      for (let i=1; i < popLimit; i++){
      bacs[i] = new Point(yx,xy);
      }
}

function createPoints(){

  let m = points
  
     
  for (let i=clickCount; i < m; i++){
     bacs[i].update();
  }
  for (let i=0; i < m; i++){
     bacs[i].render();

   }           
}


 


 