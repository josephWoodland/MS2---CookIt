// Import data and functions

import * as model from "./model.js";
import * as input from "./views/input.js";

// Global scope function so it can be used in the HTML
window.getID = getID;

// Element Selectors //
const modal = document.querySelector(".overlay");
const recpie = document.querySelector(".table__weekly-cell");
// Input Selectors //

// Conatanier Selectors //
const mainContainer = document.querySelector(".main__center");
const mainLeft = document.querySelector(".main__left");

// Button Selectors //
const btnStart = document.querySelector(".main__center-btn");
const close = document.querySelector(".form__right-close");
const formBtn = document.querySelector(".form-btn");

// Page event listeners
// Event to to open the modal - added ? to stop the console error when the btn is not on the screen
btnStart?.addEventListener("click", input.openModal);
// Event to close the modal
// on clicking the outside of the form
modal.addEventListener("click", input.closeModal);
// on clicking on the close icon
close.addEventListener("click", input.closeModal);
// on pressing the esc key
document.addEventListener("keydown", input.escPress);
// Event to collect Input data
formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  model.formSubmit(e);
});
// Evetn to catch when a recipe name has been clicked
recpie.addEventListener("click", function () {
  console.log('click');
});

// Functino recives the ID from the recipe name clicked
function getID(id){
  model.getRecipeByID(id)
}

function init() {
  model.starterMessage();
}
// model.userData();

init();
