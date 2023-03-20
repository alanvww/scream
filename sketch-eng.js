let engText = `Laugh at me for wanting everything
A better world
Irresponsible politicians
Why Why Why
Is there a better world
The "what if" in my mouth
Shouting becomes the norm
Say it out loud
Hear our voices
Our voice is continuous
We are you
You are us
I am by your side
Powerless to deny
The climate is changing
The glaciers are melting
The ice caps are melting
Deeply inhaling greenhouse gases
The creatures are already charred
The fires of war in the distance
You and I are in the middle of it
Poverty
Inequality
I want to shout
I'll scream in your ears
The race needs justice
Equality Equality Equality
Justice is the medicine
Cure for the heart
What I think
I am on my side
How I think
I'm telling you out loud
That's what I think
Thinking of how to invent
The chains that tied me
To hold me
The world was once one-sided
You and I
For a better life
Tears on my cheeks
Justice Justice Justice`;

let displayTime = 1500; // 5 seconds in milliseconds
let startTime;

let chosenWord;

let playOn = true;

// Preload assets
function preload() {
	fontBold = loadFont('assets/NotoSansSC-Bold.otf');
}

// Set up canvas and initialize game
function setup() {
	let density = displayDensity();
	pixelDensity(density);
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
	textFont(fontBold);
	textAlign(CENTER, CENTER);

	// Clean up the text
	engText = breakTextIntoLines(engText.toUpperCase());

	startTime = millis();

	background(0);

	stroke(255);
	strokeWeight(5);
	noFill();

	for (let i = 0; i < engText.length; i++) {
		let words = engText[i].split(' ');
		let fontSize = 12;
		let textWidth = 0;

		// Determine the font size needed to fit the text within the maximum width
		while (textWidth < width / 1.22 && fontSize < 400) {
			textSize(fontSize);
			textWidth = textWidthForWords(words);
			fontSize += 1;
		}
		let lineNum = (i + 1) % 7;
		let x = width / 2;
		let y = (height / 9) * lineNum + height / 8;
		// Draw the text at the current position with the determined font size
		textSize(fontSize - 1);
		text(engText[i], x, y);
	}

	chosenWord = Math.floor(random(engText.length));
}

function mousePressed() {
	playOn = !playOn;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function doubleClicked() {
	window.location.href = 'index.html';
}

// Draw game elements
function draw() {
	if (playOn && millis() - startTime < displayTime) {
		stroke(11, 9, 105, 60);
		noFill();

		let words = engText[chosenWord].split(' ');
		let fontSize = 12;
		let textWidth = 0;

		// Determine the font size needed to fit the text within the maximum width
		while (textWidth < width / 1.22 && fontSize < 400) {
			textSize(fontSize);
			textWidth = textWidthForWords(words);
			fontSize += 1;
		}

		let x, y;

		let lineNum = (chosenWord + 1) % 7;
		x = width / 2;
		y = (height / 9) * lineNum + height / 8;

		textSize(fontSize - 1);
		text(engText[chosenWord], x, y);
	} else {
		background(0);
		stroke(255);
		noFill();
		for (let i = 0; i < engText.length; i++) {
			let words = engText[i].split(' ');
			let fontSize = 12;
			let textWidth = 0;

			// Determine the font size needed to fit the text within the maximum width
			while (textWidth < width / 1.22 && fontSize < 400) {
				textSize(fontSize);
				textWidth = textWidthForWords(words);
				fontSize += 1;
			}
			let lineNum = (i + 1) % 7;
			let x = width / 2;
			let y = (height / 9) * lineNum + height / 8;
			// Draw the text at the current position with the determined font size
			textSize(fontSize - 1);
			text(engText[i], x, y);
		}
		startTime = millis();
		chosenWord = Math.floor(random(engText.length));
	}
}

function breakTextIntoLines(text) {
	let lines = text.split('\n'); // split the text into an array of lines
	return lines;
}

// Helper function to calculate the total width of a set of words at the current font size
function textWidthForWords(words) {
	let totalWidth = 0;
	for (let i = 0; i < words.length; i++) {
		totalWidth += textWidth(words[i] + ' ');
	}
	return totalWidth;
}
