"use strict";
import * as sound from "./sound.js";

const CARROT_SIZE = 110;

export default class Field {
  constructor(carrortCount, bugCount) {
    this.carrortCount = carrortCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }

  init() {
    this.field.innerHTML = "";
    this._addItem("carrot", this.carrortCount, "img/carrot.png");
    this._addItem("bug", this.bugCount, "img/bug.png");
  }

  setClickLister(onItemClick) {
    this.onItemClick = onItemClick;
  }

  _addItem(className, count, imgPath) {
    const x1 = 0; //  field x 좌표
    const y1 = 0; //  field y 좌표
    const x2 = this.fieldRect.width - CARROT_SIZE; // field 가로 길이 값
    const y2 = this.fieldRect.height - CARROT_SIZE; // field 세로 길이 값
    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imgPath);
      item.style.position = "absolute";
      const x = randomeNumber(x1, x2);
      const y = randomeNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }

  onClick = (event) => {
    const target = event.target;

    if (target.matches(".carrot")) {
      // 당근
      target.remove();
      sound.palyCarrot();
      this.onItemClick && this.onItemClick("carrot");
    } else if (target.matches(".bug")) {
      // 벌레

      this.onItemClick && this.onItemClick("bug");
    }
  };
}

function randomeNumber(min, max) {
  return Math.random() * (max - min) + min;
}
