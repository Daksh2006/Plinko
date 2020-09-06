const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,division1,division2,division3;
var division4,division5,division6,division7;
var particle1,particle2,particle3,particle4;
function preload() {

}

function setup(){
    var canvas = createCanvas(200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    division1 = new Division(100,height,10,400);
    division2 = new Division(50,height,10,400);
    division3 = new Division(0,height,10,400);
    division4 = new Division(150,height,10,400);
    division5 = new Division(200,height,10,400);

    particle1 = new Particle(180,100,10);
    particle2 = new Particle(20,100,10);
    particle3 = new Particle(100,100,10);
    particle4 = new Particle(60,70,10);
    particle5 = new Particle(140,70,10);
    particle6 = new Particle(170,180,10);
    particle7 = new Particle(100,50,10);
    particle8 = new Particle(100,150,10);
    particle9 = new Particle(150,150,10);
    particle10 = new Particle(50,150,10);
    particle11 = new Particle(30,180,10);
}

function draw(){
    background(0);
    ground.display();
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();  
    particle1.display();
    particle2.display();
    particle3.display();
    particle4.display();
    particle5.display();
    particle6.display();
    particle7.display();
    particle8.display();
    particle9.display();
    particle10.display();
    particle11.display();
    spawnPlinko();
}
