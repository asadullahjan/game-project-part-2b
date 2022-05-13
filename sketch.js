/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/5;
	treePos_y = height/1.5;

	canyon = {x_pos:50,width: 100};
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	

	//////////////////TREE////////////
	noStroke();
	fill(128,113,83);
	ellipse(treePos_x,
			treePos_y,
			40,
			195);
	fill(58, 95, 11 );
	ellipse(treePos_x-40,
			treePos_y-60,
			70);
	ellipse(treePos_x,
			treePos_y-40,
			70);
	ellipse(treePos_x+40,
			treePos_y-60,
			70);
	ellipse(treePos_x,
			treePos_y-90,
			70);

			noStroke();
			fill(0, 155, 0);
			rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground


	//////////canyon///////////
	noStroke();
	fill(100, 155, 255);
	rect(canyon.x_pos,floorPos_y,canyon.width,200);
	fill(15,94,156);
	rect(canyon.x_pos,floorPos_y+100,canyon.width,100);
	

	///////////game character///////////////
	fill (120,120,120);
	ellipse(gameChar_x,gameChar_y-56,40);
	fill(0);
	ellipse(gameChar_x-10,gameChar_y-56,5);
	ellipse(gameChar_x+10,gameChar_y-56,5);

	fill (0,0,225);
	rect (gameChar_x-15,gameChar_y-37,30,30);

	fill (0);
	rect(gameChar_x-15,gameChar_y-7,10,10);
	rect(gameChar_x+5,gameChar_y-7,10,10);

	
}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
