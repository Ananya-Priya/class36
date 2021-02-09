var database;
var form, player, playerCount;
var gameState=0;
var game;

function setup()
{
    database=firebase.database();
 

    createCanvas(500,500);
    game=new Game();
    game.getState();
    game.start();

   

   
}


function draw()
{
  //empty
}


