"use strict";

const thisIsIpmut = document.querySelector("input#name-input");
const thisIsOutput = document.querySelector("span#name-output");

function inputHandler(event) {
    if (event.target.value.trim() === "") {
        thisIsOutput.textContent = "Anonymous";
    } else {
        thisIsOutput.textContent = event.target.value.trim();
    }
}

thisIsIpmut.addEventListener("input", inputHandler)
