import * as input from "./input.js";
import * as home from "./home.js";
import * as recipe from "./recipe.js";

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
}

export function curRecipeData(recipe) {
  curRecipe = recipe;
}

export function curPlannerData(plan) {
  curPlan = plan;
  console.log(curPlan);
}

export function saveRecipe() {
  const header = document.querySelector(".recipe__head-header");
  const inputBox = document.querySelector("#saveName");
  const saveNameBtn = document.querySelector("#nameSubmitRecipe");
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
    inputBox.value = "";
    saveRecipe();
  } else {
    alert(`Recipe ${recipeName} saved`);
    curRecipe.saveName = recipeName;
    curSavedRecipes.push(curRecipe);
    console.log(curSavedRecipes.flat(3));
    const recipe = JSON.stringify(curSavedRecipes.flat(3));
    window.localStorage.setItem(`recipe`, recipe);
    input.closeModal();
  }
}

export function getPlanName() {
  const input = document.querySelector(".nav__input");
  const saveNameBtn = document.querySelector("#nameSubmit");
  input.classList.remove("hidden");
  saveNameBtn.classList.remove("hidden");
}

export function savePlan() {
  const nameInput = document.querySelector("#nameInput");
  const planName = nameInput.value;
  const input = document.querySelector(".nav__input");
  const saveNameBtn = document.querySelector("#nameSubmit");
  console.log(planName);

  if (!isNaN(planName)) {
    alert("Invalid input valid NAME for the plan, must be a written name");
    nameInput.value = " ";
  } else {
    alert(`Plan ${planName} saved`);
    curPlan.saveName = planName;
    console.log(curPlan);
    curSavedPlanWeekly.push(curPlan);
    console.log(curSavedPlanWeekly.flat(3));
    const plan = JSON.stringify(curSavedPlanWeekly.flat(3));
    window.localStorage.setItem(`week`, plan);
    nameInput.value = " ";
    input.classList.add("hidden");
    saveNameBtn.classList.add("hidden");
  }
  home.welcomePage();
}

// Save the daily plan
export function savePlanDay() {
  const nameInput = document.querySelector("#nameInput");
  const planName = nameInput.value;
  const input = document.querySelector(".nav__input");
  const saveNameBtn = document.querySelector("#nameSubmit");
  console.log(planName);

  if (!isNaN(planName)) {
    alert("Invalid input valid NAME for the plan, must be a written name");
    nameInput.value = " ";
  } else {
    alert(`Plan ${planName} saved`);
    curPlan.saveName = planName;
    console.log(curPlan);
    curSavedPlanDays.push(curPlan);
    console.log(curSavedPlanDays.flat(3));
    const plan = JSON.stringify(curSavedPlanDays.flat(3));
    window.localStorage.setItem(`day`, plan);
    nameInput.value = " ";
    input.classList.add("hidden");
    saveNameBtn.classList.add("hidden");
  }
  home.welcomePage();
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
  alert(
    `You have deleted ${curSavedRecipes[i].saveName}!!, page will refresh!!`
  );
  curSavedRecipes.splice(i, 1);
  const recipes = JSON.stringify(curSavedRecipes.flat(3));
  window.localStorage.setItem(`recipe`, recipes);
  window.location.reload();
}
