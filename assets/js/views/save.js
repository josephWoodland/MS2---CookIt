import * as input from "./input.js";

let curRecipe;
let curPlan;
let curSavedPlans;
let curSavedRecipes;

export function curSavedPlanData(plans) {
  curSavedPlans = plans;
}

export function curSavedRecipeData(recipe) {
  curSavedRecipes = recipe;
  console.log(curSavedRecipes);
}

export function curRecipeData(recipe) {
  curRecipe = recipe;
}

export function curPlannerData(plan) {
  curPlan = plan;
}

export function saveRecipe() {
  const recipeName = prompt("What name would you like to save this as?");
  curRecipe.saveName = recipeName;
  curSavedRecipes.push(curRecipe);
  console.log(curSavedRecipes);
  const recipe = JSON.stringify(curSavedRecipes);
  window.localStorage.setItem(`recipe`, recipe);
}

// Save the weekly plan
export function savePlannerWeekly() {
  const planName = prompt("What you like to call this plan?");
  const plan = JSON.stringify(curPlan);
  window.localStorage.setItem(`Weekly`, plan);
}

// Save the daily plan
export function savePlannerDay() {
  const planName = prompt("What you like to call this plan?");
  const plan = JSON.stringify(curPlan);
  window.localStorage.setItem(`Day`, plan);
}
