const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  ball,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_option={
        isStatic: true
    }       

   ground= Bodies.rectangle(200,390,200,20,ground_option);
    World.add(world,ground);

   var ball_options={
         restitution:1.5
   }

   ball=Bodies.circle (200,200,20,ball_options);
   World.add(world,ball);



}

function draw(){
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,200,20);
    ellipseMode(CENTER);
    ellipse(ball.position.x ,ball.position.y, 20,20);
    
    
}
