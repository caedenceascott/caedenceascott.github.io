//all my custom functions

//array of collision boxes
let nope = []
let theNope
let frogFriend
let textProgress = 0



//////function to check all collisions//////
function collisions(x, y){
  // if all stones have been dropped get rid of theNope so mr. frog can cross the river
  if (dropped < 10){
    theNope = new Nope(200, 230, 110, 70)
  } else {
    theNope = new Nope(0, 0, 0, 0)
  }


  //init collisions
  let collisions = false
  
  //check all existing collision boxes
  for (let i = 0; i < nope.length; i++) {
    if(nope[i].inside(x, y) || (room === 'a' &&theNope.inside(x, y))){
      //it do be colliding
      collisions = true
    }
  }
  
  return collisions
}



//////function to draw all backgrounds and their collision boxes//////
//ahhhhhhh theres so manyyyyyyyyy why do i do this to myself
//aka a giant wall of nopes
function drawBackgroundCollisions(){
  //each letter is a different room
  //draw background image
  //check where we are, clear previous collisions, draw new collisions
  
  switch (room){
    case 'a':
      image(a, 400, 300)

      nope = []
      nope[nope.length] = new Nope(135, 0, 150, 230)
      nope[nope.length] = new Nope(170, 300, 150, 300)
      nope[nope.length] = new Nope(150, 500, 50, 100)
      nope[nope.length] = new Nope(300, 370, 40, 150)
      nope[nope.length] = new Nope(300, 540, 70, 60)
      nope[nope.length] = new Nope(490, 515, 310, 85)
      nope[nope.length] = new Nope(700, 410, 100, 190)
      nope[nope.length] = new Nope(750, 300, 50, 100)
      nope[nope.length] = new Nope(570, 320, 50, 30)
      nope[nope.length] = new Nope(365, 305, 40, 40)
      nope[nope.length] = new Nope(430, 0, 260, 30)
      nope[nope.length] = new Nope(520, 0, 45, 65)
      nope[nope.length] = new Nope(740, 130, 60, 30)
      nope[nope.length] = new Nope(760, 160, 40, 40)
      nope[nope.length] = new Nope(695, 235, 30, 25)

      //frog friend 
      image(frogFriend, 50, 250)
      //speech bubble
      fill(255, 150)
      stroke(0)
      strokeWeight(2)
      rect(69, 207, 8, 8)
      rect(62, 217, 3, 3)
      rect(80, 130, 125, 75)

      //dialogue
      textSize(12)
      textAlign(LEFT)
      fill(0)
      noStroke()
      switch (textProgress){
        case 0:
          text("Hey friend, I've missed you!", 83, 132, 127)
          text('[SPACE]', 152, 200)
          break;
        case 1:
          text('Come over here and say hi.', 83, 132, 127)
          text('[SPACE]', 152, 200)
          break;
        case 2:
          text('Hmmm, there seems to be a river in the way.', 83, 132, 127)
          text('[SPACE]', 152, 200)
          break;
        case 3:
          text('Maybe you can find some stones to create a pathway?', 83, 132, 127)
          break;
        case 4:
          text('You did it!!!', 83, 132, 127)
          break;
      }

      break;

    case 'b':
      image(b, 400, 300)

      nope = []
      nope[nope.length] = new Nope(140, 0, 150, 210)
      nope[nope.length] = new Nope(140, 210, 120, 100)
      nope[nope.length] = new Nope(335, 30, 35, 35)
      nope[nope.length] = new Nope(323, 105, 20, 20)
      nope[nope.length] = new Nope(140, 310, 140, 50)
      nope[nope.length] = new Nope(140, 360, 160, 100)
      nope[nope.length] = new Nope(140, 460, 200, 140)
      nope[nope.length] = new Nope(340, 530, 280, 70)
      nope[nope.length] = new Nope(530, 0, 270, 65)
      nope[nope.length] = new Nope(590, 0, 210, 100)
      nope[nope.length] = new Nope(670, 0, 35, 130)
      nope[nope.length] = new Nope(745, 0, 55, 275)
      nope[nope.length] = new Nope(770, 275, 30, 325)
      nope[nope.length] = new Nope(740, 410, 60, 70)
      nope[nope.length] = new Nope(740, 540, 60, 60)
      nope[nope.length] = new Nope(490, 490, 130, 110)
      nope[nope.length] = new Nope(510, 440, 130, 100)

      break;

    case 'c':
      image(c, 400, 300)

      nope = []
      nope[nope.length] = new Nope(140, 0, 100, 100)
      nope[nope.length] = new Nope(140, 100, 80, 160)
      nope[nope.length] = new Nope(140, 260, 100, 100)
      nope[nope.length] = new Nope(140, 360, 130, 50)
      nope[nope.length] = new Nope(140, 410, 150, 190)
      nope[nope.length] = new Nope(140, 480, 170, 70)
      nope[nope.length] = new Nope(685, 0, 115, 600)
      nope[nope.length] = new Nope(250, 0, 270, 40)
      nope[nope.length] = new Nope(365, 0, 95, 60)
      nope[nope.length] = new Nope(455, 370, 40, 30)
      nope[nope.length] = new Nope(500, 150, 300, 90)
      nope[nope.length] = new Nope(570, 130, 80, 150)
      nope[nope.length] = new Nope(620, 70, 80, 300)

      break;

    case 'd':
      image(d, 400, 300)

      nope = []
      nope[nope.length] = new Nope(710, 0, 90, 600)
      nope[nope.length] = new Nope(0, 0, 80, 600)
      nope[nope.length] = new Nope(0, 510, 260, 90)
      nope[nope.length] = new Nope(0, 0, 460, 165)
      nope[nope.length] = new Nope(0, 0, 120, 230)
      nope[nope.length] = new Nope(460, 80, 120, 80)
      nope[nope.length] = new Nope(520, 90, 120, 90)
      nope[nope.length] = new Nope(590, 110, 120, 90)
      nope[nope.length] = new Nope(670, 0, 40, 100)
      nope[nope.length] = new Nope(600, 260, 110, 130)
      nope[nope.length] = new Nope(570, 240, 40, 60)
      nope[nope.length] = new Nope(660, 200, 50, 270)
      nope[nope.length] = new Nope(0, 350, 110, 250)
      nope[nope.length] = new Nope(220, 480, 100, 120)
      nope[nope.length] = new Nope(320, 390, 100, 50)
      nope[nope.length] = new Nope(320, 520, 180, 80)
      nope[nope.length] = new Nope(530, 420, 180, 50)
      nope[nope.length] = new Nope(600, 570, 110, 30)

      break;

    case 'e':
      image(e, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 800, 95)
      nope[nope.length] = new Nope(0, 0, 95, 600)
      nope[nope.length] = new Nope(0, 510, 800, 90)
      nope[nope.length] = new Nope(705, 0, 95, 600)
      nope[nope.length] = new Nope(100, 450, 50, 60)
      nope[nope.length] = new Nope(0, 0, 120, 300)
      nope[nope.length] = new Nope(250, 0, 30, 130)
      nope[nope.length] = new Nope(280, 155, 30, 30)
      nope[nope.length] = new Nope(330, 0, 140, 200)
      nope[nope.length] = new Nope(600, 0, 105, 150)
      nope[nope.length] = new Nope(225, 450, 170, 100)
      nope[nope.length] = new Nope(285, 300, 140, 110)
      nope[nope.length] = new Nope(275, 400, 110, 50)
      nope[nope.length] = new Nope(425, 285, 40, 40)
      nope[nope.length] = new Nope(670, 270, 50, 300)
      nope[nope.length] = new Nope(420, 420, 300, 100)
      nope[nope.length] = new Nope(595, 255, 30, 30)

      break;

    case 'f':
      image(f, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 190, 600)
      nope[nope.length] = new Nope(0, 390, 385, 210)
      nope[nope.length] = new Nope(390, 430, 410, 170)
      nope[nope.length] = new Nope(480, 400, 160, 40)
      nope[nope.length] = new Nope(180, 0, 80, 285)
      nope[nope.length] = new Nope(200, 0, 600, 30)
      nope[nope.length] = new Nope(500, 0, 300, 80)
      nope[nope.length] = new Nope(750, 0, 50, 180)
      nope[nope.length] = new Nope(730, 280, 70, 200)

      break;

    case 'g':
      image(g, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 800, 100)
      nope[nope.length] = new Nope(0, 500, 800, 100)
      nope[nope.length] = new Nope(480, 350, 320, 250)
      nope[nope.length] = new Nope(0, 420, 200, 100)
      nope[nope.length] = new Nope(200, 450, 120, 50)
      nope[nope.length] = new Nope(405, 440, 30, 30)
      nope[nope.length] = new Nope(0, 230, 50, 200)
      nope[nope.length] = new Nope(0, 300, 110, 200)
      nope[nope.length] = new Nope(450, 310, 70, 140)
      nope[nope.length] = new Nope(0, 100, 490, 30)
      nope[nope.length] = new Nope(80, 100, 220, 60)
      nope[nope.length] = new Nope(760, 0, 40, 500)
      nope[nope.length] = new Nope(570, 100, 230, 100)
      nope[nope.length] = new Nope(520, 300, 150, 100)

      break;

    case 'h':
      image(h, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 100, 600)
      nope[nope.length] = new Nope(580, 0, 220, 600)
      nope[nope.length] = new Nope(0, 0, 340, 360)
      nope[nope.length] = new Nope(500, 0, 200, 60)
      nope[nope.length] = new Nope(0, 400, 140, 100)
      nope[nope.length] = new Nope(0, 350, 230, 40)
      nope[nope.length] = new Nope(0, 350, 180, 90)
      nope[nope.length] = new Nope(210, 520, 590, 80)
      nope[nope.length] = new Nope(300, 440, 400, 100)
      nope[nope.length] = new Nope(250, 480, 50, 50)
      nope[nope.length] = new Nope(400, 400, 300, 50)
      nope[nope.length] = new Nope(530, 145, 50, 180)
      nope[nope.length] = new Nope(475, 80, 40, 40)

      break;

    case 'i':
      image(i, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 350, 280)
      nope[nope.length] = new Nope(350, 0, 60, 250)
      nope[nope.length] = new Nope(400, 390, 400, 210)
      nope[nope.length] = new Nope(400, 0, 400, 200)
      nope[nope.length] = new Nope(540, 0, 200, 230)
      nope[nope.length] = new Nope(320, 510, 200, 90)
      nope[nope.length] = new Nope(0, 200, 200, 120)
      nope[nope.length] = new Nope(0, 350, 200, 60)
      nope[nope.length] = new Nope(0, 520, 350, 80)
      nope[nope.length] = new Nope(180, 380, 40, 40)

      break;

    case 'j':
      image(j, 400, 300)
      nope = []
      nope[nope.length] = new Nope(0, 0, 320, 430)
      nope[nope.length] = new Nope(0, 150, 380, 200)
      nope[nope.length] = new Nope(200, 200, 160, 200)
      nope[nope.length] = new Nope(0, 0, 800, 30)
      nope[nope.length] = new Nope(780, 0, 20, 600)
      nope[nope.length] = new Nope(390, 135, 70, 60)
      nope[nope.length] = new Nope(0, 530, 320, 70)
      nope[nope.length] = new Nope(620, 120, 150, 70)
      nope[nope.length] = new Nope(650, 180, 150, 60)
      nope[nope.length] = new Nope(690, 240, 100, 40)
      nope[nope.length] = new Nope(735, 200, 65, 170)
      nope[nope.length] = new Nope(760, 400, 40, 200)
      nope[nope.length] = new Nope(650, 560, 150, 40)

      break;

    case 'k':
      image(k, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 650, 60)
      nope[nope.length] = new Nope(0, 0, 50, 600)
      nope[nope.length] = new Nope(0, 400, 80, 200)
      nope[nope.length] = new Nope(150, 360, 30, 30)
      nope[nope.length] = new Nope(195, 310, 30, 30)
      nope[nope.length] = new Nope(0, 530, 800, 70)
      nope[nope.length] = new Nope(400, 480, 400, 120)
      nope[nope.length] = new Nope(320, 450, 80, 150)
      nope[nope.length] = new Nope(680, 400, 120, 200)
      nope[nope.length] = new Nope(730, 290, 70, 200)
      nope[nope.length] = new Nope(300, 230, 320, 30)
      nope[nope.length] = new Nope(400, 260, 200, 40)
      nope[nope.length] = new Nope(400, 0, 240, 230)
      nope[nope.length] = new Nope(600, 140, 80, 70)

      break;

    case 'l':
      image(l, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 800, 100)
      nope[nope.length] = new Nope(0, 0, 20, 150)
      nope[nope.length] = new Nope(340, 0, 250, 280)
      nope[nope.length] = new Nope(0, 400, 110, 200)
      nope[nope.length] = new Nope(0, 500, 800, 100)
      nope[nope.length] = new Nope(340, 340, 200, 200)
      nope[nope.length] = new Nope(210, 460, 300, 100)
      nope[nope.length] = new Nope(400, 200, 200, 200)
      nope[nope.length] = new Nope(310, 400, 30, 60)

      break;

    case 'm':
      image(m, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 80, 430)
      nope[nope.length] = new Nope(0, 0, 120, 50)
      nope[nope.length] = new Nope(0, 0, 40, 600)
      nope[nope.length] = new Nope(280, 0, 300, 30)
      nope[nope.length] = new Nope(480, 0, 200, 600)
      nope[nope.length] = new Nope(180, 540, 120, 60)
      nope[nope.length] = new Nope(400, 160, 200, 400)
      nope[nope.length] = new Nope(430, 130, 50, 50)
      nope[nope.length] = new Nope(360, 190, 150, 150)
      nope[nope.length] = new Nope(320, 240, 100, 50)
      nope[nope.length] = new Nope(330, 520, 100, 80)

      break;

    case 'n':
      image(n, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 450, 50)
      nope[nope.length] = new Nope(210, 0, 35, 85)
      nope[nope.length] = new Nope(680, 0, 120, 600)
      nope[nope.length] = new Nope(0, 215, 300, 215)
      nope[nope.length] = new Nope(0, 400, 40, 200)
      nope[nope.length] = new Nope(450, 200, 300, 400)
      nope[nope.length] = new Nope(630, 100, 100, 100)
      nope[nope.length] = new Nope(300, 540, 200, 60)
      nope[nope.length] = new Nope(0, 550, 100, 50)

      break;

    case 'o':
      image(o, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 160, 600)
      nope[nope.length] = new Nope(640, 0, 160, 600)
      nope[nope.length] = new Nope(0, 0, 230, 130)
      nope[nope.length] = new Nope(400, 0, 250, 80)
      nope[nope.length] = new Nope(465, 90, 30, 30)
      nope[nope.length] = new Nope(0, 310, 800, 110)
      nope[nope.length] = new Nope(0, 470, 200, 130)
      nope[nope.length] = new Nope(430, 400, 250, 50)
      nope[nope.length] = new Nope(0, 540, 330, 60)
      nope[nope.length] = new Nope(530, 510, 100, 90)

      break;

    case 'p':
      image(p, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 260, 600)
      nope[nope.length] = new Nope(0, 0, 350, 120)
      nope[nope.length] = new Nope(0, 0, 800, 60)
      nope[nope.length] = new Nope(520, 0, 280, 130)
      nope[nope.length] = new Nope(620, 0, 180, 180)
      nope[nope.length] = new Nope(0, 500, 800, 100)
      nope[nope.length] = new Nope(750, 430, 50, 170)

      break;

    case 'q':
      image(q, 400, 300)

      nope = []
      nope[nope.length] = new Nope(0, 0, 800, 140)
      nope[nope.length] = new Nope(0, 400, 800, 200)
      nope[nope.length] = new Nope(0, 0, 80, 220)
      nope[nope.length] = new Nope(240, 0, 250, 190)
      nope[nope.length] = new Nope(750, 0, 50, 600)
      nope[nope.length] = new Nope(0, 340, 30, 100)
  }
}



//////function to draw each rooms negative space cover//////
function drawNegativeSpace(){
  switch (room){
    case 'c':
      image(cCover, 400, 300)
      break;
    case 'd':
      image(dCover, 400, 300)
      break;
    case 'e':
      image(eCover, 400, 300)
      break;
    case 'f':
      image(fCover, 400, 300)
      break;
    case 'g':
      image(gCover, 400, 300)
      break;
    case 'h':
      image(hCover, 400, 300)
      break;
    case 'i':
      image(iCover, 400, 300)
      break;
    case 'j':
      image(jCover, 400, 300)
      break;
    case 'k':
      image(kCover, 400, 300)
      break;
    case 'l':
      image(lCover, 400, 300)
      break;
    case 'o':
      image(oCover, 400, 300)
      break;
    case 'q':
      image(qCover, 400, 300)
      break;
  }
}


//////draw all them portals/////
function drawPortals(){
  //check what room youre in
  //draw corresponding portals and run changeRoom()
  
  switch (room){
    case 'a':
      for (let i = 0; i < aPortals.length; i++){
        aPortals[i].display()
        aPortals[i].changeRoom()
      }
      break;

    case 'b':
      for (let i = 0; i < bPortals.length; i++){
        bPortals[i].display()
        bPortals[i].changeRoom()
      }
      break;

    case 'c':
      for (let i = 0; i < cPortals.length; i++){
        cPortals[i].display()
        cPortals[i].changeRoom()
      }
      break;

    case 'd':
      for (let i = 0; i < dPortals.length; i++){
        dPortals[i].display()
        dPortals[i].changeRoom()
      }
      break;

    case 'e':
      for (let i = 0; i < ePortals.length; i++){
        ePortals[i].display()
        ePortals[i].changeRoom()
      }
      break;

    case 'f':
      for (let i = 0; i < fPortals.length; i++){
        fPortals[i].display()
        fPortals[i].changeRoom()
      }
      break;

    case 'g':
      for (let i = 0; i < gPortals.length; i++){
        gPortals[i].display()
        gPortals[i].changeRoom()
      }
      break;

    case 'h':
      for (let i = 0; i < hPortals.length; i++){
        hPortals[i].display()
        hPortals[i].changeRoom()
      }
      break;

    case 'i':
      for (let i = 0; i < iPortals.length; i++){
        iPortals[i].display()
        iPortals[i].changeRoom()
      }
      break;

    case 'j':
      for (let i = 0; i < jPortals.length; i++){
        jPortals[i].display()
        jPortals[i].changeRoom()
      }
      break;

    case 'k':
      for (let i = 0; i < kPortals.length; i++){
        kPortals[i].display()
        kPortals[i].changeRoom()
      }
      break;

    case 'l':
      for (let i = 0; i < lPortals.length; i++){
        lPortals[i].display()
        lPortals[i].changeRoom()
      }
      break;

    case 'm':
      for (let i = 0; i < mPortals.length; i++){
        mPortals[i].display()
        mPortals[i].changeRoom()
      }
      break;

    case 'n':
      for (let i = 0; i < nPortals.length; i++){
        nPortals[i].display()
        nPortals[i].changeRoom()
      }
      break;

    case 'o':
      for (let i = 0; i < oPortals.length; i++){
        oPortals[i].display()
        oPortals[i].changeRoom()
      }
      break;

    case 'p':
      for (let i = 0; i < pPortals.length; i++){
        pPortals[i].display()
        pPortals[i].changeRoom()
      }
      break;

    case 'q':
      for (let i = 0; i < qPortals.length; i++){
        qPortals[i].display()
        qPortals[i].changeRoom()
      }
      break;
  }
}


//draw them stones
function drawStones(){
  switch (room){
    case 'a':
      stones[0].display()
      stones[0].pickup()
      break;

    case 'd':
      stones[1].display()
      stones[1].pickup()
      break;

    case 'f':
      stones[2].display()
      stones[2].pickup()
      break;

    case 'g':
      stones[3].display()
      stones[3].pickup()
      break;

    case 'j':
      stones[4].display()
      stones[4].pickup()
      break;

    case 'l':
      stones[5].display()
      stones[5].pickup()
      break;

    case 'm':
      stones[6].display()
      stones[6].pickup()
      break;

    case 'o':
      stones[7].display()
      stones[7].pickup()
      break;

    case 'p':
      stones[8].display()
      stones[8].pickup()
      break;

    case 'q':
      stones[9].display()
      stones[9].pickup()
      break;
  }
}