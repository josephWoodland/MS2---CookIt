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
  const recipeName = prompt("What name would you like to save this as?");
  const recipe = JSON.stringify(curRecipe);
  window.localStorage.setItem(`recipe: ${recipeName}`, recipe);
}

// Save the weekly plan
export function savePlannerWeekly() {
  const planName = prompt("What you like to call this plan?");
  const plan = JSON.stringify(curPlan);
  window.localStorage.setItem(`Weekly : ${planName}`, plan);
}

// Save the daily plan
export function savePlannerDay() {
  const planName = prompt("What you like to call this plan?");
  const plan = JSON.stringify(curPlan);
  window.localStorage.setItem(`Weekly : ${planName}`, plan);
}
