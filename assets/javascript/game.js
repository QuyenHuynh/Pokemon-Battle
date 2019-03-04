//global variables
var characterSelected = false;
var opponentSelected = false;
var myPokemon;
var currentOpponent;
var gameOver = false;
var enemyArray = [];
var enemiesDefeated = 0;

//pokemon constructor
function Pokemon(name, health, baseAttack, counterAttack) {
  this.name = name;
  this.health = health;
  this.baseAttack = baseAttack;
  this.counterAttack = counterAttack;
}
//initializing pokemon
var clefairy = new Pokemon("Clefairy", 150, 8, 10);
var milktank = new Pokemon("Milktank", 180, 7, 7);
var skitty = new Pokemon("Skitty", 120, 10, 15);
var snubbull = new Pokemon("Snubbull", 130, 8, 10);

var pokemonArr = [clefairy, milktank, skitty, snubbull];

//choose your pokemon
if (characterSelected === false) {
  $("#clefairy").on("click", function () {
    myPokemon = clefairy;
    characterSelected = true;
    console.log("The pokemon I choose is: " + myPokemon.name);
    console.log("characterSelected flag: " + characterSelected);
    chooseEnemy();
  })

  $("#milktank").on("click", function () {
    myPokemon = milktank;
    characterSelected = true;
    console.log("The pokemon I choose is: " + myPokemon.name);
    console.log("characterSelected flag: " + characterSelected);
    chooseEnemy();
  })

  $("#skitty").on("click", function () {
    myPokemon = skitty;
    characterSelected = true;
    console.log("The pokemon I choose is: " + myPokemon.name);
    console.log("characterSelected flag: " + characterSelected);
    chooseEnemy();
  })
  $("#snubbull").on("click", function () {
    myPokemon = snubbull;
    characterSelected = true;
    console.log("The pokemon I choose is: " + myPokemon.name);
    console.log("characterSelected flag: " + characterSelected);
    chooseEnemy();
  })
};

//Choose your opponent
function chooseEnemy() {
  if (characterSelected === true) {
    //removes myPokemon from pokemonArr to create array of opponents
    for (i = 0; i.pokemonArr.length - 1; i++) {
      if (pokemonArr[i] === myPokemon) {
        pokemonArr.splice(i, 1);
        Array.prototype.push.apply(enemyArray, pokemonArr);
        console.log("Enemies: " + enemyArray);
      }
      console.log("Enemies: " + enemyArray);
    }
  }
}

//Fight
$(document).on("click", "#attackbutton", function () {
  if (characterSelected && opponentSelected) {
  }
});

//check if pokemon has fainted
function hasFainted(Obj) {
  if (Obj.health < 1) {
    return true;
  } else {
    return false;
  }
}

//winning conditions
function winGame() {
  if (enemiesDefeated = 3 && myPokemon.health > 0) {
    gameOver = true;
    console.log("Congrats! You win!");
  }
  return true;
}

//reset the game



//Main/Execution
//========================================================