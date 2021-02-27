"use strict";

const CARROT_SIZE = 80;
const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

function initGame() {
  // 벌레와 당근을 생성한 뒤 field에 추가해줌
  addItem("carrot", 5, "img/carrot.png");
  addItem("bug", 5, "img/bug.png");
}

function addItem(className, count, imgPath) {
  const x1 = 0; //  field x 좌표
  const y1 = 0; //  field y 좌표
  const x2 = fieldRect.width - CARROT_SIZE; // field 가로 길이 값
  const y2 = fieldRect.height - CARROT_SIZE; // field 세로 길이 값
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomeNumber(x1, x2);
    const y = randomeNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomeNumber(min, max) {
  return Math.random() * (max - min) + min;
}

initGame();
