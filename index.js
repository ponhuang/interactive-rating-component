"use strict";

// BUTTONS EFFECT
const btnSubmit = document.querySelector(".btn__submit");

btnSubmit.addEventListener("click", function () {
  btnSubmit.style.backgroundColor = "white";
  btnSubmit.style.color = "hsl(25, 97%, 53%)";
});

const btnScore = document.querySelectorAll(".btn__score");

for (let i = 0; i < btnScore.length; i++) {
  btnScore[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// Seleted Score Value
let value = document.querySelectorAll(".btn__score");
let rating = "";

for (let i = 0; i < value.length; i++) {
  value[i].addEventListener("click", function () {
    rating = this.innerText;
    console.log(rating);
    return;
  });
}

// SUBMIT button --> THANK YOU
document.querySelector(".btn__submit").addEventListener("click", function () {
  document.querySelector(".rating").classList.add("hidden");
  document.querySelector(".thanks").classList.remove("hidden");

  document.querySelector(
    ".thanks__selected"
  ).textContent = `You selected ${rating} out of 5`;
});
