// Import data and functions

import * as model from "./model.js";
import * as input from "./views/input.js";
import * as clearStorage from "./views/clear.js";
import * as save from "./views/save.js";
import * as home from "./views/home.js";
import * as settings from "./views/settings.js";
import * as recipe from "./views/recipe.js";
import * as table from "./views/table.js";
import * as plans from "./views/plans.js";
import * as options from "./views/options.js";
import * as form from "./views/form.js";

// Global scope function so it can be used in the HTML
window.renderForm = form.renderForm;
window.getID = getID;
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
window.renderSavedPlan = table.renderSavedPlan;
window.renderButtonOptions = options.renderOptions;
window.collectBackSelect = options.selectBackgroundColour;
window.collectTextSelect = options.selectTextColour;
window.collectBtnSelect = options.selectBtnColour;

window.onclick = function () {
  const id = e.target.id;
  const div = e.target.parentNode.parentNode.closest("div");
  const dayPlan = model.savedPlanDay[0];
  const weekPlan = model.savedPlanWeek[0];

  if (div.className === "settings__container week") {
    table.renderWeekly(weekPlan[id]);
    input.closeModal();
  } else if (div.className === "settings__container day") {
    table.renderDay(dayPlan[id]);
    input.closeModal();
  }
};

const formBtn = document.querySelector(".form-btn");

// Close modal on pressing the esc key
document.addEventListener("keydown", input.escPress);
// Event to collect Input data
formBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  model.formSubmit(e);
});

/**
 * Get recipe ID
 *
 * @param {String} id  - Recipe id
 * @return {Stringt} getRecipeID - Function
 */
function getID(id) {
  input.openModal();
  model.getRecipeByID(id);
}
/**
 
 * @return call initial start up functions
 */
function init() {
  model.starterMessage();
  model.fetchSavedData();
}
/**
 * 
 * @return page reload
 */
export function reloadPage() {
  window.location.reload();
}

init();
