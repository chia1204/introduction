let isAnimating = false; // 控制線條是否跳動的變數

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (isAnimating) {
    drawBackgroundPattern(true); // 線條跳動
  } else {
    drawBackgroundPattern(false); // 靜止的線條
  }

  textSize(30);
  textAlign(CENTER, CENTER);
  textStyle(NORMAL); // 設定文字樣式為細體
  fill(0); // 設定文字顏色為黑色
  text(
    "我是淡江大學教科一B的邱佳儀，\n學號是413730754，\n興趣是聽音樂和看電影",
    width / 2,
    height / 2
  );
}

function drawMenu() {
  textSize(20);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < menuOptions.length; i++) {
    let x = width / 2;
    let y = 400 + i * 50;
    if (selectedOption === i) {
      fill(180, 220, 255); // Highlight selected option
      rect(x - 100, y - 20, 200, 40, 10);
      fill(0);
    } else {
      fill(0);
    }
    text(menuOptions[i], x, y);
  }
}

function mousePressed() {
  isAnimating = !isAnimating; // 切換線條跳動狀態
  for (let i = 0; i < menuOptions.length; i++) {
    let x = width / 2;
    let y = 400 + i * 50;
    if (
      mouseX > x - 100 &&
      mouseX < x + 100 &&
      mouseY > y - 20 &&
      mouseY < y + 20
    ) {
      selectedOption = i;
      console.log("選擇了：" + menuOptions[i]);
    }
  }
}

function drawBackgroundPattern(animate) {
  background("#ffe5ec"); // 設定背景顏色
  stroke(200); // 設定線條顏色
  for (let x = 0; x < width; x += 20) {
    let offsetX = animate ? random(-5, 5) : 0; // 如果跳動，增加隨機偏移
    line(x + offsetX, 0, x + offsetX, height); // 繪製垂直線
  }
  for (let y = 0; y < height; y += 20) {
    let offsetY = animate ? random(-5, 5) : 0; // 如果跳動，增加隨機偏移
    line(0, y + offsetY, width, y + offsetY); // 繪製水平線
  }
}
