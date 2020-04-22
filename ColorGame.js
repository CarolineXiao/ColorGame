var numColors = 6;
var colors = generateRandomColors(numColors);
var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setSquares();
	setUpModeButtons();


	resetButton.addEventListener("click", function() {
		resetGame(numColors);
	})

	colorDisplay.textContent = goalColor;
	guessColors();
}

function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numColors = 3;
			}
			else if (this.textContent === "Medium") {
				numColors = 6;
			}
			else {
				numColors = 9;
			}
			resetGame(numColors);
			setSquares();
		})
	}	
}

function guessColors() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor
			if (clickedColor === goalColor) {
				changeColors(goalColor);
				h1.style.backgroundColor = goalColor;
				messageDisplay.textContent = "Correct!";
				messageDisplay.style.color = "green";
				resetButton.textContent = "Play Again";

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
				messageDisplay.style.color = "red";
			}
		})
	}
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(number) {
	var randomColors= [];

	for (var i = 0; i < number; i++) {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var color = "rgb(" + r + ", " + g + ", " + b + ")";
		randomColors.push(color)
	}


	return randomColors;
}

function resetGame(num) {
	colors = generateRandomColors(num);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

function setSquares() {
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

