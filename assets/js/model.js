/*jshint esversion: 9 */
import * as welcome from "./views/welcome.js";
import { URL, API_KEY } from "./config.js";
import * as input from "./views/input.js";
import * as table from "./views/table.js";
import * as recipeView from "./views/recipe.js";
import * as save from "./views/save.js";
import * as load from "./views/loading.js";

// Element Selectors

const formInput = document.querySelectorAll("#form input");
const formSelect = document.querySelectorAll("#form select");
const mainCenter = document.querySelector(".main__center-welcomeMessage");
// Empty objects to put retrived data in

export let plan = {};
export let inputData = {};
export let recipe = {};
export let savedRecipes = [];
export let savedPlanWeek = [];
export let savedPlanDay = [];

/**
 * Checks to see if there is a name stored locally
 * @return {HTML text} user name and different welcome message
 */ export async function starterMessage() {
  if ("name" in localStorage) {
    welcome.renderName();
    welcome.hideName();
    const name = window.localStorage.getItem("name");
    inputData.name = name;
  }
}

/**
 * Collect User Input data
 *
 * @param {Event} e  - HTML event
 * Colects the data form the Input HTML tags§
 * @return {Object} recipe - Recipe
 */
export function formSubmit() {
  const inputHTML = Array.from(formInput);
  const selectHTML = Array.from(formSelect);
  const arrData = inputHTML.concat(selectHTML);

  if (isNaN(inputHTML[1].value) || inputHTML[1].value === "") {
    alert(`Calorie input must be a number`);
    input.openModal();
    return;
  }
  if (!isNaN(inputHTML[0].value) && inputData.name === undefined) {
    alert(`Name input must be filled in correclty - Please fill in your name`);
    input.openModal();
    return;
  }

  const arrValues = arrData.map((arr) => {
    return {
      name: arr.id,
      value: arr.value,
    };
  });
  inputData = Object.assign(
    {},
    ...arrValues.map((item) => ({ [item.name]: item.value }))
  );
  getMealPlan(inputData);
  input.closeModal();
  if (!("name" in localStorage)) {
    window.localStorage.setItem("name", inputData.name);
  }
}

/**
 * Get Meal Plan by user input data
 *
 * @param {Object} inputData  - Collection of user paramaters
 * @return {Object} Data - Meal Plan data
 */
export async function getMealPlan(inputData) {
  try {
    const res = await fetch(
      `${URL}mealplanner/generate?${API_KEY}&timeFrame=${inputData.time}&targetCalories=${inputData.calorie}&diet=${inputData.diet}&exclude=${inputData.allergies}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    if (inputData.time === "week") {
      plannerData(data);
    } else {
      dailyPlanner(data);
    }
  } catch (err) {
    console.error(err);
    mainCenter.textContent = `We have a problem : ${err} please try again`;
  }
}

/**
 * Get recipe data by ID
 *
 * @param {Number} id  - Recipe id
 * @return {Object} recipe - Recipe
 */
export async function getRecipeByID(id) {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?${API_KEY}`
    );
    console.log(res);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    recipe = data;
    recipe = {
      id: recipe.id,
      name: recipe.title,
      stepsHtml: recipe.instructions,
      sourceUrl: recipe.sourceUrl,
      summery: recipe.summary,
      cuisine: recipe.cuisines[0],
      image: recipe.image,
      ingredients: recipe.extendedIngredients,
      servings: recipe.servings,
      time: recipe.readyInMinutes,
    };
    save.curRecipeData(recipe);
    recipeView.renderRecipe(recipe, inputData, recipe.ingredients);
  } catch (err) {
    console.error(err);
  }
  return recipe;
}

/**
 * Collects the data sent back from the Api
 * @param {Object} data from API
 *  Removes unused Data - seperates into days tp be rendered
 * @return {Object} of to be rendered {Days} {Object}
 */
export async function plannerData(data) {
  const weekplan = data.week;
  plan = {
    mon: weekplan.monday.meals,
    tue: weekplan.tuesday.meals,
    wed: weekplan.wednesday.meals,
    thur: weekplan.thursday.meals,
    fri: weekplan.friday.meals,
    sat: weekplan.saturday.meals,
    sun: weekplan.sunday.meals,
  };
  table.renderWeekly(plan);
  save.curPlannerData(plan);
}

/**
 * Collects the data sent back from the Api
 * @param {Object} day from API
 *  Removes unused Data
 * @return {Object} of to be rendered {Title} {ID}
 */
export function dailyPlanner(day) {
  const mealTitle = Object.assign(
    {},
    ...day.meals.map((i) => ({ [i.title]: [i.id] }))
  );
  table.renderDay(mealTitle);
  save.curPlannerData(mealTitle);
}
/**
 * User input selection to alter HTML
 * @param {str, str} item from fetchSavedData
 *  Checks what HTML element to mutate
 * @return {HTML style} mutates {element} {style}
 */
export function displayOptions(item, selection) {
  const html = document.querySelector("html");
  const button = document.querySelectorAll(".btn");

  if (item === "background") {
    html.style.backgroundColor = selection;
  }
  if (item === "text") {
    html.style.color = selection;
  }
  if (item === "button") {
    let i;
    for (i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = selection;
    }
  }
}

/**
 * Fetch recipes from local storage
 *
 * @return {Object} of all recipes {Name} {ID}
 */
export function fetchSavedData() {
  // Get all data from local storage
  const items = { ...localStorage };

  if ("recipe" in items) savedRecipes.push(JSON.parse(items.recipe));
  if ("week" in items) savedPlanWeek.push(JSON.parse(items.week));
  if ("day" in items) savedPlanDay.push(JSON.parse(items.day));
  if ("background" in items) displayOptions("background", items.background);
  if ("text" in items) displayOptions("text", items.text);
  if ("button" in items) displayOptions("button", items.button);
  save.curSavedPlanWeeklyData(savedPlanWeek.flat(4));
  save.curSavedPlanDayData(savedPlanDay.flat(4));
  save.curSavedRecipeData(savedRecipes.flat(4));
}
