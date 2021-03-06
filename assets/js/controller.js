// Import data and functions
import * as model from "./model.js";
import * as save from "./views/save.js";
import * as settings from "./views/settings.js";
import * as recipe from "./views/recipe.js";
import * as table from "./views/table.js";
import * as plans from "./views/plans.js";
import * as form from "./views/form.js";
import * as clear from "./views/clear.js";

// Global scope functions, so they can be called by user interaction
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
window.renderCurPlan = model.renderCurPlan;

/**
 * @param {Event} e
 * Function to prevent reload on click
 * Selects the right function to call to render a saved plan
 * @return {Object} day plan
 */
window.onclick = function (e) {
  e.preventDefault();
  const plans = document.querySelector("#plans");
  if (plans.classList.contains("active")) {
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
  }
};

/**
 * Get recipe ID
 * @param {String} id  - Recipe id
 * @return {String} getRecipeID - Function
 */
async function getID(id) {
  await model.getRecipeByID(id);
}

/**
 * Function to start teh app
 */
function init() {
  model.starterMessage();
  model.fetchSavedData();
}

/**
 * Reload the app
 */
export function reloadPage() {
  window.location.reload();
}

init();
