//portals to another world (the next room)

class Portal{
  //constructor nonsense
  constructor(x, y){
    this.x = x
    this.y = y
    this.sprite = loadImage('media/doorGlow.gif')
      
  }
  
  //this is what a portal looks like
  display(){
    image(this.sprite, -1000, -1000) //offscreen for blendmode reference
    blend(this.sprite, 0, 0, 150, 150, this.x - 75, this.y -75, 150, 150, ADD)
  }
  
  //wall of code to run upon collision with doorway
  //checks current room and position
  //moves you to next room and changes position accordingly
  changeRoom(){
    if (dist(this.x, this.y, frog. x, frog.y) <= 35){
      
      switch (room){
        case 'a':
          if (frog.x < 600){ // left most portals
            if(frog.y < 300){ // top portal
              room = 'c' // moving to C
              frog.x = 390
              frog. y = 550
            } else {
              room = 'b' // moving to B
              frog.x = 440
              frog.y = 50
            }
          } else {
            room = 'j' // moving to J
            frog.x = 50
            frog.y = 460
          }
          break;

        case 'b':
          if (frog.y < 300){ // top most portal
            room = 'a' // moving to A
            frog.x = 430
            frog.y = 550
          } else {
            room = 'o' // moving to O
            frog.x = 330
            frog.y = 50
          }
          break;

        case 'c':
          if (frog.y < 300){ //top portal
            room = 'd' // moving to D
            frog.x = 170
            frog.y = 460
          } else if (frog.x < 500) {
            room = 'a' // moving to A
            frog.x = 350
            frog.y = 50
          } else {
            room = 'e' // moving to E
            frog.x = 150
            frog.y = 350
          }
          break;

        case 'd':
          if (frog.y < 300){ //top portal
            room = 'f' // moving to F
            frog.x = 300
            frog.y = 330
          } else if (frog.x < 400) {
            room = 'c' // moving to C
            frog.x = 600
            frog.y = 50
          } else if (frog.x < 610){
            room = 'e' // moving to E
            frog.x = 520
            frog.y = 150
          } else {
            room = 'i' // moving to I
            frog.x = 50
            frog.y = 470
          }
          break;

        case 'e':
          if (frog.x < 400){ //left portal
            room = 'c' // moving to C
            frog.x = 635
            frog.y = 500
          } else if (frog.x < 600) {
            room = 'd' // moving to D
            frog.x = 550
            frog.y = 550
          } else {
            room = 'j' // moving to J
            frog.x = 390
            frog.y = 85
          }
          break;

        case 'f':
          if (frog.x < 600){ //left portal
            room = 'd' // moving to D
            frog.x = 530
            frog.y = 50
          } else {
            room = 'g' // moving to G
            frog.x = 50
            frog.y = 170
          }
          break;

        case 'g':
          if (frog.x < 400){ //left portal
            room = 'f' // moving to F
            frog.x = 750
            frog.y = 210
          } else {
            room = 'h' // moving to H
            frog.x = 400
            frog.y = 50
          }
          break;

        case 'h':
          if (frog.y < 300){ //top portal
            room = 'g' // moving to G
            frog.x = 710
            frog.y = 290
          } else {
            room = 'i' // moving to I
            frog.x = 750
            frog.y = 300
          }
          break;

        case 'i':
          if (frog.x < 400){ //left portal
            room = 'd' // moving to D
            frog.x = 660
            frog.y = 520
          } else {
            room = 'h' // moving to H
            frog.x = 150
            frog.y = 550
          }
          break;

        case 'j':
          if (frog.y < 200){ //top portal
            room = 'e' // moving to E
            frog.x = 650
            frog.y = 200
          } else if (frog.x < 400) {
            room = 'a' // moving to A
            frog.x = 750
            frog.y = 75
          } else {
            room = 'k' // moving to K
            frog.x = 165
            frog.y = 110
          }
          break;

        case 'k':
          if (frog.x < 400){ //left portal
            room = 'j' // moving to J
            frog.x = 540
            frog.y = 550
          } else if (frog.y < 200){
            room = 'l' // moving to L
            frog.x = 50
            frog.y = 260
          } else {
            room = 'm' //moving to M
            frog.x = 200
            frog.y = 50
          }
          break;

        case 'l':
          room = 'k' // moving to K
          frog.x = 750
          frog.y = 80
          break;

        case 'm':
          if (frog.y < 300){ //top portal
            room = 'k' // moving to K
            frog.x = 580
            frog.y = 425
          } else {
            room = 'n' // moving to N
            frog.x = 580
            frog.y = 50
          }
          break;

        case 'n':
          if (frog.x > 400){ //right portal
            room = 'm' // moving to M
            frog.x = 100
            frog.y = 550
          } else if (frog.y < 400) {
            room = 'o' // moving to O
            frog.x = 580
            frog.y = 180
          } else {
            room = 'q' // moving to Q
            frog.x = 600
            frog.y = 190
          }
          break;

        case 'o':
          if (frog.x < 400){ //left portal
            room = 'b' // moving to B
            frog.x = 690
            frog.y = 550
          } else if (frog.y < 300){
            room = 'n' // moving to N
            frog.x = 50
            frog.y = 140
          } else {
            room = 'q' // moving to Q
            frog.x = 170
            frog.y = 190
          }
          break;

        case 'p':
          room = 'q' // moving to Q
          frog.x = 50
          frog.y = 280
          break;

        case 'q':
          if (frog.x > 400){ //right portal
            room = 'n' // moving to N
            frog.x = 210
            frog.y = 550
          } else if (frog.x < 100) {
            room = 'p' // moving to P
            frog.x = 750
            frog.y = 300
          } else {
            room = 'o' // moving to O
            frog.x = 440
            frog.y = 550
          }
          break;
      }
    }
  }
}