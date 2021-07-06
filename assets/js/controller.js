// Import data and functions

import * as model from "./model.js";
import * as input from "./views/input.js";
import * as clearStorage from './views/clear.js'
import * as save from './views/save.js'
import * as pdf from './views/pdf.js'
import * as home from './views/home.js'

// Global scope function so it can be used in the HTML
window.getID = getID;

// Element Selectors //
const modal = document.querySelector(".overlay");
const recpie = document.querySelector(".table__weekly-cell");
const steps = document.querySelector(".recipe__card__method-p");
// Input Selectors //

// Conatanier Selectors //
const mainContainer = document.querySelector(".main__center");
const mainLeft = document.querySelector(".main__left");

// Button Selectors //
const btnStart = document.querySelector(".main__center-btn");
const close = document.querySelector(".form__right-close");
const formBtn = document.querySelector(".form-btn");
const recipeCardBtn = document.querySelector('.recipe__right-close');
const recipeCardBack = document.querySelector('#backRecipe');
const recipeCardPdf = document.querySelector('#pdfRecipe');
const recipeCardSave = document.querySelector('#saveRecipe');
const homeBtn = document.getElementById('homeDay');
const saveBtn = document.querySelector('#saveDay');
const pfdBtn = document.querySelector('#pdfDay');
const deleteBtn = document.querySelector("#delete");


// Page event listeners
// Event to to open the modal - added ? to stop the console error when the btn is not on the screen
btnStart?.addEventListener("click", input.openModal);
// Event to close the modal
// on clicking the outside of the form
modal?.addEventListener("click", input.closeModal);
// on clicking on the close icon
close?.addEventListener("click", input.closeModal);
// on pressing the esc key
document.addEventListener("keydown", input.escPress);
// Event to collect Input data
formBtn?.addEventListener("click", function () {
  model.formSubmit();
});

// Events to close recipeCard modal
recipeCardBtn?.addEventListener("click", input.closeModal);
recipeCardBack?.addEventListener("click", input.closeModal);

// Events for the user to be able to handle data
// Delete button to be able to delete local storage
deleteBtn?.addEventListener('click', clearStorage.clearPopup);
// Btn to save planner to local storage
saveBtn?.addEventListener('click', save.savePlan);
// Btn to return to the welcome page
homeBtn?.addEventListener('click', function(){
  console.log('click');
});
// Btn to Save recipe data
recipeCardSave?.addEventListener('click', save.saveRecipe);
// Btn to creat a pdf pdf of the recipe
recipeCardPdf?.addEventListener('click', pdf.recipe);

// Function recives the ID from the recipe name clicked
function getID(id) {
  // Open the model
  input.openModal();
  // Render weekly plan
  model.getRecipeByID(id);
}

function init() {
  model.starterMessage();
}
// model.userData();

init();
