// collision boxes class

class Nope {
  constructor(x, y, w, h){
    //vars
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  
  display(){
    //rect for debugging purposes
    stroke('red')
    strokeWeight(2)
    noFill()
    rect(this.x, this.y, this.w, this.h)
  }
  
  inside(x, y){
    //check bounds
    let inside = 
        x + 10 >= this.x && 
        x - 10 <= this.x + this.w &&
        y + 25 >= this.y &&
        y + 5 <= this.y + this.h
    
    return inside
  }
}