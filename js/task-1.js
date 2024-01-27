"use strict";

const tootalCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${tootalCategories.length}`);

const a = document.querySelectorAll(".item h2")
const b = document.querySelectorAll(".item ul")


a.forEach((elm, i) => {
    console.log(
`Category: ${elm.textContent}
Elements: ${b[i].childElementCount}`
    );
});

