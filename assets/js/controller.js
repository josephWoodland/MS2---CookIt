// Import data and functions

import * as model from "./model.js";
import * as input from "./views/input.js";
import * as clearStorage from "./views/clear.js";
import * as save from "./views/save.js";
import * as pdf from "./views/pdf.js";
import * as home from "./views/home.js";
import * as settings from "./views/settings.js";
import * as recipe from "./views/recipe.js";
import * as form from "./views/form.js";
import * as plans from "./views/plans.js";

// Global scope function so it can be used in the HTML
window.getID = getID;
window.pdfRecipe = pdf.recipe;
window.saveRecipe = save.saveRecipe;
window.home = home.welcomePage;
window.closeModal = input.closeModal;
window.saveDay = save.savePlannerDay;
window.saveWeekly = save.getPlanName;
window.savePlan = save.savePlan;
window.savePlanDay = save.savePlanDay;
window.renderRecipes = recipe.renderRecipes;
window.openSettings = settings.openSettings;
window.editSaveName = save.editSaveName;
window.deleteItem = save.deleteItem;
window.closeModal = input.closeModal;
window.formSubmit = model.formSubmit;
window.reloadPage = reloadPage;
window.getSavedName = save.getSavedName;
window.renderSavedRecipe = recipe.renderSavedRecipe;
window.clearStorage = clearStorage.clearPopup;
window.renderPlans = plans.renderPlans;

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
const recipeCardBtn = document.querySelector(".recipe__right-close");
const recipeCardBack = document.querySelector("#backRecipe");
const recipeCardPdf = document.querySelector("#pdfRecipe");
const recipeCardSave = document.querySelector("#saveRecipe");
const homeBtn = document.getElementById("homeDay");
const saveBtn = document.querySelector("#saveDay");
const pfdBtn = document.querySelector("#pdfDay");
const deleteBtn = document.querySelector("#delete");

// Page event listeners
btnStart?.addEventListener("click", function () {
  input.openModal();
});
// Event to close the modal
modal?.addEventListener("click", input.closeModal);
// on clicking on the close icon
close?.addEventListener("click", input.closeModal);
// on pressing the esc key
document.addEventListener("keydown", input.escPress);
// Event to collect Input data
formBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  model.formSubmit(e);
});

// Events to close recipeCard modal
recipeCardBtn?.addEventListener("click", input.closeModal);
recipeCardBack?.addEventListener("click", input.closeModal);

// Events for the user to be able to handle data
deleteBtn?.addEventListener("click", clearStorage.clearPopup);
saveBtn?.addEventListener("click", save.savePlan);
homeBtn?.addEventListener("click", function () {
  console.log("click");
});
recipeCardSave?.addEventListener("click", save.saveRecipe);
recipeCardPdf?.addEventListener("click", pdf.recipe);

// Function recives the ID from the recipe name clicked
function getID(id) {
  input.openModal();
  model.getRecipeByID(id);
}

function init() {
  model.starterMessage();
  model.fetchSavedData();
}

function reloadPage() {
  window.location.reload();
}

init();
