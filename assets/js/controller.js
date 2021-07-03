// Import data and functions

import * as model from "./model.js";
import * as input from "./views/input.js";

// Element Selectors //
const modal = document.querySelector(".overlay");

// Input Selectors //

// Conatanier Selectors //
const mainContainer = document.querySelector(".main__center");
const mainLeft = document.querySelector(".main__left");

// Button Selectors //
const btnStart = document.querySelector(".main__center-btn");
const close = document.querySelector(".form__right-close");
const formBtn = document.querySelector(".form-btn");

// Page event listeners
// Event to to open the modal

btnStart.addEventListener("click", input.openModal);
// Event to close the modal
// on clicking the outside of the form
modal.addEventListener("click", input.closeModal);
// on clicking on the close icon
close.addEventListener("click", input.closeModal);
// on pressing the esc key
document.addEventListener("keydown", input.escPress);
// Event to collect Input data
formBtn.addEventListener('click', function(e){
  e.preventDefault();
  model.formSubmit(e)
})

console.log(btnStart);
function init() {
  model.starterMessage();
}
// model.userData();

init();
