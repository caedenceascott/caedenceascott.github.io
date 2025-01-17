/*c.scott p2 
move with WASD
im sure there are way better ways to do all of this but this is what i know so ¯\_(ツ)_/¯
im so sorry for making you grade 1468 lines of code
*/

//miscellaneous vars
let frog 
let fireflies = []
let rain
let stones = []
let room = 'a'
let collected = 0
let stoneCounter
let dropped = 0
let dropStones
let stonePath

//all them rooms
let a
let b
let c
let d
let e
let f
let g
let h
let i
let j
let k
let l
let m
let n
let o
let p
let q

// cover the nonsense/negative space
let cCover
let dCover
let eCover
let fCover
let gCover
let hCover
let iCover
let jCover
let kCover
let lCover
let oCover
let qCover

//all them portals
let aPortals = []
let bPortals = []
let cPortals = []
let dPortals = []
let ePortals = []
let fPortals = []
let gPortals = []
let hPortals = []
let iPortals = []
let jPortals = []
let kPortals = []
let lPortals = []
let mPortals = []
let nPortals = []
let oPortals = []
let pPortals = []
let qPortals = []



function preload(){
  // the frog
  frog = new FrogSprite(500, 375)

  //misc
  frogFriend = loadImage('media/frogFriend.gif')
  stonePath = loadImage('media/riverStones.png')
  stoneCounter = loadImage('media/stoneTwo.png')
  rain = loadImage('media/rain.gif')
  
  //create 15-25 fireflies
  for(let i = 0; i < random(15, 25); i ++){
    fireflies.push(new Firefly())
  }
  
  //room images
  a = loadImage('media/a.png')
  b = loadImage('media/b.png')
  c = loadImage('media/c.png')
  d = loadImage('media/d.png')
  e = loadImage('media/e.png')
  f = loadImage('media/f.png')
  g = loadImage('media/g.png')
  h = loadImage('media/h.png')
  i = loadImage('media/i.png')
  j = loadImage('media/j.png')
  k = loadImage('media/k.png')
  l = loadImage('media/l.png')
  m = loadImage('media/m.png')
  n = loadImage('media/n.png')
  o = loadImage('media/o.png')
  p = loadImage('media/p.png')
  q = loadImage('media/q.png')
  
  //negative space covers
  cCover = loadImage('media/cBlock.png')
  dCover = loadImage('media/dBlock.png')
  eCover = loadImage('media/eBlock.png')
  fCover = loadImage('media/fBlock.png')
  gCover = loadImage('media/gBlock.png')
  hCover = loadImage('media/hBlock.png')
  iCover = loadImage('media/iBlock.png')
  jCover = loadImage('media/jBlock.png')
  kCover = loadImage('media/kBlock.png')
  lCover = loadImage('media/lBlock.png')
  oCover = loadImage('media/oBlock.png')
  qCover = loadImage('media/qBlock.png')
  
  //portals
  // A
  aPortals[aPortals.length] = new Portal(350, 0)
  aPortals[aPortals.length] = new Portal(430, 600)
  aPortals[aPortals.length] = new Portal(800, 75)
  // B
  bPortals[bPortals.length] = new Portal(440, 0)
  bPortals[bPortals.length] = new Portal(690, 600)
  // C
  cPortals[cPortals.length] = new Portal(390, 600)
  cPortals[cPortals.length] = new Portal(685, 500)
  cPortals[cPortals.length] = new Portal(600, 0)
  // D
  dPortals[dPortals.length] = new Portal(170, 510)
  dPortals[dPortals.length] = new Portal(530, 0)
  dPortals[dPortals.length] = new Portal(710, 520)
  dPortals[dPortals.length] = new Portal(550, 600)
  // E
  ePortals[ePortals.length] = new Portal(520, 100)
  ePortals[ePortals.length] = new Portal(700, 200)
  ePortals[ePortals.length] = new Portal(100, 350)
  // F
  fPortals[fPortals.length] = new Portal(300, 380)
  fPortals[fPortals.length] = new Portal(800, 210)
  // G
  gPortals[gPortals.length] = new Portal(0, 170)
  gPortals[gPortals.length] = new Portal(710, 340)
  // H
  hPortals[hPortals.length] = new Portal(400, 0)
  hPortals[hPortals.length] = new Portal(100, 550)
  // I
  iPortals[iPortals.length] = new Portal(0, 470)
  iPortals[iPortals.length] = new Portal(800, 300)
  // J
  jPortals[jPortals.length] = new Portal(540, 600)
  jPortals[jPortals.length] = new Portal(0, 460)
  jPortals[jPortals.length] = new Portal(340, 85)
  // K
  kPortals[kPortals.length] = new Portal(165, 60)
  kPortals[kPortals.length] = new Portal(800, 80)
  kPortals[kPortals.length] = new Portal(580, 475)
  // L
  lPortals[lPortals.length] = new Portal(0, 260)
  // M
  mPortals[mPortals.length] = new Portal(200, 0)
  mPortals[mPortals.length] = new Portal(100, 600)
  // N
  nPortals[nPortals.length] = new Portal(580, 0)
  nPortals[nPortals.length] = new Portal(0, 140)
  nPortals[nPortals.length] = new Portal(210, 600)
  // O
  oPortals[oPortals.length] = new Portal(330, 0)
  oPortals[oPortals.length] = new Portal(630, 180)
  oPortals[oPortals.length] = new Portal(440, 600)
  // P
  pPortals[pPortals.length] = new Portal(800, 300)
  // Q
  qPortals[qPortals.length] = new Portal(0, 280)
  qPortals[qPortals.length] = new Portal(170, 140)
  qPortals[qPortals.length] = new Portal(600, 140)
  
  
  //stones aka the collectable items
  stones[0] = new Stone(600, 180) // A
  stones[1] = new Stone(620, 30) // D
  stones[2] = new Stone(350, 80) // F
  stones[3] = new Stone(385, 350) // G
  stones[4] = new Stone(740, 60) // J
  stones[5] = new Stone(275, 350) // L
  stones[6] = new Stone(350, 450) // M
  stones[7] = new Stone(260, 470) // O
  stones[8] = new Stone(400, 200) // P
  stones[9] = new Stone(610, 320) // Q 
}


//setup stuff
function setup() {
  createCanvas(800, 600);
  imageMode(CENTER)
  angleMode(DEGREES)
  textAlign(CENTER)
  textFont('courier')
  textSize(20)
  frameRate(24)
  
}



function draw() {
  //background and collisions
  drawBackgroundCollisions()

  //drop the stones in the river
  //collision box for dropping
  dropStones = new Nope(280, 150, 80, 200)
  //make sure youre in the right place
  if (room === 'a'){
    // if all the stones are dropped then show the path and progress frogFriend's dialogue
    if (dropped === 10){
      image(stonePath, width/2, height/2)
      textProgress = 4

    } else { //if less than 10 stones are dropped
      if (dropStones.inside(frog.x, frog.y)){ //verify location
        textAlign(CENTER)
        if (collected > 0){ //text for dropping
          noStroke()
          fill(0, 150)
          rect(270, 525, 260, 40, 5)
          fill(255)
          textSize(20)
          text('press [E] to drop', 400, 550)
        } else { //go get more stones
          noStroke()
          fill(0, 150)
          rect(260, 525, 280, 40, 5)
          fill(255)
          textSize(20)
          text('collect ' + (10 - dropped) + ' more stones', 400, 550)
        }
      }
    }
  }
  
  //frog
  frog.display()
  frog.update()

  //draw fireflies
  for(let i = 0; i < fireflies.length; i ++){
    fireflies[i].glow()
    fireflies[i].fly()
  }
  
  //portals
  drawPortals()
  
  //rain
  tint(255, 127) // 50% opacity
  image(rain, 400, 300)
  
  //cover the nonsense
  tint(255, 255) // back to full opacity
  drawNegativeSpace()

  //draw the rocks
  drawStones()

  //stone counter
  fill(0, 150)
  rect(5, 555, 40 * collected, 40, 5) // box for showing collected stones
  for (let i = 0; i < collected; i ++){
    image(stoneCounter, 25 + (40*i), 575, 30, 30)
  }
  

 /* /////////debugging nonsense///////////
  textSize(20)
  text(room, 20, 20)

  //show collision boxes for testing purposes
  for ( let i = 0; i < nope.length; i ++){
    nope[i].display()
    theNope.display()
  }
  
  text(round(frameRate(), 3), 30, 30)
  text(textProgress, 10, 390)
  text(dropped, 10, 10) */
}


function keyPressed(){
  //progress dialogue
  if (key === ' '){
    if (textProgress < 3){
      textProgress ++
    }
  }

  if (key === 'e'){
    //collect stones
    switch (room){
      case 'a':
        if(stones[0].pickup()){
          collected ++ // add to collected stones
          stones[0] = new NullStone() //replace spot in array with null class
        }

        if(dropStones.inside(frog.x, frog.y) && collected > 0){
          //text('dropppedddd', 400, 310)
          dropped ++
          collected --
        }
        break;
  
      case 'd':
        if(stones[1].pickup()){
          collected ++ // add to collected stones
          stones[1] = new NullStone() //replace spot in array with null class
        }
        break;
  
      case 'f':
        if(stones[2].pickup()){
          collected ++ // add to collected stones
          stones[2] = new NullStone() //replace spot in array with null class
        }
        break;
  
      case 'g':
        if(stones[3].pickup()){
          collected ++ // add to collected stones
          stones[3] = new NullStone() //replace spot in array with null class
        }
        break;
  
      case 'j':
        if(stones[4].pickup()){
          collected ++ // add to collected stones
          stones[4] = new NullStone() //replace spot in array with null class
        }
        break;
  
      case 'l':
        if(stones[5].pickup()){
          collected ++ // add to collected stones
          stones[5] = new NullStone() //replace spot in array with null class
        }
        break;
  
      case 'm':
        if(stones[6].pickup()){
          collected ++ // add to collected stones
          stones[6] = new NullStone() //replace spot in array with null class
        }
        break;
  
      case 'o':
        if(stones[7].pickup()){
          collected ++ // add to collected stones
          stones[7] = new NullStone() //replace spot in array with null class
        }
        break;
  
      case 'p':
        if(stones[8].pickup()){
          collected ++ // add to collected stones
          stones[8] = new NullStone() //replace spot in array with null class
        }
        break;
  
      case 'q':
        if(stones[9].pickup()){
          collected ++ // add to collected stones
          stones[9] = new NullStone() //replace spot in array with null class
        }
        break;
    }
  }
}