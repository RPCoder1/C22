const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
 var engine,world,ground,ball

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world=engine.world
var groundOption = {isStatic:true}
var ballOptions = {restitution:1}

  ground = Bodies.rectangle(400,300,800,20,groundOption)
  World.add(world,ground)
  ball=Bodies.circle(400,100,20,ballOptions)
  World.add(world,ball)
}

function draw() {
  background("lime"); 
  Engine.update(engine)
  rectMode(CENTER) 
 rect(ground.position.x,ground.position.y,800,20)
 ellipse(ball.position.x,ball.position.y,20,20)
}