import * as home from "./home.js";
import * as recipe from "./recipe.js";
import * as table from "./table.js";

let curRecipe;
let curPlan;
export let curSavedPlanDays;
export let curSavedPlanWeekly;
export let curSavedRecipes;

/**
 * @param {Array} planData
 *
 * @return {Array} to vairiable to hold the current savec day plan
 */
export function curSavedPlanDayData(plans) {
  curSavedPlanDays = plans;
}
/**
 * @param {Array} planData
 *
 * @return {Array} to vairiable to hold the current saved weekly plans
 */
export function curSavedPlanWeeklyData(plans) {
  curSavedPlanWeekly = plans;
}
/**
 * @param {Array} planData
 *
 * @return {Array} to vairiable to hold the current saved recipes
 */
export function curSavedRecipeData(recipe) {
  curSavedRecipes = recipe;
}
/**
 * @param {Array} planData
 *
 * @return {Array} to vairiable to hold the current recipe
 */
export function curRecipeData(recipe) {
  curRecipe = recipe;
}
/**
 * @param {Array} planData
 *
 * @return {Array} to vairiable to hold the current plan
 */
export function curPlannerData(plan) {
  curPlan = plan;
}
/**
 * @param {Event} buttonClick
 *
 * @return {String} render to HTML
 */
export function saveRecipe() {
  const header = document.querySelector(".recipe__head-header");
  const inputBox = document.querySelector("#saveName");
  const saveNameBtn = document.querySelector("#nameSubmitRecipe");
  const recipeName = header.textContent;
  header.textContent = `What would you like to save this recipe as? ${recipeName}`;
  inputBox.classList.remove("hidden");
  saveNameBtn.classList.remove("hidden");
}
/**
 * @param {User Input}
 *
 * @return {String} render to HTML
 */
export function getSavedName() {
  const inputBox = document.querySelector("#saveName");
  const recipeName = inputBox.value;

  if (!isNaN(recipeName)) {
    alert("Invalid input valid NAME for the recipe, must be a written name");
    inputBox.value = "";
    saveRecipe();
  } else {
    alert(`Recipe ${recipeName} saved`);
    curRecipe.saveName = recipeName;
    curSavedRecipes.push(curRecipe);
    const recipe = JSON.stringify(curSavedRecipes.flat(3));
    window.localStorage.setItem(`recipe`, recipe);
  }
  curPlan.mon ? table.renderWeekly(curPlan) : table.renderDay(curPlan);
}

/**
 * @param {Event} buttonClick
 *
 * @return {} HTML change
 */
export function getPlanName() {
  const input = document.querySelector(".nav__input");
  const saveNameBtn = document.querySelector("#nameSubmit");
  input.classList.remove("hidden");
  saveNameBtn.classList.remove("hidden");
}
/**
 * @param {User input}
 *
 * @return {String} to save to local storage
 */
export function savePlan() {
  const nameInput = document.querySelector("#nameInput");
  const planName = nameInput.value;
  console.log(planName);

  if (!isNaN(planName)) {
    alert("Invalid input valid NAME for the plan, must be a written name");
    nameInput.value = " ";
  } else {
    alert(`Plan ${planName} saved`);
    curPlan.saveName = planName;
    curSavedPlanWeekly.push(curPlan);
    const plan = JSON.stringify(curSavedPlanWeekly.flat(3));
    window.localStorage.setItem(`week`, plan);
    nameInput.value = " ";
    home.welcomePage();
  }
}

/**
 * @param {User input}
 *
 * @return {String} to save to local storage
 */
export function savePlanDay() {
  const nameInput = document.querySelector("#nameInput");
  const planName = nameInput.value;

  if (!isNaN(planName)) {
    alert("Invalid input valid NAME for the plan, must be a written name");
    nameInput.value = " ";
  } else {
    alert(`Plan ${planName} saved`);
    curPlan.saveName = planName;
    curSavedPlanDays.push(curPlan);
    const plan = JSON.stringify(curSavedPlanDays.flat(3));
    window.localStorage.setItem(`day`, plan);
    nameInput.value = " ";
    home.welcomePage();
  }
}
/**
 * @param {Index} savedRecipes array
 * @return {New Str} save to local storage
 * @return {New Array} render to HTML
 */
export function editSaveName(index) {
  const newName = prompt("What would you like to change the name to?");
  let i = Number(index);
  curSavedRecipes[i].saveName = newName;
  const recipes = JSON.stringify(curSavedRecipes.flat(3));
  window.localStorage.setItem(`recipe`, recipes);
  recipe.renderRecipes(curSavedRecipes);
}
/**
 * @param {Array Index}
 * @return {New Str} save to local storage
 */
export function deleteItem(index) {
  let i = Number(index);
  alert(
    `You have deleted ${curSavedRecipes[i].saveName}!!, page will refresh!!`
  );
  curSavedRecipes.splice(i, 1);
  const recipes = JSON.stringify(curSavedRecipes.flat(3));
  window.localStorage.setItem(`recipe`, recipes);
  window.location.reload();
}

export function editSavePlanName(index) {
  const savedWeek = document.querySelector("#saveWeek");
  const newName = prompt("What would you like to change the name to?");
  let i = Number(index);

  if (savedWeek.classList.contains("active")) {
    curSavedPlanWeekly[i].saveName = newName;
    const plan = JSON.stringify(curSavedPlanWeekly.flat(3));
    window.localStorage.setItem(`week`, plan);
    renderPlansWeek(curSavedPlanWeekly);
  } else {
    curSavedPlanDays[i].saveName = newName;
    const plan = JSON.stringify(curSavedPlanDays.flat(3));
    window.localStorage.setItem(`day`, plan);
    renderPlansDay(curSavedPlanDays);
  }
}

export function deletePlanItem(index) {
  const savedWeek = document.querySelector("#saveWeek");
  let i = Number(index);
  alert(
    `You have deleted ${curSavedRecipes[i].saveName}!!, page will refresh!!`
  );
  if (savedWeek.classList.contains("active")) {
    curSavedPlanWeekly.splice(i,1);
    const plan = JSON.stringify(curSavedPlanWeekly.flat(3));
    window.localStorage.setItem(`week`, plan);
    window.location.reload();
  } else {
    curSavedPlanDays.splice(i,1);
    const plan = JSON.stringify(curSavedPlanDays.flat(3));
    window.localStorage.setItem(`day`, plan);
    window.location.reload();
  }
 
}