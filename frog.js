//this is a frog.

class FrogSprite {
  constructor(x, y){
    //init state face forward
    this.state = 0
    //load gifs/images into arrray
    this.sprite = []
    this.sprite[0] = loadImage('media/frontStand.png')
    this.sprite[1] = loadImage('media/leftStand.png')
    this.sprite[2] = loadImage('media/backStand.png')
    this.sprite[3] = loadImage('media/rightStand.png')
    this.sprite[4] = loadImage('media/frontWalk.gif')
    this.sprite[5] = loadImage('media/leftWalk.gif')
    this.sprite[6] = loadImage('media/backWalk.gif')
    this.sprite[7] = loadImage('media/rightWalk.gif')
    
    //move
    this.x = x
    this.y = y
    this.move = 6
  }
  
  display(){ //there he is
    image(this.sprite[this.state], this.x, this.y)
  }
  
  update(){
    //WASD controls frog
    //seperate if statements so mr. frog can move diagonally if he wants
    //keycodes cause p5 is annoying
    //also checking collisions against Nope class
    if (keyIsDown(83)){
      this.state = 4
      this.y += this.move
    } else if (collisions(this.x, this.y)){
      this.y += this.move
    } else if(this.state === 4){
      this.state = 0
    }
    
    if (keyIsDown(87)){
      this.state = 6
      this.y -= this.move
    } else if (collisions(this.x, this.y)){
      this.y -= this.move
    } else if(this.state === 6){
      this.state = 2
    }
    
    if (keyIsDown(65)){
      this.state = 5
      this.x -= this.move
    } else if (collisions(this.x, this.y)){
      this.x -= this.move
    } else if(this.state === 5){
      this.state = 1
    }
    
    if (keyIsDown(68)){
      this.state = 7
      this.x += this.move
    } else if (collisions(this.x, this.y)){
      this.x += this.move
    } else if(this.state === 7){
      this.state = 3
    }
    
    //out of bounds aka: if (off screen){no}
    if (this.x > width - 10) {
      this.x -= this.move
    } else if (this.x < 10){
      this.x += this.move
    } else if (this.y < 25){
      this.y += this.move
    }else if (this.y > height - 25){
      this.y -= this.move
    }
  }
}