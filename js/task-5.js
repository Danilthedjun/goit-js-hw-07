"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
const btn = document.querySelector(".change-color");

const objBody = document.querySelector("body");

const spanText = document.querySelector("span.color");


function clickHandler(event) {
  objBody.style.backgroundColor = getRandomHexColor();
  spanText.textContent = `${objBody.style.backgroundColor}`;
}

btn.addEventListener("click", clickHandler);