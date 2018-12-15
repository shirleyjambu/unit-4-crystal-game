// Initialise
var randomNumber;
var arrCrystalValues;
var winCounter = 0;
var lossCounter = 0;

// Start of Functions
function setGame() {
  randomNumber = generateRandomNumber();
  $("#randomNumber").text(randomNumber);
  $("#winDisplay").text(winCounter);
  $("#lossDisplay").text(lossCounter);
  $("#totalDisplay").text(0);
  $("#messageDisplay").empty();
  arrCrystalValues = generateRandomArray();
  setCrystals(arrCrystalValues);
}


function generateRandomArray() {
  // Random number between 1 to 12
  var arrNum = [];
  for (var i = 0; i < 4; i++) {
    arrNum.push(Math.floor(Math.random() * 12 + 1));
  }

  for (var i = 0; i < arrNum.length; i++) {
    console.log("crystal value " + (i + 1) + " : " + arrNum[i]);
  }
  return arrNum;
}

function generateRandomNumber() {
  // Random number between 19 to 120
  return Math.floor(Math.random() * 120 + 19);
}

function setCrystals(arrCrystalValues) {
  $("#crystals").empty();
  for (var i = 0; i < arrCrystalValues.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("img img-thumnail crystal-image");
    imageCrystal.attr("src", "assets/images/crystal" + (i + 1) + ".jpg");
    imageCrystal.attr("data-crystalvalue", arrCrystalValues[i]);
    $("#crystals").append(imageCrystal);
  }
}

function setTotalDisplay(dataVal) {
  var total = parseInt($("#totalDisplay").text()) + dataVal;
  $("#totalDisplay").text(total);
  if (total >= randomNumber) {
    if (total > randomNumber) {
      // Lose
      $("#messageDisplay").text("You Lose !");
      lossCounter++;
    } else {
      // Win
      $("#messageDisplay").text("You Win !");
      winCounter++;
    }
    // add button
    var $btn = $("<button>");
    $btn.addClass("play-button");
    $btn.attr("id", "play");
    $btn.text("Play Again");
    $("#messageDisplay").append($btn);
  }
}
// End Of Functions

$(document).ready(function () {
  setGame();

  $("#crystals").on("click", ".crystal-image", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    setTotalDisplay(crystalValue);
  });


  $("#messageDisplay").on("click", "#play", function () {
    setGame();
  });

});
