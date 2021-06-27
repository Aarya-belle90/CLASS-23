const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var Gr;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(240,150,50,50);
    box2 = new Box(200,100,100,50);
    Gr = new ground(200,390,400,50);
}

function draw(){
    background("blue");
    Engine.update(engine);
    box1.display();
    box2.display();
    Gr.display();
}