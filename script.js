var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute ("src", randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML =
    "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "🎲 Draw! 🎲";
  }




// Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.
