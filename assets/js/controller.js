// Import data and functions

import * as model from "./model.js";
import * as input from "./views/input.js";

// Element Selectors //
const modal = document.querySelector(".overlay");

// Input Selectors //
const name = document.getElementById("name");
const time = document.getElementById("time");
const calorie = document.getElementById("calorie");
const diet = document.getElementById("diet");
const allergies = document.getElementById("allergies");
const messure = document.getElementById("messure");

// Conatanier Selectors //
const mainContainer = document.querySelector(".main__center");
const mainLeft = document.querySelector(".main__left");

// Button Selectors //
const btnStart = document.querySelector(".main__center-btn");
const close = document.querySelector('.form__right-close');

// Page event listeners

// Event to to open the modal
btnStart.addEventListener("click", input.openModal);
// Event to close the modal
  // on clicking the outside of the form
modal.addEventListener('click', input.closeModal);
  // on clicking on the close icon
close.addEventListener('click', input.closeModal);
  // on pressing the esc key
document.addEventListener('keydown', input.escPress);

√
function init() {

  model.starterMessage();
}
// model.userData();

init();
