var PLAY = 1;
var END = 0;
var gameState = PLAY;
var background4,background5;
var round;
var planet;
var mount3;
var c;
var g;
var points;
var rocket,rocket7;
var ground, invisibleGround, groundImage;
var cloudsGroup, cloudImage;
var obstacle
var score;
var gameOverImg,restartImg;
var jumpSound , checkPointSound, dieSound;
var planetland,PT;
var iconsImg;
var blast;   
var line;
var arrow,archer;
var WoodenBridge;

function preload(){
  background5 = loadImage("3257.jpg");
  rocket = loadImage("op2.png");
  rocket7 = loadImage("op2 copy.png");
  blast = loadImage("jk.png");
  archer = loadImage("n3.png");
  arrow = loadImage("n6.png");
  WoodenBridge = loadImage("wood2.png");
  SM = loadSound("man_of_steel.mp3");
  DCFANDOM = loadImage("ui1.jpeg");
  InformationImg = loadImage("AS2.png");
  InformationImg2 = loadImage("TS3.png");
  InformationImg3 = loadImage("TS8 copy 6.png");
  InformationImg4 = loadImage("AS7.png");
  SHIELD = loadImage("0000.png");
  REFILE1 = loadImage("liveG.png");
  REFILE3 = loadImage("liveY.png");
  REFILE5 = loadImage("liveO.png");
  REFILE8 = loadImage("liveR.png");
  TEXT = loadImage("PO.png");
  Blast1 = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png",);
  //portal = loadImage;();
  WY = loadSound("jklk.mpeg");
  meteor = loadImage("meteor.png");
  CHEETAH = loadAnimation("c1.png","c2.png","c3.png","c4.png","c5.png","c6.png","c7.png","c8.png",);
  sup = loadImage("op2i.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   
  BG = createSprite(width/2,height-600);
  SM.loop();
  BG.addImage(background5);
  BG.scale = 1.0;
  BG.velocityX = -12;
  BG.x = width/2;
  BG.visible = true;

  Bl4 = createSprite(1500,500,width,500);
  Bl4.addImage(blast);
  Bl4.scale = 0.5;
  Bl4.velocityX = -12;
  Bl4.visible = true;

  Bl5 = createSprite(2600,500,width,500); 
  Bl5.addImage(blast);
  Bl5.scale = 0.5;
  Bl5.velocityX = -12;
  Bl5.visible = true;




  rocket1 = createSprite(350,0,width,50);
  rocket1.addImage(rocket);
  rocket1.visible = true;
  rocket1.debug = false;
  rocket1.scale = 0.3;
  rocket1.setCollider("rectangle",10,0,1100,400);




  Bl = createSprite(700,500,width,500);
  Bl.addImage(blast);
  Bl.scale = 0.5;
  Bl.velocityX = -12;
  Bl.visible = true;

  Bl1 = createSprite(4000,500,width,500);
  Bl1.addImage(blast);
  Bl1.scale = 0.5;
  Bl1.velocityX = -12;
  Bl1.visible = true;

  Bl2 = createSprite(8000,500,width,500);
  Bl2.addImage(blast);
  Bl2.scale = 0.5;
  Bl2.velocityX = -12;
  Bl2.visible = true;




  W =  createSprite(height/2+4480,width/2-716,width,50);
  W.addImage(WoodenBridge);
  W.scale = 1;
  W.velocityX = -12;

  W2 =  createSprite(height/2+4480,width/2-698,width,50);
  W2.addImage(WoodenBridge);
  W2.scale = 1;
  W2.velocityX = -12;

  W3 =  createSprite(height/2+4480,width/2-680,width,50);
  W3.addImage(WoodenBridge);
  W3.scale = 1;
  W3.velocityX = -12;

  W4 =  createSprite(height/2+4480,width/2-662,width,50);
  W4.addImage(WoodenBridge);
  W4.scale = 1;
  W4.velocityX = -12;

  W5 =  createSprite(height/2+4480,width/2-644,width,50);
  W5.addImage(WoodenBridge);
  W5.scale = 1;
  W5.velocityX = -12;

  W6 =  createSprite(height/2+4480,width/2-626,width,50);
  W6.addImage(WoodenBridge);
  W6.scale = 1;
  W6.velocityX = -12;

  W7 =  createSprite(height/2+4480,width/2-608,width,50);
  W7.addImage(WoodenBridge);
  W7.scale = 1;
  W7.velocityX = -12;

  W8 =  createSprite(height/2+4480,width/2-590,width,50);
  W8.addImage(WoodenBridge);
  W8.scale = 1;
  W8.velocityX = -12;

  W9 =  createSprite(height/2+4480,width/2-572,width,50);
  W9.addImage(WoodenBridge);
  W9.scale = 1;
  W9.velocityX = 0;

  W10 =  createSprite(height/2+4480,width/2-572,width,50);
  W10.addImage(WoodenBridge);
  W10.scale = 1;
  W10.velocityX = -12;

  W11 =  createSprite(height/2+4480,width/2-555,width,50);
  W11.addImage(WoodenBridge);
  W11.scale = 1;
  W11.velocityX = -12;

  W12 =  createSprite(height/2+4480,width/2-538,width,50);
  W12.addImage(WoodenBridge);
  W12.scale = 1;
  W12.velocityX = -12;

  W13 =  createSprite(height/2+4480,width/2-522,width,50);
  W13.addImage(WoodenBridge);
  W13.scale = 1;
  W13.velocityX = -12;

  W14 =  createSprite(height/2+4480,width/2-506,width,50);
  W14.addImage(WoodenBridge);
  W14.scale = 1;
  W14.velocityX = -12;

  W15 =  createSprite(height/2+4480,width/2-489,width,50);
  W15.addImage(WoodenBridge);
  W15.scale = 1;
  W15.velocityX = -12;

  W16 =  createSprite(height/2+4480,width/2-472,width,50);
  W16.addImage(WoodenBridge);
  W16.scale = 1;
  W16.velocityX = -12;

  W17 =  createSprite(height/2+4480,width/2-456,width,50);
  W17.addImage(WoodenBridge);
  W17.scale = 1;
  W17.velocityX = -12;

  W18 =  createSprite(height/2+4480,width/2-439,width,50);
  W18.addImage(WoodenBridge);
  W18.scale = 1;
  W18.velocityX = -12;
     
  W19 =  createSprite(height/2+4480,width/2-422,width,50);
  W19.addImage(WoodenBridge);
  W19.scale = 1;
  W19.velocityX = -12;

  W20 =  createSprite(height/2+4480,width/2-405,width,50);
  W20.addImage(WoodenBridge);
  W20.scale = 1;
  W20.velocityX = -12;

  W21 =  createSprite(height/2+4480,width/2-390,width,50);
  W21.addImage(WoodenBridge);
  W21.scale = 1;
  W21.velocityX = -12;

  W22 =  createSprite(height/2+4480,width/2-375,width,50);
  W22.addImage(WoodenBridge);
  W22.scale = 1;
  W22.velocityX = -12;

  W23 =  createSprite(height/2+4480,width/2-358,width,50);
  W23.addImage(WoodenBridge);
  W23.scale = 1;
  W23.velocityX = -12;

  W24 =  createSprite(height/2+4480,width/2-342,width,50);
  W24.addImage(WoodenBridge);
  W24.scale = 1;
  W24.velocityX = -12;

  W25 =  createSprite(height/2+4480,width/2-327,width,50);
  W25.addImage(WoodenBridge);
  W25.scale = 1;
  W25.velocityX = -12;

  W26 =  createSprite(height/2+4480,width/2-312,width,50);
  W26.addImage(WoodenBridge);
  W26.scale = 1;
  W26.velocityX = -12;

  W27 =  createSprite(height/2+4480,width/2-296,width,50);
  W27.addImage(WoodenBridge);
  W27.scale = 1;
  W27.velocityX = -12;

  W28 =  createSprite(height/2+4480,width/2-280,width,50);
  W28.addImage(WoodenBridge);
  W28.scale = 1;
  W28.velocityX = -12;

  W29 =  createSprite(height/2+4480,width/2-264,width,50);
  W29.addImage(WoodenBridge);
  W29.scale = 1;
  W29.velocityX = -12;

  W30 =  createSprite(height/2+4480,width/2-248,width,50);
  W30.addImage(WoodenBridge);
  W30.scale = 1;
  W30.velocityX = -12;
//.
  W31 =  createSprite(height/2+4480,width/2-232,width,50);
  W31.addImage(WoodenBridge);
  W31.scale = 1;
  W31.velocityX = -12;

  W32 =  createSprite(height/2+4480,width/2-225,width,50);
  W32.addImage(WoodenBridge);
  W32.scale = 1;
  W32.velocityX = 0;

  W33 =  createSprite(height/2+4480,width/2-216,width,50);
  W33.addImage(WoodenBridge);
  W33.scale = 1;
  W33.velocityX = -12;

  W34 =  createSprite(height/2+4480,width/2-204,width,50);
  W34.addImage(WoodenBridge);
  W34.scale = 1;
  W34.velocityX = -12;

  W35 =  createSprite(height/2+4480,width/2-188,width,50);
  W35.addImage(WoodenBridge);
  W35.scale = 1;
  W35.velocityX = -12;

  W36 =  createSprite(height/2+4480,width/2-173,width,50);
  W36.addImage(WoodenBridge);
  W36.scale = 1;
  W36.velocityX = -12;

  W37 =  createSprite(height/2+4480,width/2-158,width,50);
  W37.addImage(WoodenBridge);
  W37.scale = 1;
  W37.velocityX = -12;
  //.

  W38 =  createSprite(height/2+4480,width/2-145,width,50);
  W38.addImage(WoodenBridge);
  W38.scale = 1;
  W38.velocityX = -12;

  W39 =  createSprite(height/2+4480,width/2-129,width,50);
  W39.addImage(WoodenBridge);
  W39.scale = 1;
  W39.velocityX = -12;

  W40 =  createSprite(height/2+4480,width/2-115,width,50);
  W40.addImage(WoodenBridge);
  W40.scale = 1;
  W40.velocityX = -12;

  W41 =  createSprite(height/2+4480,width/2+108,width,50);
  W41.addImage(WoodenBridge);
  W41.scale = 1;
  W41.velocityX = -12;
//.
  W42 =  createSprite(height/2+4480,width/2-100,width,50);
  W42.addImage(WoodenBridge);
  W42.scale = 1;
  W42.velocityX = -12;

  W43 =  createSprite(height/2+4480,width/2-84,width,50);
  W43.addImage(WoodenBridge);
  W43.scale = 1;
  W43.velocityX = -12;

  W44 =  createSprite(height/2+4480,width/2-70,width,50);
  W44.addImage(WoodenBridge);
  W44.scale = 1;
  W44.velocityX = -12; 

  W45 =  createSprite(height/2+4480,width/2-56,width,50);
  W45.addImage(WoodenBridge);
  W45.scale = 1;
  W45.velocityX = -12;

  W46 =  createSprite(height/2+4480,width/2-40,width,50);
  W46.addImage(WoodenBridge);
  W46.scale = 1;
  W46.velocityX = -12;
//.
  W47 =  createSprite(height/2+4480,width/2-25,width,50);
  W47.addImage(WoodenBridge);
  W47.scale = 1;
  W47.velocityX = -12;

  W48 =  createSprite(height/2+4480,width/2-13,width,50);
  W48.addImage(WoodenBridge);
  W48.scale = 1;
  W48.velocityX = -12;

  W49 =  createSprite(height/2+4480,width/2+2,width,50);
  W49.addImage(WoodenBridge);
  W49.scale = 1;
  W49.velocityX = -12;

  W50 =  createSprite(height/2+4480,width/2+18,width,50);
  W50.addImage(WoodenBridge);
  W50.scale = 1;
  W50.velocityX = -12;

  W51 =  createSprite(height/2+4480,width/2+35,width,50);
  W51.addImage(WoodenBridge);
  W51.scale = 1;
  W51.velocityX = -12;

  W52 =  createSprite(height/2+4480,width/2+48,width,50);
  W52.addImage(WoodenBridge);
  W52.scale = 1;
  W52.velocityX = -12;

  W53 =  createSprite(height/2+4480,width/2+64,width,50);
  W53.addImage(WoodenBridge);
  W53.scale = 1;
  W53.velocityX = -12;

  W54 =  createSprite(height/2+4480,width/2+81,width,50);
  W54.addImage(WoodenBridge);
  W54.scale = 1;
  W54.velocityX = -12;

  W55 =  createSprite(height/2+4480,width/2+98,width,50);
  W55.addImage(WoodenBridge);
  W55.scale = 1;
  W55.velocityX = -12;

  W56 =  createSprite(height/2+4480,width/2+135,width,50);
  W56.addImage(WoodenBridge);
  W56.scale = 1;
  W56.velocityX = -12;




  AB = createSprite(height/2+4460,width/2-550,width,50);
  AB.addImage(archer);
  AB.scale = 0.5;
  AB.velocityX = -12;

  AC = createSprite(height/2+4460,width/2-450,width,50);
  AC.addImage(archer);
  AC.scale = 0.5;
  AC.velocityX = -12;

  AD = createSprite(height/2+4460,width/2-350,width,50);
  AD.addImage(archer);
  AD.scale = 0.5;
  AD.velocityX = -12;

  AE = createSprite(height/2+4460,width/2-250,width,50);
  AE.addImage(archer);
  AE.scale = 0.5;
  AE.velocityX = -12;

  AF = createSprite(height/2+4460,width/2-150,width,50);
  AF.addImage(archer);
  AF.scale = 0.5;
  AF.velocityX = -12;

  AG = createSprite(height/2+4460,width/2-50,width,50);
  AG.addImage(archer);
  AG.scale = 0.5;
  AG.velocityX = -12;




  A2 = createSprite(height/2+4410,width/2-644,width,50);
  A2.addImage(arrow);
  A2.scale = 0.1;
  A2.velocityX = -12;

  A3 = createSprite(height/2+4410,width/2-544,width,50);
  A3.addImage(arrow);
  A3.scale = 0.1;
  A3.velocityX = -12;

  A4 = createSprite(height/2+4410,width/2-444,width,50);
  A4.addImage(arrow);
  A4.scale = 0.1;
  A4.velocityX = -12;

  A5 = createSprite(height/2+4410,width/2-344,width,50);
  A5.addImage(arrow);
  A5.scale = 0.1;
  A5.velocityX = -12;

  A6 = createSprite(height/2+4410,width/2-244,width,50);
  A6.addImage(arrow);
  A6.scale = 0.1;
  A6.velocityX = -12;

  A7 = createSprite(height/2+4410,width/2-144,width,50);
  A7.addImage(arrow);
  A7.scale = 0.1;
  A7.velocityX = -12;




  invisibleGround = createSprite(width/2,height+150,width,125);
  invisibleGround.visible = false;




  l = createSprite(height/2+4000,width/2-1,10,90000);
  l.velocityX = -12;
  l.visible = false;

  e = createSprite(height/2+500,width/2-900,10,900000);
  e.velocityX = -12;
  e.visible = false;

  e4 = createSprite(height/2+1000,width/2-900,10,900000);
  e4.velocityX = -12;
  e4.visible = false;

  e5 = createSprite(height/2+3500,width/2-900,10,900000);
  e5.velocityX = -12;
  e5.visible = false;

  e2 = createSprite(height/2+4100,width/2-1,10,90000);
  e2.velocityX = -12;
  e2.visible = false;

  e3 = createSprite(height/2+5000,width/2-1,10,90000);
  e3.velocityX = -12;
  e3.visible = false;

  e4i = createSprite(height/2+1800,width/2-1,10,90000);
  e4i.velocityX = -12;
  e4i.visible = false;




  fill = createSprite(windowHeight,windowWidth);
  fill.addImage(DCFANDOM);
  fill.scale = 15;
  fill.visible = false;

  fill3 = createSprite(displayHeight/2+734,displayWidth/2-600,10,width);
  fill3.addImage(InformationImg);
  fill3.scale = 0.4;
  fill3.visible = false;

  fill3e = createSprite(displayHeight/2+734,displayWidth/2-490,10,width);
  fill3e.addImage(InformationImg2);
  fill3e.scale = 0.4;
  fill3e.visible = false;

  fill4e = createSprite(height/2+200,width/2-310,width,50);
  fill4e.addImage(SHIELD);
  fill4e.scale = 0.6;
  fill4e.visible = false;



  
  Refile = createSprite(displayHeight/2+930,displayWidth/2-680,width,50);
  Refile.addImage(REFILE1);
  Refile.scale = 0.5;

  Refile2 = createSprite(displayHeight/2+880,displayWidth/2-680,width,50);
  Refile2.addImage(REFILE1);
  Refile2.scale = 0.5;

  Refile3 = createSprite(displayHeight/2+830,displayWidth/2-680,width,50);
  Refile3.addImage(REFILE3);
  Refile3.scale = 0.5;

  Refile4 = createSprite(displayHeight/2+780,displayWidth/2-680,width,50);
  Refile4.addImage(REFILE3);
  Refile4.scale = 0.5;

  Refile5 = createSprite(displayHeight/2+730,displayWidth/2-680,width,50);
  Refile5.addImage(REFILE5);
  Refile5.scale = 0.5;

  Refile6 = createSprite(displayHeight/2+680,displayWidth/2-680,width,50);
  Refile6.addImage(REFILE5);
  Refile6.scale = 0.5;

  Refile7 = createSprite(displayHeight/2+630,displayWidth/2-680,width,50);
  Refile7.addImage(REFILE8);
  Refile7.scale = 0.5;

  Refile8 = createSprite(displayHeight/2+580,displayWidth/2-680,width,50);
  Refile8.addImage(REFILE8);
  Refile8.scale = 0.5;

  text1 = createSprite(displayHeight/2+700,displayWidth/2-530,width,50);
  text1.addImage(TEXT);
  text1.scale = 0.4;
  text1.visible = false;

  text2 = createSprite(displayHeight/2+734,displayWidth/2-370,width,50);
  text2.addImage(InformationImg3);
  text2.scale = 0.4;
  text2.visible = false;

  text3 = createSprite(displayHeight/2+734,displayWidth/2-490,10,width);
  text3.addImage(InformationImg4);
  text3.scale = 0.4;
  text3.visible = false;

  text5 = createSprite(displayHeight/2+734,displayWidth/2-600,10,width);
  text5.addImage(InformationImg3);
  text5.scale = 0.4;
  text5.visible = false;



  Meteor = createSprite(displayHeight/2-300,displayWidth/2-1000,width,50);
  Meteor.addImage(meteor);
  Meteor.scale = 0.2;
  Meteor.velocityX = 35;
  Meteor.velocityY = 35;

  BLAST = createSprite(displayHeight/2+700,displayWidth/2-1,width,50);
  BLAST.addAnimation("blast",Blast1);
  BLAST.scale = 3.5;
  BLAST.visible = false;

  Cheetah = createSprite(displayHeight/2+1,displayWidth/2+55,width,50);
  Cheetah.addAnimation("Cheetah",CHEETAH);
  Cheetah.scale = 0.5;
  Cheetah.velocityX = 20;
  Cheetah.visible = false;



  score = 0;
  points = 0;
}

function draw() {  
  background(180);  
  if (BG.x < 0){
      BG.x = BG.width/2;
  }
  if(gameState === PLAY){
    
    score = score + Math.round(getFrameRate()/60);
    
    if(score > 0 && score % 100 === 0){
    }

    if(touches.length > 0 || keyDown("space")&& rocket1.y >= 100) {
        rocket1.velocityY = -12; 
        touches = [];
    } 

    if(keyDown("D")) {
      rocket1.addImage(rocket7);
  }

  if(keyDown("C")) {
    rocket1.addImage(rocket);
}
    
    //add gravity
    rocket1.velocityY = rocket1.velocityY + 0.8;
  }
     if(gameState === END) {         
      fill.visible = true;
      //fill2.visible = true; 

      rocket1.velocityY = 0;
      rocket.visible = false;
      BG.velocityX = 0;

      //fill.visible = true;

  W.destroy();
  W2.destroy();
  W3.destroy();
  W4.destroy();
  W5.destroy();
  W6.destroy();
  W7.destroy();
  W8.destroy();
  W9.destroy();
  W10.destroy();
  W11.destroy();
  W12.destroy();
  W13.destroy();
  W14.destroy();
  W15.destroy();
  W16.destroy();
  W17.destroy();
  W18.destroy();
  W19.destroy();
  W20.destroy();
  W21.destroy();
  W22.destroy();
  W23.destroy();
  W24.destroy();
  W25.destroy();
  W26.destroy();
  W27.destroy();
  W28.destroy();
  W29.destroy();
  W30.destroy();
  W31.destroy();
  W32.destroy();
  W33.destroy();
  W34.destroy();
  W35.destroy();
  W36.destroy();
  W37.destroy();
  W38.destroy();
  W39.destroy();
  W40.destroy();
  W41.destroy();
  W42.destroy();
  W43.destroy();
  W44.destroy();
  W45.destroy();
  W46.destroy();
  W47.destroy();
  W48.destroy();
  W49.destroy();
  W50.destroy();
  W51.destroy();
  W52.destroy();
  W53.destroy();
  W54.destroy();
  W55.destroy();
  W56.destroy();
  AB.destroy();
  AC.destroy();
  AD.destroy();
  AE.destroy();
  AF.destroy();
  AG.destroy();
  A2.destroy();
  A3.destroy();
  A4.destroy();
  A5.destroy();
  A6.destroy();
  A7.destroy();
  Bl.destroy();
  Bl1.destroy();
  Bl2.destroy();
  Bl4.destroy();
  Bl5.destroy();
  Refile.destroy();
  Refile2.destroy();
  Refile3.destroy();
  Refile4.destroy();
  Refile5.destroy();
  Refile6.destroy();
  Refile7.destroy();
  Refile8.destroy();
  text1.destroy();
  text2.destroy();
  text3.destroy();
  text5.destroy();

      W.velocityX = 0;
      W2.velocityX = 0;
      W3.velocityX = 0;
      W4.velocityX = 0;
      W5.velocityX = 0;
      W6.velocityX = 0;
      W7.velocityX = 0;
      W8.velocityX = 0;
      W9.velocityX = 0;
      W10.velocityX = 0;
      W11.velocityX = 0;
      W12.velocityX = 0;
      W13.velocityX = 0;
      W14.velocityX = 0;
      W15.velocityX = 0;
      W16.velocityX = 0;
      W17.velocityX = 0;
      W18.velocityX = 0;
      W19.velocityX = 0;
      W20.velocityX = 0;
      W21.velocityX = 0;
      W22.velocityX = 0;
      W23.velocityX = 0;
      W24.velocityX = 0;
      W25.velocityX = 0;
      W26.velocityX = 0;
      W27.velocityX = 0;
      W28.velocityX = 0;
      W29.velocityX = 0;
      W30.velocityX = 0;
      W31.velocityX = 0;
      W32.velocityX = 0;
      W33.velocityX = 0;
      W34.velocityX = 0;
      W35.velocityX = 0;
      W36.velocityX = 0;
      W37.velocityX = 0;
      W38.velocityX = 0;
      W39.velocityX = 0;
      W40.velocityX = 0;
      W41.velocityX = 0;
      W42.velocityX = 0; 
      W43.velocityX = 0;
      W44.velocityX = 0;
      W45.velocityX = 0;
      W46.velocityX = 0;
      W47.velocityX = 0;
      W48.velocityX = 0;
      W49.velocityX = 0;
      W50.velocityX = 0;
      W51.velocityX = 0;
      W52.velocityX = 0;
      W53.velocityX = 0;
      W54.velocityX = 0;
      W55.velocityX = 0;
      W56.velocityX = 0;
      
      AB.velocityX = 0; 
      AC.velocityX = 0; 
      AD.velocityX = 0; 
      AE.velocityX = 0; 
      AF.velocityX = 0; 
      AG.velocityX = 0; 

      A2.velocityX = 0; 
      A3.velocityX = 0; 
      A4.velocityX = 0; 
      A5.velocityX = 0; 
      A6.velocityX = 0; 
      A7.velocityX = 0; 

      BG.lifeTime = -1;
     
      Bl.velocityX = 0;
      Bl1.velocityX = 0;
      Bl2.velocityX = 0;
      Bl4.velocityX = 0;
      Bl5.velocityX = 0;
  
     if(mousePressedOver(fill)) {
        reset();
     }
   }
  
  rocket1.collide(invisibleGround);
  drawSprites();

  if(rocket1.isTouching(l)){
     A2.velocityX = -150;
     A3.velocityX = -150;
     A4.velocityX = -150;
     A5.velocityX = -150;
     A6.velocityX = -150;
     A7.velocityX = -150;
  }

  if(rocket1.isTouching(e)){
     fill3.visible = true;
  }

  if(rocket1.isTouching(e4)){
    fill3e.visible = true;
 }

 if(rocket1.isTouching(e5)){
    fill3e.visible = false;
    fill3.visible = false;
    text1.visible = true;
}

if(rocket1.isTouching(e2)){
  text2.visible = true;
}

if(rocket1.isTouching(e3)){
  text3.visible = true;
  text5.visible = true;
  text2.visible = false;
  text1.visible = false;
}

if(Meteor.isTouching(invisibleGround)){
   BLAST.visible = true;
   WY.play();
}

if(BLAST.isTouching(e4i)){
  BLAST.destroy();
}

  if(rocket1.isTouching(A2)||rocket1.isTouching(A3)||rocket1.isTouching(A4)||rocket1.isTouching(A5)||rocket1.isTouching(A6)||rocket1.isTouching(A7)){
     Refile.destroy();
     rocket1.addImage(sup);
  }

}

function reset(){
  gameState = PLAY;
  fill.destroy();
  fill.visible = false;
  //fill2.visible = false;
  rocket1.visible = false;
  BG.velocityX = -12;
  rocket1.addImage(rocket);
  score = 0;
  points = 0;

  W.destroy();
  W2.destroy();
  W3.destroy();
  W4.destroy();
  W5.destroy();
  W6.destroy();
  W7.destroy();
  W8.destroy();
  W9.destroy();
  W10.destroy();
  W11.destroy();
  W12.destroy();
  W13.destroy();
  W14.destroy();
  W15.destroy();
  W16.destroy();
  W17.destroy();
  W18.destroy();
  W19.destroy();
  W20.destroy();
  W21.destroy();
  W22.destroy();
  W23.destroy();
  W24.destroy();
  W25.destroy();
  W26.destroy();
  W27.destroy();
  W28.destroy();
  W29.destroy();
  W30.destroy();
  W31.destroy();
  W32.destroy();
  W33.destroy();
  W34.destroy();
  W35.destroy();
  W36.destroy();
  W37.destroy();
  W38.destroy();
  W39.destroy();
  W40.destroy();
  W41.destroy();
  W42.destroy();
  W43.destroy();
  W44.destroy();
  W45.destroy();
  W46.destroy();
  W47.destroy();
  W49.destroy();
  W48.destroy();
  W50.destroy();
  W51.destroy();
  W52.destroy();
  W53.destroy();
  W54.destroy();
  W55.destroy();
  W56.destroy();
  AB.destroy();
  AC.destroy();
  AD.destroy();
  AE.destroy();
  AF.destroy();
  AG.destroy();
  A2.destroy();
  A3.destroy();
  A4.destroy();
  A5.destroy();
  A6.destroy();
  A7.destroy();
  Refile.destroy();
  Refile2.destroy();
  Refile3.destroy();
  Refile4.destroy();
  Refile5.destroy();
  Refile6.destroy();
  Refile7.destroy();
  Refile8.destroy();
  text1.destroy();
  text2.destroy();
  text3.destroy();
  text5.destroy();
  Bl.destroy();
  Bl1.destroy();
  Bl2.destroy();
  Bl4.destroy();
  Bl5.destroy(); 



  Bl4 = createSprite(1500,500,width,500);
  Bl4.addImage(blast);
  Bl4.scale = 0.5;
  Bl4.velocityX = -12;
  Bl4.visible = true;

  Bl5 = createSprite(2600,500,width,500); 
  Bl5.addImage(blast);
  Bl5.scale = 0.5;
  Bl5.velocityX = -12;
  Bl5.visible = true;




  rocket1 = createSprite(350,0,width,50);
  rocket1.addImage(rocket);
  rocket1.visible = true;
  rocket1.debug = false;
  rocket1.scale = 0.3;
  rocket1.setCollider("rectangle",10,0,1100,400);




  Bl = createSprite(700,500,width,500);
  Bl.addImage(blast);
  Bl.scale = 0.5;
  Bl.velocityX = -12;
  Bl.visible = true;

  Bl1 = createSprite(4000,500,width,500);
  Bl1.addImage(blast);
  Bl1.scale = 0.5;
  Bl1.velocityX = -12;
  Bl1.visible = true;

  Bl2 = createSprite(8000,500,width,500);
  Bl2.addImage(blast);
  Bl2.scale = 0.5;
  Bl2.velocityX = -12;
  Bl2.visible = true;




  W =  createSprite(height/2+4480,width/2-716,width,50);
  W.addImage(WoodenBridge);
  W.scale = 1;
  W.velocityX = -12;

  W2 =  createSprite(height/2+4480,width/2-698,width,50);
  W2.addImage(WoodenBridge);
  W2.scale = 1;
  W2.velocityX = -12;

  W3 =  createSprite(height/2+4480,width/2-680,width,50);
  W3.addImage(WoodenBridge);
  W3.scale = 1;
  W3.velocityX = -12;

  W4 =  createSprite(height/2+4480,width/2-662,width,50);
  W4.addImage(WoodenBridge);
  W4.scale = 1;
  W4.velocityX = -12;

  W5 =  createSprite(height/2+4480,width/2-644,width,50);
  W5.addImage(WoodenBridge);
  W5.scale = 1;
  W5.velocityX = -12;

  W6 =  createSprite(height/2+4480,width/2-626,width,50);
  W6.addImage(WoodenBridge);
  W6.scale = 1;
  W6.velocityX = -12;

  W7 =  createSprite(height/2+4480,width/2-608,width,50);
  W7.addImage(WoodenBridge);
  W7.scale = 1;
  W7.velocityX = -12;

  W8 =  createSprite(height/2+4480,width/2-590,width,50);
  W8.addImage(WoodenBridge);
  W8.scale = 1;
  W8.velocityX = -12;

  W9 =  createSprite(height/2+4480,width/2-572,width,50);
  W9.addImage(WoodenBridge);
  W9.scale = 1;
  W9.velocityX = 0;

  W10 =  createSprite(height/2+4480,width/2-572,width,50);
  W10.addImage(WoodenBridge);
  W10.scale = 1;
  W10.velocityX = -12;

  W11 =  createSprite(height/2+4480,width/2-555,width,50);
  W11.addImage(WoodenBridge);
  W11.scale = 1;
  W11.velocityX = -12;

  W12 =  createSprite(height/2+4480,width/2-538,width,50);
  W12.addImage(WoodenBridge);
  W12.scale = 1;
  W12.velocityX = -12;

  W13 =  createSprite(height/2+4480,width/2-522,width,50);
  W13.addImage(WoodenBridge);
  W13.scale = 1;
  W13.velocityX = -12;

  W14 =  createSprite(height/2+4480,width/2-506,width,50);
  W14.addImage(WoodenBridge);
  W14.scale = 1;
  W14.velocityX = -12;

  W15 =  createSprite(height/2+4480,width/2-489,width,50);
  W15.addImage(WoodenBridge);
  W15.scale = 1;
  W15.velocityX = -12;

  W16 =  createSprite(height/2+4480,width/2-472,width,50);
  W16.addImage(WoodenBridge);
  W16.scale = 1;
  W16.velocityX = -12;

  W17 =  createSprite(height/2+4480,width/2-456,width,50);
  W17.addImage(WoodenBridge);
  W17.scale = 1;
  W17.velocityX = -12;

  W18 =  createSprite(height/2+4480,width/2-439,width,50);
  W18.addImage(WoodenBridge);
  W18.scale = 1;
  W18.velocityX = -12;
     
  W19 =  createSprite(height/2+4480,width/2-422,width,50);
  W19.addImage(WoodenBridge);
  W19.scale = 1;
  W19.velocityX = -12;

  W20 =  createSprite(height/2+4480,width/2-405,width,50);
  W20.addImage(WoodenBridge);
  W20.scale = 1;
  W20.velocityX = -12;

  W21 =  createSprite(height/2+4480,width/2-390,width,50);
  W21.addImage(WoodenBridge);
  W21.scale = 1;
  W21.velocityX = -12;

  W22 =  createSprite(height/2+4480,width/2-375,width,50);
  W22.addImage(WoodenBridge);
  W22.scale = 1;
  W22.velocityX = -12;

  W23 =  createSprite(height/2+4480,width/2-358,width,50);
  W23.addImage(WoodenBridge);
  W23.scale = 1;
  W23.velocityX = -12;

  W24 =  createSprite(height/2+4480,width/2-342,width,50);
  W24.addImage(WoodenBridge);
  W24.scale = 1;
  W24.velocityX = -12;

  W25 =  createSprite(height/2+4480,width/2-327,width,50);
  W25.addImage(WoodenBridge);
  W25.scale = 1;
  W25.velocityX = -12;

  W26 =  createSprite(height/2+4480,width/2-312,width,50);
  W26.addImage(WoodenBridge);
  W26.scale = 1;
  W26.velocityX = -12;

  W27 =  createSprite(height/2+4480,width/2-296,width,50);
  W27.addImage(WoodenBridge);
  W27.scale = 1;
  W27.velocityX = -12;

  W28 =  createSprite(height/2+4480,width/2-280,width,50);
  W28.addImage(WoodenBridge);
  W28.scale = 1;
  W28.velocityX = -12;

  W29 =  createSprite(height/2+4480,width/2-264,width,50);
  W29.addImage(WoodenBridge);
  W29.scale = 1;
  W29.velocityX = -12;

  W30 =  createSprite(height/2+4480,width/2-248,width,50);
  W30.addImage(WoodenBridge);
  W30.scale = 1;
  W30.velocityX = -12;
//.
  W31 =  createSprite(height/2+4480,width/2-232,width,50);
  W31.addImage(WoodenBridge);
  W31.scale = 1;
  W31.velocityX = -12;

  W32 =  createSprite(height/2+4480,width/2-225,width,50);
  W32.addImage(WoodenBridge);
  W32.scale = 1;
  W32.velocityX = 0;

  W33 =  createSprite(height/2+4480,width/2-216,width,50);
  W33.addImage(WoodenBridge);
  W33.scale = 1;
  W33.velocityX = -12;

  W34 =  createSprite(height/2+4480,width/2-204,width,50);
  W34.addImage(WoodenBridge);
  W34.scale = 1;
  W34.velocityX = -12;

  W35 =  createSprite(height/2+4480,width/2-188,width,50);
  W35.addImage(WoodenBridge);
  W35.scale = 1;
  W35.velocityX = -12;

  W36 =  createSprite(height/2+4480,width/2-173,width,50);
  W36.addImage(WoodenBridge);
  W36.scale = 1;
  W36.velocityX = -12;

  W37 =  createSprite(height/2+4480,width/2-158,width,50);
  W37.addImage(WoodenBridge);
  W37.scale = 1;
  W37.velocityX = -12;
  //.

  W38 =  createSprite(height/2+4480,width/2-145,width,50);
  W38.addImage(WoodenBridge);
  W38.scale = 1;
  W38.velocityX = -12;

  W39 =  createSprite(height/2+4480,width/2-129,width,50);
  W39.addImage(WoodenBridge);
  W39.scale = 1;
  W39.velocityX = -12;

  W40 =  createSprite(height/2+4480,width/2-115,width,50);
  W40.addImage(WoodenBridge);
  W40.scale = 1;
  W40.velocityX = -12;

  W41 =  createSprite(height/2+4480,width/2+108,width,50);
  W41.addImage(WoodenBridge);
  W41.scale = 1;
  W41.velocityX = -12;
//.
  W42 =  createSprite(height/2+4480,width/2-100,width,50);
  W42.addImage(WoodenBridge);
  W42.scale = 1;
  W42.velocityX = -12;

  W43 =  createSprite(height/2+4480,width/2-84,width,50);
  W43.addImage(WoodenBridge);
  W43.scale = 1;
  W43.velocityX = -12;

  W44 =  createSprite(height/2+4480,width/2-70,width,50);
  W44.addImage(WoodenBridge);
  W44.scale = 1;
  W44.velocityX = -12; 

  W45 =  createSprite(height/2+4480,width/2-56,width,50);
  W45.addImage(WoodenBridge);
  W45.scale = 1;
  W45.velocityX = -12;

  W46 =  createSprite(height/2+4480,width/2-40,width,50);
  W46.addImage(WoodenBridge);
  W46.scale = 1;
  W46.velocityX = -12;
//.
  W47 =  createSprite(height/2+4480,width/2-25,width,50);
  W47.addImage(WoodenBridge);
  W47.scale = 1;
  W47.velocityX = -12;

  W48 =  createSprite(height/2+4480,width/2-13,width,50);
  W48.addImage(WoodenBridge);
  W48.scale = 1;
  W48.velocityX = -12;

  W49 =  createSprite(height/2+4480,width/2+2,width,50);
  W49.addImage(WoodenBridge);
  W49.scale = 1;
  W49.velocityX = -12;

  W50 =  createSprite(height/2+4480,width/2+18,width,50);
  W50.addImage(WoodenBridge);
  W50.scale = 1;
  W50.velocityX = -12;

  W51 =  createSprite(height/2+4480,width/2+35,width,50);
  W51.addImage(WoodenBridge);
  W51.scale = 1;
  W51.velocityX = -12;

  W52 =  createSprite(height/2+4480,width/2+48,width,50);
  W52.addImage(WoodenBridge);
  W52.scale = 1;
  W52.velocityX = -12;

  W53 =  createSprite(height/2+4480,width/2+64,width,50);
  W53.addImage(WoodenBridge);
  W53.scale = 1;
  W53.velocityX = -12;

  W54 =  createSprite(height/2+4480,width/2+81,width,50);
  W54.addImage(WoodenBridge);
  W54.scale = 1;
  W54.velocityX = -12;

  W55 =  createSprite(height/2+4480,width/2+98,width,50);
  W55.addImage(WoodenBridge);
  W55.scale = 1;
  W55.velocityX = -12;

  W56 =  createSprite(height/2+4480,width/2+135,width,50);
  W56.addImage(WoodenBridge);
  W56.scale = 1;
  W56.velocityX = -12;




  AB = createSprite(height/2+4460,width/2-550,width,50);
  AB.addImage(archer);
  AB.scale = 0.5;
  AB.velocityX = -12;

  AC = createSprite(height/2+4460,width/2-450,width,50);
  AC.addImage(archer);
  AC.scale = 0.5;
  AC.velocityX = -12;

  AD = createSprite(height/2+4460,width/2-350,width,50);
  AD.addImage(archer);
  AD.scale = 0.5;
  AD.velocityX = -12;

  AE = createSprite(height/2+4460,width/2-250,width,50);
  AE.addImage(archer);
  AE.scale = 0.5;
  AE.velocityX = -12;

  AF = createSprite(height/2+4460,width/2-150,width,50);
  AF.addImage(archer);
  AF.scale = 0.5;
  AF.velocityX = -12;

  AG = createSprite(height/2+4460,width/2-50,width,50);
  AG.addImage(archer);
  AG.scale = 0.5;
  AG.velocityX = -12;




  A2 = createSprite(height/2+4410,width/2-644,width,50);
  A2.addImage(arrow);
  A2.scale = 0.1;
  A2.velocityX = -12;

  A3 = createSprite(height/2+4410,width/2-544,width,50);
  A3.addImage(arrow);
  A3.scale = 0.1;
  A3.velocityX = -12;

  A4 = createSprite(height/2+4410,width/2-444,width,50);
  A4.addImage(arrow);
  A4.scale = 0.1;
  A4.velocityX = -12;

  A5 = createSprite(height/2+4410,width/2-344,width,50);
  A5.addImage(arrow);
  A5.scale = 0.1;
  A5.velocityX = -12;

  A6 = createSprite(height/2+4410,width/2-244,width,50);
  A6.addImage(arrow);
  A6.scale = 0.1;
  A6.velocityX = -12;

  A7 = createSprite(height/2+4410,width/2-144,width,50);
  A7.addImage(arrow);
  A7.scale = 0.1;
  A7.velocityX = -12;



  l = createSprite(height/2+4000,width/2-1,10,90000);
  l.velocityX = -12;
  l.visible = false;

  e = createSprite(height/2+500,width/2-900,10,900000);
  e.velocityX = -12;
  e.visible = false;

  e4 = createSprite(height/2+1000,width/2-900,10,900000);
  e4.velocityX = -12;
  e4.visible = false;

  e5 = createSprite(height/2+3500,width/2-900,10,900000);
  e5.velocityX = -12;
  e5.visible = false;

  e2 = createSprite(height/2+4100,width/2-1,10,90000);
  e2.velocityX = -12;
  e2.visible = false;

  e3 = createSprite(height/2+5000,width/2-1,10,90000);
  e3.velocityX = -12;
  e3.visible = false;

  e4i = createSprite(height/2+1800,width/2-1,10,90000);
  e4i.velocityX = -12;
  e4i.visible = false;


  
  fill = createSprite(windowHeight,windowWidth);
  fill.addImage(DCFANDOM);
  fill.scale = 15;
  fill.visible = false;

  fill3 = createSprite(displayHeight/2+734,displayWidth/2-600,10,width);
  fill3.addImage(InformationImg);
  fill3.scale = 0.4;
  fill3.visible = false;

  fill3e = createSprite(displayHeight/2+734,displayWidth/2-490,10,width);
  fill3e.addImage(InformationImg2);
  fill3e.scale = 0.4;
  fill3e.visible = false;

  fill4e = createSprite(height/2+200,width/2-310,width,50);
  fill4e.addImage(SHIELD);
  fill4e.scale = 0.6;
  fill4e.visible = false;



  
  Refile = createSprite(displayHeight/2+930,displayWidth/2-680,width,50);
  Refile.addImage(REFILE1);
  Refile.scale = 0.5;

  Refile2 = createSprite(displayHeight/2+880,displayWidth/2-680,width,50);
  Refile2.addImage(REFILE1);
  Refile2.scale = 0.5;

  Refile3 = createSprite(displayHeight/2+830,displayWidth/2-680,width,50);
  Refile3.addImage(REFILE3);
  Refile3.scale = 0.5;

  Refile4 = createSprite(displayHeight/2+780,displayWidth/2-680,width,50);
  Refile4.addImage(REFILE3);
  Refile4.scale = 0.5;

  Refile5 = createSprite(displayHeight/2+730,displayWidth/2-680,width,50);
  Refile5.addImage(REFILE5);
  Refile5.scale = 0.5;

  Refile6 = createSprite(displayHeight/2+680,displayWidth/2-680,width,50);
  Refile6.addImage(REFILE5);
  Refile6.scale = 0.5;

  Refile7 = createSprite(displayHeight/2+630,displayWidth/2-680,width,50);
  Refile7.addImage(REFILE8);
  Refile7.scale = 0.5;

  Refile8 = createSprite(displayHeight/2+580,displayWidth/2-680,width,50);
  Refile8.addImage(REFILE8);
  Refile8.scale = 0.5;

  text1 = createSprite(displayHeight/2+700,displayWidth/2-530,width,50);
  text1.addImage(TEXT);
  text1.scale = 0.4;
  text1.visible = false;

  text2 = createSprite(displayHeight/2+734,displayWidth/2-370,width,50);
  text2.addImage(InformationImg3);
  text2.scale = 0.4;
  text2.visible = false;

  text3 = createSprite(displayHeight/2+734,displayWidth/2-490,10,width);
  text3.addImage(InformationImg4);
  text3.scale = 0.4;
  text3.visible = false;

  text5 = createSprite(displayHeight/2+734,displayWidth/2-600,10,width);
  text5.addImage(InformationImg3);
  text5.scale = 0.4;
  text5.visible = false;



  Meteor = createSprite(displayHeight/2-300,displayWidth/2-1000,width,50);
  Meteor.addImage(meteor);
  Meteor.scale = 0.2;
  Meteor.velocityX = 35;
  Meteor.velocityY = 35;

  BLAST = createSprite(displayHeight/2+700,displayWidth/2-1,width,50);
  BLAST.addAnimation("blast",Blast1);
  BLAST.scale = 3.5;
  BLAST.visible = false;
  
}