var playing = false; 
var gameState;
var canvas;
var frameCount; 
var currentGameState;
var graphicsLogo;
var projMapLogo;
var reelLogo;
var programLogo;
var mobileLogo; 
var instaLogo; 
var emailLogo; 
var x = 0;
var movers = [];
var graphicsDistance;
var reelDistance;
var projectionDistance;
var programDistance;
var degrees = 0;
var smallArrow;
var myFont;
var pmapLink;
var graphicsLink;
var programLink;
var reelLink;
var mailPlaying = 0; 
var numFuiBackFrames = 97;  
var currentFuiBackFrame = 0;
var fuiBackLoop = [numFuiBackFrames];
var numRingFrames = 73;
var currentRingFrame = 0;

var ringLoop = [numRingFrames];
var numIntroFrames = 91;
var currentIntroFrame = 0;
var introAnimation = [numIntroFrames];

var numPmapFrames = 49;
var currentPmapFrame = 0;
var pmapAnimation = [numPmapFrames];

var numProgFrames = 49;
var currentProgFrame = 0;
var progAnimation = [numProgFrames];

var numReelFrames = 49;
var currentReelFrame = 0;
var reelAnimation = [numReelFrames];

var numGraphicFrames = 61;
var currentGraphicFrame = 0;
var graphicAnimation = [numGraphicFrames];

var numPhoneFrames = 27;
var currentPhoneFrame = 0;
var phoneAnimation = [numPhoneFrames];

var numMailFrames = 27;
var currentMailFrame = 0;
var mailAnimation = [numMailFrames];

var numInstaFrames = 27;
var currentInstaFrame = 0;
var instaAnimation = [numInstaFrames];



function preload(){

  graphicsLogo = loadImage("graphicsLogo.png");
  projMapLogo = loadImage("projMapLogo.png");
  reelLogo = loadImage("reelLogo.png");
  programLogo = loadImage("programLogo.png");
  glow = loadImage("glow.png");
  smallArrow = loadImage("arrowsmall.png");
  myFont = loadFont('adventpro-bold.ttf');

   for (var i=0; i<97; i++) {
    fuiBackLoop[i] = loadImage("fuiStillR ("+i+").png"); 
  }

  for (var i=0; i<73; i++) {
    ringLoop[i] = loadImage("ringCrop ("+i+").png"); 
  }

  for (var i=0; i<91; i++) {
    introAnimation[i] = loadImage("fuiIntro ("+i+").png"); 
  }

  for (var i=0; i<49; i++) {
    pmapAnimation[i] = loadImage("pmap ("+i+").png"); 
  }

  for (var i=0; i<49; i++) {
    reelAnimation[i] = loadImage("reelAnim ("+i+").png"); 
  }

  for (var i=0; i<49; i++) {
    progAnimation[i] = loadImage("softwareAnim ("+i+").png"); 
  }

  for (var i=0; i<61; i++) {
    graphicAnimation[i] = loadImage("graphicsAnim ("+i+").png"); 
  }

  for (var i=0; i<27; i++) {
    phoneAnimation[i] = loadImage("phoneAnim ("+i+").png"); 
  }

  for (var i=0; i<27; i++) {
    mailAnimation[i] = loadImage("mailAnim ("+i+").png"); 
  }

  for (var i=0; i<27; i++) {
    instaAnimation[i] = loadImage("instaAnim ("+i+").png"); 
  }


}

function setup() {

  var canvas = createCanvas(1200, 1200);
  canvas.parent('sketch-div'); 
  background(0,0,0,0);
  frameRate(30); // 
  imageMode(CENTER);

  cursor('https://s3.amazonaws.com/mupublicdata/cursor.cur');



  for (var i = 0; i < 1000; i++) {
     movers[i] = new Mover();
  }

  textFont(myFont);

  playing = false; 


  gameState = 0;
}


function draw() {

  if (gameState === 0){
   enterPage();
  }
  else if (gameState === 1){
   introVideoPage();
  }

  else if (gameState === 2){
    homeState();
  }

  else if (gameState === 3){
    reelPage();
  }

  else if (gameState === 4){
    projMapPage();
  }

  else if (gameState === 5){
    graphicsPage();
  }

  else if (gameState === 6){
    programPage();
  }




}

function mousePressed(){

  if (mouseIsPressed && gameState === 2 && mouseX > 525 && mouseX < 660 && mouseY > 940 && mouseY < 1070){
    programPage();
     //PROGRAM
  }

  else if (mouseIsPressed && gameState === 2 && mouseX > 855 && mouseX < 990 && mouseY > 370 && mouseY < 500){
    // PROJ MAP
    projMapPage();
  }

  else if (mouseIsPressed && gameState === 2 && mouseX > 560 && mouseX < 630 && mouseY > 255 && mouseY < 330){
    reelPage();
  }

  else if (mouseIsPressed && gameState === 2 && mouseX > 200 && mouseX < 330 && mouseY > 370 && mouseY < 510){
    graphicsPage();
  }

  else if (mouseIsPressed && gameState === 2 && mouseX > 545 && mouseX < 630 && mouseY > 25 && mouseY < 125){
    sendMail();
  }

  else if (mouseIsPressed && gameState ===0 && mouseX > 550 && mouseX < 650 && mouseY > 575 && mouseY < 625){
    gameState = 1;
  }


}

function enterPage(){ 

  background(0);
  rectMode(CENTER);
  fill(255);
  rect(width/2, height/2, 100,50);
  fill(0);
  textSize(12);
  text("ENTER", width/2 - 20, height/2 + 5);

  if (mouseX > 550 && mouseX < 650 && mouseY > 575 && mouseY < 625){
    cursor(CROSS);
  }

  else if (mouseX < 550 || mouseX > 650 || mouseY < 575 || mouseY > 625){
    cursor('https://s3.amazonaws.com/mupublicdata/cursor.cur');
  }

  
}


function introVideoPage(){

  background(0);
  imageMode(CENTER);

  cursor('https://s3.amazonaws.com/mupublicdata/cursor.cur');


  playing = true;
  

  if (currentIntroFrame === 90) { // once 124 frames have passed move onto next gameState (24 FPS * 5.2 sec animation)(124 frames = 5.2 sec animation)
   playing = false;
   gameState = 2;
  } 

  else if (playing === true) { 
    currentIntroFrame = (currentIntroFrame+1) % numIntroFrames;
    image(introAnimation[(currentIntroFrame) % numIntroFrames], width/2-5, height/2+10, 1200,1200);
    for (var i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
    fill(255);
    textSize(30);
    text(frameCount, 200, height / 2);
    gameState = 1;
   }


  playing = !playing;

}

function homeState(){

  ellipseMode(CENTER);
  imageMode(CENTER);

  background(0);

  currentFuiBackFrame = (currentFuiBackFrame+1) % numFuiBackFrames;  // Use % to cycle through frames
  image(fuiBackLoop[(currentFuiBackFrame) % numFuiBackFrames], width/2-5, height/2+10, 1200,1200);

  cursor('https://s3.amazonaws.com/mupublicdata/cursor.cur');

  fill(75,75,75);
  textSize(20);
  text(mouseX, 100, 1000);
  text(mouseY, 100, 1050);
  text(frameCount, 100, 1100);
  text(x, 100,1150);


for (var i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
    }

 currentRingFrame = (currentRingFrame+1) % numRingFrames;  // Use % to cycle through frames


  // DATA RINGS
push();

    translate (width/2, height/2+25);
    x+= 0.002;
    rotate(x);



    var graphicsDistance = dist(mouseX, mouseY, 268, 438);
    var reelDistance = dist(mouseX, mouseY, 595, 292);
    var programDistance = dist(mouseX, mouseY, 596, 1006);
    var projectionDistance = dist(mouseX, mouseY, 925, 437);

    if (graphicsDistance < 125){
      rotate(x + graphicsDistance*0.1);
    }

    else if (reelDistance < 100){
     rotate(x + reelDistance*0.1);
    }

    else if (programDistance < 125){
      rotate(x + programDistance*0.1);
    }

     else if (projectionDistance < 125){
      rotate(x + projectionDistance*0.1);
    }


    image(ringLoop[(currentRingFrame) % numRingFrames], 0, 0, 550,550);


pop();


  if (mouseX > 525 && mouseX < 660 && mouseY > 940 && mouseY < 1070){
    // PROGRAM MOUSEOVER

    cursor(CROSS);

    currentProgFrame = (currentProgFrame+1) % numProgFrames;
    image(progAnimation[(currentProgFrame) % numProgFrames], 596, 1006, 210,200);

    textSize(22);
    fill(150);
    text("Web Development, Design, Applications and Video Games. Javascript - HTML5 - CSS", 255, 1170);
  }

  else if (mouseX > 855 && mouseX < 990 && mouseY > 370 && mouseY < 500){

    cursor(CROSS);
    //PROJECTION MAP MOUSEOVER
    currentPmapFrame = (currentPmapFrame+1) % numPmapFrames;
    image(pmapAnimation[(currentPmapFrame) % numPmapFrames], 915, 447, 207,200);

  
    fill(200);
    textSize(22);
    fill(150);
    text("Augmented reality", 1020, 530);
    text("with projectors,", 1020, 565);
    text("surface archicture,", 1020, 595);
    text("and experimental", 1020, 630);
    text("materials. Created", 1020, 665);
    text("synchroniously with", 1020, 700);
    text("music, dance, VJ", 1020, 735);
    text("and other interactive", 1020, 770);
    text("performances.", 1020, 805);
  
  }

  else if (mouseX > 560 && mouseX < 630 && mouseY > 255 && mouseY < 330){
    // REEL MOUSEOVER
    cursor(CROSS);

    currentReelFrame = (currentReelFrame+1) % numReelFrames;
    image(reelAnimation[(currentReelFrame) % numReelFrames], 595, 292, 125,120);

    textSize(22);
    fill(150);
    //text("A brief video that captures the essence of my work.", 350, 130);
    text("A brief video that highlights the essence of my work and style.", 335, 165);

  }

  else if (mouseX > 200 && mouseX < 330 && mouseY > 370 && mouseY < 510){
    // GRAPHICS MOUSEOVER

    cursor(CROSS);

    currentGraphicFrame = (currentGraphicFrame+1) % numGraphicFrames;
    image(graphicAnimation[(currentGraphicFrame) % numGraphicFrames], 263, 443, 210,205);

    fill(200);
    textSize(22);
    fill(150);
    text("Digital, Print and", 30, 540);
    text("Motion Graphics.", 30, 575);
    text("3D, 2D, Illustration,", 30, 610);
    text("Algorithmic and", 30, 645);
    text("Photo Manipulation.", 30, 680);
    text("Blender, Cinema 4D,", 30, 715);
    text("Javascript, Illustrator,", 30, 750);
    text("Photoshop & ", 30, 785);
    text("After Effects.", 30, 820);

  }

  else if (mouseX > 545 && mouseX < 630 && mouseY > 25 && mouseY < 125){
    //MAIL

    cursor(CROSS);

      if (mailPlaying === 0){
      mailAnimationPlay();
    }

    else if (mailPlaying === 1){
      image(mailAnimation[26], 642, 100, 200,160);
    }

  }

  if (mouseX < 545 || mouseX > 630 || mouseY < 25 || mouseY > 125){

    mailPlaying = 0;
    image(mailAnimation[0], 642, 100, 200,160);

  }



}

function mailAnimationPlay(){


    currentMailFrame = (currentMailFrame+1) % numMailFrames;
    image(mailAnimation[(currentMailFrame) % numMailFrames], 642, 100, 200,160);

  if (currentMailFrame === 26){

    mailPlaying = 1;

   }




}

function sendMail(){

  window.open("mailto: chloesettle@yahoo.com")
}



function projMapPage(){

   window.open("http://www.processing.org");


}

function reelPage(){

  window.open("http://www.processing.org");

}


function graphicsPage(){

  window.open("http://www.processing.org");

}

function programPage(){

  window.open("http://www.processing.org");

}





class Mover{
  constructor() {
    this.position = createVector(random(width),random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 7;
  }

  update() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(0.2);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    noStroke();
    strokeWeight(2);
    fill(255,0,255);
    ellipse(this.position.x, this.position.y, 1, 1);
  }
}




