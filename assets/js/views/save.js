import * as input from "./input.js";

let curRecipe;
let curPlan;

export function curRecipeData(recipe) {
  curRecipe = recipe;
}

export function curPlannerData(plan) {
  curPlan = plan;
}

export function saveRecipe() {
  // Retrive a save name for the recipe
  const recipeName = prompt("What name would you like to save this as?");
  // Turn the current recipe into to a string to be saved - for some reason this was returning undifind when I reied to strignify in the functino like other saves to storage
  const recipe = JSON.stringify(curRecipe);
  // Save to storage
  window.localStorage.setItem(`recipe: ${recipeName}`, recipe);
//   input.closeModal();
}

// Save the weekly plan
export function savePlannerWeekly() {
  // Retrive a save name for the planner
  const planName = prompt("What you like to call this plan?");
  // Turn the current planner into a string
  const plan = JSON.stringify(curPlan);
  // Save to storage
  window.localStorage.setItem(`Weekly : ${planName}`, plan);
//   input.closeModal();
}

// Save the daily plan
export function savePlannerDay() {
    // Retrive a save name for the planner
    const planName = prompt("What you like to call this plan?");
    // Turn the current planner into a string
    const plan = JSON.stringify(curPlan);
    // Save to storage
    window.localStorage.setItem(`Weekly : ${planName}`, plan);
  //   input.closeModal();
  }
