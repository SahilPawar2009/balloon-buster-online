var BackGround;
var BackGroundImage;

var balloonred;
var balloonredImage;

var balloonpink;
var balloonpinkImage;

var balloonblue;
var balloonblueImage;

var balloongreen;
var balloongreenImage;

var balloonblue2;
var balloonblueImage2;

var pinkRl;
var pinkRImage;

var bow;
var bowImage;

function preload(){
 //load your images here 
   BackGroundImage=loadImage("background0.png");
  
  balloonredImage=loadImage("red_balloon0.png");
  
  balloonpinkImage=loadImage("pink_balloon0.png");
  
  balloonblueImage=loadImage("blue_balloon0.png");
  
  balloongreenImage=loadImage("green_balloon0.png");

  balloonblueImage2=loadImage("toppng.com-single-purple-balloon-259x600.png");
  
  pinkRImage=loadImage("toppng.com-pink-balloon-2658x8000.png");

  
  bowImage=loadImage("bow0.png");

  
  

  
}

function setup() {
  createCanvas(400, 400);
  BackGround=createSprite(0,0,400,400);
  BackGround.addImage(BackGroundImage);
  BackGround.scale=2.5;
  BackGround.velocityX=-1
   
  
  
 //balloonpink=createSprite(200,230,50,50);
  //balloonpink.addImage(balloonpinkImage);
  //balloonpink.scale=1.3;
  
 
  
 // balloongreen=createSprite(150,350,50,50);
 // balloongreen.addImage(balloongreenImage);
 // balloongreen.scale=0.1;
  
  

  //add code here
  
  bow=createSprite(380,300,50,50);
   bow.addImage(bowImage);
  bow.scale=1.3;
  
  
  for ( var i = 60; i < 390; i=i+60) {
  console.log(i);balloonred=createSprite(50,i,50,50);
  balloonred.addImage(balloonredImage);
  balloonredImage.resize(45,90);
    
}
  
  for ( var i = 120; i < 390; i=i+60) {
  console.log(i);pinkRL=createSprite(100,i,50,50);
  pinkRL.addImage(pinkRImage);
 pinkRImage .resize(35,0);
  }
    for ( var i = 140; i < 350; i=i+60) {
  console.log(i);balloonblue2=createSprite(150,i,50,50);
  balloonblue2.addImage(balloonblueImage2);
   balloonblue2.scale=0.09;
  }
    
   for ( var i = 180; i < 300; i=i+60) {
  console.log(i);balloonblue=createSprite(200,i,50,50);
  balloonblue.addImage(balloonblueImage);
   balloonblueImage.resize(45,90);
  }
  
}

function draw() {
  background(0)
  if(BackGround.x<0){
    BackGround.x=BackGround.width/2
  }
  
  bow.y=mouseY;
  
  
  drawSprites();
  //add code here
  
}
