const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase;
var player;
var computer,computerBase;
 var arrow


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerBase=new PlayerBase(300,random(450,height-300),180,150) 
  player=new Player(285,playerBase.body.position.y-153,50,180)
 

   computerBase= new ComputerBase(
    width - 300,
    random( 450,height - 300),
    180,
    150
   );
  computer = new computer(
    width - 280,
    computerbase.body.poition.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.position.y - 180,
    120,
    120
  );


}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   
  playerBase.display();
  player.display();

  computerBase.display();
  computer.display();

  playerArcher.display();
  computerArcher.display();


}
