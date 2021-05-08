const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;


ground1=new Ground(600,height,1200,20);
ground2=new Ground(400,250,300,20);
ground3=new Ground(800,300,300,20);

box1=new Box(400,220);
box2=new Box(370,220);
box3=new Box(340,220);
box4=new Box(310,220);
box5=new Box(280,220);
box6=new Box(355,180);
box7=new Box(325,180);
box8=new Box(385,180);
box9=new Box(295,180);
box10=new Box(315,140);
box11=new Box(345,140);
box12=new Box(375,140);
box13=new Box(340,100);

box14=new Box(770,270);
box15=new Box(740,270);
box16=new Box(710,270);
box17=new Box(800,270);
box18=new Box(800,270);
box19=new Box(830,270);
box20=new Box(860,270);
box21=new Box(770,230);
box22=new Box(740,230);
box23=new Box(800,230);
box24=new Box(830,230);
box25=new Box(755,190);
box26=new Box(785,190);
box27=new Box(815,190);
box28=new Box(785,150);


}
function draw(){

    text("Drag the Hexagonal stone and release it,to launch it towards the blocks ",380,110)
    
ground1.display();
ground2.display();
ground3.display();

box28.display();
box27.display();
box26.display();
box25.display();
box24.display();
box23.display();
box22.display();
box21.display();
box20.display();
box19.display();
box18.display();
box17.display();
box16.display();
box15.display();
box14.display();
box13.display();
box12.display();
box11.display();
box10.display();
box9.display();
box8.display();
box7.display();
box6.display();
box5.display();
box4.display();
box3.display();
box2.display();
box1.display();
}