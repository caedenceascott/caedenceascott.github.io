//stones class

class Stone {
    constructor(x, y){
      //location vars
      this.x = x
      this.y = y

      //array
      this.stones = []
      this.stones[0] = loadImage('media/stoneOne.png')
      this.stones[1] = loadImage('media/stoneTwo.png')
      this.stones[2] = loadImage('media/stoneThree.png')
      this.stoneGlow = loadImage('media/stoneGlow.gif')

      //randomize which stone is displayed
      this.randomStone = round(random(0, 2))
    }
    
    display(){
      //reference for blend off screen
      image(this.stoneGlow, -1000, -1000)
      blend(this.stoneGlow, 0, 0, 100, 100, this.x - 50, this.y - 50, 100, 100, ADD)
      image(this.stones[this.randomStone], this.x, this.y)
    }

    pickup(){
      let pickup = false
      if(dist(this.x, this.y, frog.x, frog.y) < 60){
        noStroke()
        fill(0, 150)
        rect(270, 525, 260, 40, 5)
        fill(255)
        textSize(20)
        textAlign(CENTER)
        text('press [E] to pickup', 400, 550)
        pickup = true
      }
      return pickup
    }
  }