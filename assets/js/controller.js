// Import data and functions

import * as model from "./model.js";
import * as save from "./views/save.js";
import * as settings from "./views/settings.js";
import * as recipe from "./views/recipe.js";
import * as table from "./views/table.js";
import * as plans from "./views/plans.js";
import * as form from "./views/form.js";
import * as clear from "./views/clear.js";

// Global scope function so it can be used in the HTML

window.showForm = form.showForm;
window.formSubmit = model.formSubmit;
window.getID = getID;
window.savePlan = save.savePlan;
window.savePlanDay = save.savePlanDay;
window.recipePage = recipe.renderRecipe;
window.getSavedName = save.getSavedName;
window.renderSavedRecipes = recipe.renderRecipes;
window.renderPlansDay = plans.renderPlansDay;
window.renderPlansWeek = plans.renderPlansWeek;
window.renderRecipePage = recipe.renderRecipePage;
window.renderPlanPage = plans.renderPlanPage;
window.renderSettingsPage = settings.renderSettingsPage;
window.pageReload = reloadPage;
window.editSaveName = save.editSaveName;
window.editSavePlanName = save.editSavePlanName;
window.deleteItem = save.deleteItem;
window.deletePlanItem = save.deletePlanItem;
window.renderSettingsPage = settings.renderSettings;
window.collectBtnSelect = settings.selectBtnColour;
window.collectTextSelect = settings.selectTextColour;
window.collectBackgroundSelect = settings.selectBackgroundColour;
window.renderPlan = plans.renderPlan;
window.clearStorage = clear.clearPopup;
window.renderSavedRecipe = recipe.renderSavedRecipe;

/**
 * @param {Event} e
 * Function to prevent reload on click
 * selects the right functino to call to render a saved plan
 * @return {Plan} function call
 */
window.onclick = function (e) {
  e.preventDefault();
  const id = e.target.id;
  const div = e.target.parentNode.parentNode.closest("div");
  const dayPlan = model.savedPlanDay[0];
  const weekPlan = model.savedPlanWeek[0];
  if (div === null) return;
  if (div.className === "settings__container week") {
    table.renderWeekly(weekPlan[id]);
  } else if (div.className === "settings__container day") {
    table.renderDay(dayPlan[id]);
  }
};

/**
 * Get recipe ID
 *
 * @param {String} id  - Recipe id
 * @return {Stringt} getRecipeID - Function
 */
function getID(id) {
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
