let chnText = `你笑我什么都要
为更美好的世界
不负责任统治者
为什么
有没有美好世界
在耳边讲废话
我口中的如果
呐喊成为常态
大声说
听见我们的声音
我们的声音不断
我们是你
你也是我们
无力否认
气候变化
冰川正在融化
冰盖正在消融
深深地吸温室气体
生灵已经涂炭了
远方的战火
就在身边
你我也在战火之间
为政绩加分
贫穷与不平等
不平等
正在我的身边
我要大声说
在你的耳边大叫
种族需要正义
公平公平公平
正义是良药
治好你心里的病
我是怎么想的
我是这么想的
大声的告诉你
我就是这么想的
想着如何发明
拴住我的枷锁
拴住我
世界曾是单面的
你我没有不同
为更美好的生活`;
let engText = '';

let displayTime = 2000; // 5 seconds in milliseconds
let startTime;

let chosenWord;

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
			let lineNum = i % 7;
			x = width / 2;
			y = (height / 10) * lineNum + height / 6;
		}

		if (chnText[i].length == 8) {
			textSize(250);
		} else {
			textSize(300);
		}
		text(chnText[i], x, y);
	}

	chosenWord = Math.floor(random(chnText.length));
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// Draw game elements
function draw() {
	if (millis() - startTime < displayTime) {
		stroke(11, 9, 105, 60);
		noFill();

		let x, y;
		if (chosenWord == 18) {
			x = width / 2;
			y = height / 2;
		} else {
			let lineNum = chosenWord % 7;
			x = width / 2;
			y = (height / 10) * lineNum + height / 6;
		}

		if (chnText[chosenWord].length == 8) {
			textSize(250);
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
				let lineNum = i % 7;
				x = width / 2;
				y = (height / 10) * lineNum + height / 6;
			}

			if (chnText[i].length == 8) {
				textSize(250);
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
