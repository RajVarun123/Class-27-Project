const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wood, string, bob;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  wood = new Wood(200,40,40,20);
  bob = new Bob(200,100,10);
  string = new String(wood.body, bob.body);
}

function draw() {
  background(0);
  Engine.update(engine);
  
  wood.display();
  string.display();
  bob.display();

  if(keyDown("space")) {
    bob.body.position.x = mouseX;
    bob.body.position.y = mouseY;
  }
}