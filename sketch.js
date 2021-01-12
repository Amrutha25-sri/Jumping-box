var canvas,edges;
var music;
var a,b,c,d,box;

function preload(){
   // music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites();

    //create 4 different surfaces
a = createSprite(300,570,180,20);
a.shapeColor = "green";
a.debug = true;
b = createSprite(695,570,180,20);
b.shapeColor = "violet";
c = createSprite(105,570,180,20);
c.shapeColor = "red";
d = createSprite(490,570,180,20);
d.shapeColor = "brown";

    //create box sprite and give velocity
box = createSprite(50,20,30,30);
box.shapeColor = "white";
box.debug = true;

box.x = Math.round(random(20,750));
box.velocityX = 4;
box.velocityY = 4;
}

function draw() {
    background("gold");
    //create edgeSprite
createEdgeSprites();
box.bounceOff(edges);
bounceoff(b,box);
bounceoff(a,box)

if (box.isTouching(b) ){
    box.shapeColor = "violet";
}

if (box.isTouching(a) ){
    box.shapeColor = "green";
}

drawSprites();
    //add condition to check if box touching surface and make it box
}
