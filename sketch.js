
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, boy, stone, rope;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,695,800,10)
	tree = new Tree(600,500,400,400)
	boy = new Boy(200,650,65,90)
	stone = new Stone(50,600,25,25);
	rope = new Rope(stone.body,{x:160,y:610})

	mango1 = new Mango(600,400,50,50)
	mango2 = new Mango(670,370,60,60)
	mango3 = new Mango(540,450,40,40)
	mango4 = new Mango(690,470,50,50)
	mango5 = new Mango(500,400,80,80)
	mango6 = new Mango(770,450,70,70)
	mango7 = new Mango(550,350,40,40)
	mango8 = new Mango(500,500,60,60)
	mango9 = new Mango(620,480,70,70)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("lightblue");
  
	ground.display("green");
	tree.display();
	boy.display();
	stone.display();
	rope.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);

	drawSprites();
 
}

function mouseDragged() {

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	
}

function mouseReleased() {

	rope.fly();
}

function detectCollision(st0ne,mango){

	mangoPos = mango.body.position;
	stonePos = st0ne.body.position;

	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);

	if (distance < -mangoPos.width/2 + stonePos.width/2 || distance < -mangoPos.height/2 + stonePos.height/2){

		Matter.Body.setStatic(mango.body,false);
	}

}