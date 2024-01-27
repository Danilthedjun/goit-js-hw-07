"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const userInput = document.querySelector("input");
const divBoxes = document.querySelector("#boxes")

 
function createButtonHandler(event) {
 divBoxes.innerHTML = "";
  for (let i = 0; i < event; i++) {
  if (userInput.value >= 1 && userInput.value <= 100) {
const box = document.createElement("div");
box.style.width = 30+(10* i) + "px";
box.style.height = 30+(10* i) + "px";
box.style.backgroundColor = getRandomHexColor();
divBoxes.append(box);
}
  }

}


function btn(event) {
  event.preventDefault();
  const valueNum = userInput.value;
  const valueNumB = parseInt(valueNum, 10);
  if (valueNumB) {
    createButtonHandler(valueNumB);
    
  }
     userInput.value = "";
}

function destroyButtonHandler() {
  divBoxes.innerHTML= "";
}



createButton.addEventListener("click", btn);
userInput.addEventListener("imput", createButtonHandler)
destroyButton.addEventListener("click", destroyButtonHandler);














// console.log(userInput)

