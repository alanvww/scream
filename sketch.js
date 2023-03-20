let chnText = `你笑我什麼都要
為更美好的世界
不負責任統治者
為什麼
不平等
拴住我
大聲說
有沒有美好世界
我口中的如果
吶喊成為常態
聽見我們的聲音
我們的聲音不斷
我們是你
你也是我們
無力否認
氣候變化
冰川正在融化
冰蓋正在消融
生靈已經塗炭了
貧窮與不平等
深深地吸溫室氣體
遠方的戰火
你我也在戰火之間
正在我的身邊
我要大聲說
在你的耳邊大叫
種族需要正義
公平公平公平
正義是良藥
治好你心裡的病
在身邊
拴住我的枷鎖
我是怎麼想的
我是這麼想的
大聲的告訴你
我就是這麼想的
你我沒有不同
我在你身邊
公正公正公正
世界曾是單面的
為更美好的生活
淚水在我臉頰`;
let engText = '';

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
	textSize(300);
	textAlign(CENTER, CENTER);

	// Clean up the text
	chnText = breakTextIntoLines(chnText);

	startTime = millis();

	background(0);

	stroke(255);
	strokeWeight(5);
	noFill();

	for (let i = 0; i < chnText.length; i++) {
		let x, y;
		if (i == 18) {
			x = width / 2;
			y = height / 2;
		} else {
			let lineNum = (i + 1) % 7;
			x = width / 2;
			y = (height / 10) * lineNum + height / 7;
		}

		if (chnText[i].length == 8) {
			textSize(250);
		} else if (chnText[i].length == 6) {
			textSize(350);
		} else {
			textSize(300);
		}
		text(chnText[i], x, y);
	}

	chosenWord = Math.floor(random(chnText.length));
}

function mousePressed() {
	playOn = !playOn;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function doubleClicked() {
	window.location.href = 'eng.html';
}

// Draw game elements
function draw() {
	if (playOn && millis() - startTime < displayTime) {
		stroke(11, 9, 105, 60);
		noFill();

		let x, y;
		if (chosenWord == 18) {
			x = width / 2;
			y = height / 2;
		} else {
			let lineNum = (chosenWord + 1) % 7;
			x = width / 2;
			y = (height / 10) * lineNum + height / 7;
		}

		if (chnText[chosenWord].length == 8) {
			textSize(250);
		} else if (chnText[chosenWord].length == 6) {
			textSize(350);
		} else {
			textSize(300);
		}
		text(chnText[chosenWord], x, y);
	} else {
		background(0);
		stroke(255);
		noFill();
		for (let i = 0; i < chnText.length; i++) {
			let x, y;
			if (i == 18) {
				x = width / 2;
				y = height / 2;
			} else {
				let lineNum = (i + 1) % 7;
				x = width / 2;
				y = (height / 10) * lineNum + height / 7;
			}

			if (chnText[i].length == 8) {
				textSize(250);
			} else if (chnText[i].length == 6) {
				textSize(350);
			} else {
				textSize(300);
			}
			text(chnText[i], x, y);
		}
		startTime = millis();
		chosenWord = Math.floor(random(chnText.length));
	}
}

function breakTextIntoLines(text) {
	let lines = text.split('\n'); // split the text into an array of lines
	return lines;
}
