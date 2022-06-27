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

// SUBMIT --> THANK YOU
document.querySelector(".btn__submit").addEventListener("click", function () {
  document.querySelector(".rating").classList.add("hidden");
  document.querySelector(".thanks").classList.remove("hidden");
});
