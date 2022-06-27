# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Desktop version
![](screen-shot/desktop.png)

Rating hover effect
![](screen-shot/rating-hover.png)

Rating active effect
![](screen-shot/rating-active.png)

Submit button effect
![](screen-shot/submit-active.png)

Thank you result
![](screen-shot/thank-you.pngg)

Mobile version
![](screen-shot/thank-you.png)

### Links

- Solution URL: (https://github.com/ponhuang/interactive-rating-component)
- Live Site URL: (https://ponhuang.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript interactive function

### What I learned

- Adding rating value aftern user select the value.
  In the beginning, I was overthinking the solution, I checked other's solution, then found out it is quite easy, just using another variable and save the innerText.

```js
let rating = "";

for (let i = 0; i < value.length; i++) {
  value[i].addEventListener("click", function () {
    rating = this.innerText;
    return;
  });
}

document.querySelector(
  ".thanks__selected"
).textContent = `You selected ${rating} out of 5`;
```

- Learn how to add "active" class to current Element

```js
const btnScore = document.querySelectorAll(".btn__score");

for (let i = 0; i < btnScore.length; i++) {
  btnScore[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  }):
}
```

### Useful resources

- [Add active class to current element](https://www.w3schools.com/howto/howto_js_active_element.asp) - This helped me to know to to add active class to current element from W3 SCHOOL

## Author

Pon Huang

- Instagram - [Pon Huang](https://www.instagram.com/ponhuang/)
- Art Blog - [une felt](https://une722.wordpress.com)

## Acknowledgments

Thank [Raj Prasad Sanjel](https://www.frontendmentor.io/profile/RajSanjel) who gave advices to imporve my challenge project.
