//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
 
    dogimg=loadImage('images/dogImg.png');
   // happyDogimg=loadImage('images/dogImg1.png');

}

function setup() {
  createCanvas(500,500);
  dog=createSprite(250,350);
  dog.addImage("dog",dogimg);
  dog.scale=0.15;
  database = firebase.database();
foodStock=database.ref('Food');
foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87);
    dog.display();

/*if (keyWentDown (UP_ARROW)){
writeStock(foodS);*/






  drawSprites();
  fill ("white")
text("foodRemaining"+foodS,170,200);
stroke ("white");

  textSize(24);

  
  if(keyWentDown(UP_ARROW)){
   writeStock (foodS);
   dog.addImage(happyDog);

  }
}


function writeStock(x)
{
   if(x<=0){ x=0; }else{ x=x-1; } database.ref('/').update({ Food:x })
   }


function readStock(data){

foodS=data.val();





}

