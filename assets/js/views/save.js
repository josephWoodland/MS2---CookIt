import * as input from "./input.js";
<<<<<<< HEAD
<<<<<<< HEAD
import * as recipe from "./recipe.js";
=======
>>>>>>> parent of 50a2445 (Ability to edit recipeSaveName data)
=======
>>>>>>> parent of 50a2445 (Ability to edit recipeSaveName data)

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
<<<<<<< HEAD
<<<<<<< HEAD

export function editSaveName(index) {
  const newName = prompt("What would you like to change the name to?");

  let i = Number(index);
  curSavedRecipes[i].saveName = newName;
  // Resave the recipeArr with the new name
  const recipes = JSON.stringify(curSavedRecipes.flat(3));
  window.localStorage.setItem(`recipe`, recipes);
  // Reload the page with the new Arr
  recipe.renderRecipes(curSavedRecipes);
}

export function deleteItem(index) {

  let i = Number(index);
  const newArr = curSavedRecipes.splice(i, 1);
  
  console.log(newArr);
  
  const recipes = JSON.stringify(curSavedRecipes.flat(3));
  
  window.localStorage.setItem(`recipe`, recipes);

  recipe.renderRecipes(curSavedRecipes);
}
=======
>>>>>>> parent of 50a2445 (Ability to edit recipeSaveName data)
=======
>>>>>>> parent of 50a2445 (Ability to edit recipeSaveName data)
