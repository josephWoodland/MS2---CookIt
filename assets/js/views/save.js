import * as input from "./input.js";

let curRecipe;
let curPlan;
let curSavedPlanDays;
let curSavedPlanWeekly;
let curSavedRecipes;

export function curSavedPlanDayData(plans) {
  curSavedPlanDays = plans;
}

export function curSavedPlanWeeklyData(plans) {
  curSavedPlanWeekly = plans;
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
  console.log(curSavedRecipes.flat(3));
  const recipe = JSON.stringify(curSavedRecipes.flat(3));
  window.localStorage.setItem(`recipe`, recipe);
}

// Save the weekly plan
export function savePlannerWeekly() {
  const planName = prompt("What you like to call this plan?");
  curPlan.saveName = planName;
  curSavedPlanWeekly.push(curPlan);
  const plan = JSON.stringify(curSavedPlans.flat(3));
  window.localStorage.setItem(`Weekly`, plan);
}

// Save the daily plan
export function savePlannerDay() {
  const planName = prompt("What you like to call this plan?");
  curPlan.saveName = planName;
  curSavedPlanDays.push(curPlan);
  const plan = JSON.stringify(curPlan.flat(3));
  window.localStorage.setItem(`Day`, plan);
}
