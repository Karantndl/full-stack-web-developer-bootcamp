var playerOne = Math.floor(Math.random() * 6) + 1; //randon num genaretor 1 to 6
var playerTwo = Math.floor(Math.random() * 6) + 1; //randon num genaretor 1 to 6
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

// this will update the picture based on player value for exam dice + 3 .png = dice.3png and it will replace the src code from html
img1.src = "./images/dice" + playerOne + ".png";
img2.src = "./images/dice" + playerTwo + ".png";

// show winner in the <h1>
var title = document.querySelector("h1");

if (playerOne > playerTwo) {
  title.textContent = "🚩 Player 1 Wins!";
} else if (playerTwo > playerOne) {
  title.textContent = "Player 2 Wins! 🚩";
} else {
  title.textContent = "Draw!";
}
