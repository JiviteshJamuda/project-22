const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gSlider, ground; 
var box=[];

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

    ground = new Ground(200,398,400,10);
}

function mousePressed(){
    if(mouseY<400){
        box.push(new Box(mouseX,mouseY,random(10,50),random(10,50)));

    }
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    for (var i = 0 ; i < box.length ;i++ ){
        box[i].display();
    }
   
    var fVal = gSlider.value()
}

