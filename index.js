"use strict";

// BUTTONS EFFECT
const btnSubmit = document.querySelector(".btn__submit");

btnSubmit.addEventListener("click", function () {
  btnSubmit.style.backgroundColor = "white";
  btnSubmit.style.color = "hsl(25, 97%, 53%)";
});

// Seleted Score Value
const btnScore = document.querySelectorAll(".btn__score");

for (let i = 0; i < btnScore.length; i++) {
  btnScore[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";

    rating = this.innerText;
    return;
  });
}

let rating = "1";

// SUBMIT button --> THANK YOU
document.querySelector(".btn__submit").addEventListener("click", function () {
  document.querySelector(".rating").classList.add("hidden");
  document.querySelector(".thanks").classList.remove("hidden");

  document.querySelector(
    ".thanks__selected"
  ).textContent = `You selected ${rating} out of 5`;
});
