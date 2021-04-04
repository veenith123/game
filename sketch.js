const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, backgroundImage;
var polygon,ground;
var polygon;
var slingShot;
var polygon_img;

var gameState = 0;
var playerCount;

var database;
var allPlayers;
var form, player, game;
var brackgroundImg;
var bg1_img, bg2_img;
var slings;
var sling1,sling2,sling3;
var slinga,slingb,slingc;

var sling1_img,sling2_img,sling3_img;
var slinga_img,slingb_img,slingc_img;



function preload() {
bg1_img = loadImage("images/Formbg.png");
bg2_img = loadImage("images/Gamebg.png");
sling1_img = loadImage("images/sling1.png");
sling2_img = loadImage("images/sling2.png");
sling3_img = loadImage("images/sling3.png");
slinga_img = loadImage("images/sling1.png");
slingb_img = loadImage("images/sling2.png");
slingc_img = loadImage("images/sling3.png");
polygon_img=loadImage("images/smoke.png");
}

function setup(){
  canvas = createCanvas(1536,860);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  database = firebase.database();
  game = new Game();  
  game.getState();
  game.start();

  polygon = Bodies.circle(50,200,10);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:78,y:65});
}


function draw(){
background(bg1_img);
if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
if(gameState === 2){
  game.end();
}
imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}