var dog,dogImg,happyDog;
var database;
var foodS,FoodStock;

//Create variables here

function preload()
{
	//load images here
 dogImg=loadImage("images/dogImg.png");
 happyDog=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500,500);

  dog=createSprite(250,250,20,20);
  dog.addImage(dogImg);
  

  database = firebase.database();

  FoodStock=database.ref('Food');
  FoodStock.on("value",readStock);
}


function draw() { 
  background(46,139,87);
  
  if(keyWentDoyn(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
   foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({Food:x})
}

