//fireflies!!

class Firefly {
  constructor(){
    //load image obviously
    this.sprite = loadImage('media/firefly.gif')
    
    //random start position
    this.x = random(800)
    this.y = random(600)
    
    //various random values to vary movement
    this.sr = random(20, 50) //random (sin)
    this.cr = random(20, 50) //random (cos)
    this.ar = random(360) // random start angle
    this.rr = random(2, 5) // random radius
    
  }
  
  glow(){
    //draw refernce image off screen
    image(this.sprite, -1000, -1000)
    //use refernece image for ADD blend mode at this.x and this.y
    blend(this.sprite, 0, 0, 20, 20, round(this.x), round(this.y), 20, 20, ADD)
  }
  
  fly(){
    //move them using random sin and cos values
    this.x += sin((millis()/this.sr)+ this.ar) / this.rr
    this.y += cos((millis()/this.cr)+ this.ar) / this.rr
  }
}