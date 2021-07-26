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

window.showForm = form.showForm;
window.formSubmit = model.formSubmit;
window.getID = getID;
window.savePlan = save.savePlan;
window.recipePage = recipe.renderRecipe;
window.getSavedName = save.getSavedName;
window.renderSavedRecipes = recipe.renderSavedRecipe;
window.renderPlans = plans.renderPlans;
window.renderRecipePage = recipe.renderRecipePage;
window.renderPlanPage = recipe.renderPlanPage;
window.renderSettingsPage = recipe.renderSettingsPage;


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
