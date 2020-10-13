const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops1;
var box1;
var umbrella;
var boy, boy_img; 
var thunder1, thunder_img1;
var thunder2, thunder_img2;
var thunder3, thunder_img3;
var thunder4, thunder_img4;
// var drops_array = [drops]
var random_number = Math.floor(Math.random() * 10) - 5;
console.log(random_number);


function preload() {
    boy_img = loadImage("../images/Walking Frame/walking_1.png")
    thunder_img1 = loadImage("../images/thunderbolt/1.png");
    thunder_img2 = loadImage("../images/thunderbolt/2.png");
    thunder_img3 = loadImage("../images/thunderbolt/3.png");
    thunder_img4 = loadImage("../images/thunderbolt/4.png");
    
}

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    //box1 = Bodies.rectangle(200, 100, 80, 80)
    drops1 = new Drops(300, 100, 50, 50);
    umbrella = new Umbrella(300, 300, 100, 30);
    boy = createSprite(300, 420);
    boy.addImage(boy_img);
    thunder1 = createSprite(300, 10);
    thunder1.addImage(thunder_img1);

    thunder2 = createSprite(300, 10);
    thunder2.addImage(thunder_img2);

    thunder3 = createSprite(300, 10);
    thunder3.addImage(thunder_img3);

    thunder4 = createSprite(300, 10);
    thunder4.addImage(thunder_img4);

    Engine.run(engine);

}

function update1(){
    boy_img.resize(350, 430);
    thunder_img1.resize(400, 400);
    if(drops1.mouseY === 1200){
        drops1.mouseX = 100;
        drops1.mouseY = 100; 
    }
}

function draw(){

    background(0);
    Engine.update(engine);
    ///////////////////////////
    switch (0) {
        case 0:
            thunder1.display();
          break;
        case 1:
            thunder2.display();
          break;
        case 2:
            thunder3.display();
          break;
        case 3:
            thunder4.display();
          break;
        default:
    }
    ///////////////////////////
   
    //rect( box1.position.x,box1.position.y,80,80);
    drops1.display();
    umbrella.display();
    boy.display();
   
    update1();
}
