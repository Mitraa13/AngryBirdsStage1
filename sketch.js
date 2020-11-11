const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box1,ground,pig,bird,log,log1,pig1,box4,log2,log3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground =new Ground(600,390,1200,20);

    box = new Box(700,320,70,70);
    box1 = new Box(920,320,70,70);
    pig = new Pig(810,350);
    log = new Log(810,260,300,PI/2);
    box2 = new Box(700,240,70,70);
    box3 = new Box (920,240,70,70);
    log1 = new Log(810,180,300,PI/2);
    pig1 = new Pig(810,240);
    box4 = new Box(810,140,70,70);
    log2 = new Log(755,120,150,PI/5);
    log3 = new Log(850,120,150,-PI/5);
    bird = new Bird(100,200);
   
}

function draw(){
    background(0);
    Engine.update(engine);

    box.display();
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    pig.display();
    bird.display();
    log.display();
    log1.display();
    pig1.display();
    box4.display();
    log2.display();
    log3.display();
    

}