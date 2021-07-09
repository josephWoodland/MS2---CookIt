import * as input from "./input.js";

import * as recipe from "./recipe.js";
import * as settings from "./settings.js";

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
  const header = document.querySelector(".recipe__head-header");
  const inputBox = document.querySelector("#saveName");
  const saveNameBtn = document.querySelector("#nameSubmit");
  const recipeName = header.textContent;
  header.textContent = `What would you like to save this recipe as? ${recipeName}`;
  inputBox.classList.remove("hidden");
  saveNameBtn.classList.remove("hidden");
}

export function getSavedName() {
  const inputBox = document.querySelector("#saveName");
  const recipeName = inputBox.value;
  console.log(recipeName);

  if (!isNaN(recipeName)) {

    alert("Invalid input valid NAME for the recipe, must be a written name");
    inputBox.value = '';
    saveRecipe();
    
  } else {
    alert(`Recipe ${recipeName} saved`)
    curRecipe.saveName = recipeName;
    curSavedRecipes.push(curRecipe);
    console.log(curSavedRecipes.flat(3));
    const recipe = JSON.stringify(curSavedRecipes.flat(3));
    window.localStorage.setItem(`recipe`, recipe);
    input.closeModal();
  }
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
  const renderContainer = document.querySelector("#renderContainer");
  const header = document.querySelector(".settings__head-header");
  let i = Number(index);
  alert(`You have deleted ${curSavedRecipes[i].saveName}!!, page will refresh!!`);
  curSavedRecipes.splice(i, 1);
  const recipes = JSON.stringify(curSavedRecipes.flat(3));
  window.localStorage.setItem(`recipe`, recipes);
  window.location.reload();
}
