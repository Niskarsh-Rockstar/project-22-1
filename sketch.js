const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var myWorld,myEngine;
var ground,ball
function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world
  var options={
  isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,options);
  World.add(myWorld,ground)
  var balloptions={
    restitution:1
    }
  ball=Bodies.circle(200,200,20,balloptions);
  World.add(myWorld,ball)

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("Black");  
  Engine.update(myEngine);
  fill("Red")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);

  
}