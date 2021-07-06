import * as welcome from "./views/welcome.js";
import { URL, API_KEY } from "./config.js";
import * as input from "./views/input.js";
import * as table from "./views/table.js";
import * as recipeView from "./views/recipe.js";
import * as save from "./views/save.js";

// Element Selectors
const formInput = document.querySelectorAll("#form input");
const formSelect = document.querySelectorAll("#form select");

// Empty objects to put retrived data in
export let plan = {};
export let inputData = {};
export let recipe = {};

// This function is to test if there has already been a name saved to local storage
export async function starterMessage() {
  if ("name" in localStorage) {
    welcome.renderName();
    welcome.hideName();
    welcome.showDeleteBtn();
    const name = window.localStorage.getItem("name");
    inputData.name = name;
  } else {
    return;
  }
}

// This is the function collect the data from the form and store it to use in the API call
export function formSubmit(e) {
  const inputHTML = Array.from(formInput);
  const selectHTML = Array.from(formSelect);
  const arrData = inputHTML.concat(selectHTML);
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

  input.closeModal();

  getMealPlan(inputData);

  if (!("name" in localStorage)) {
    window.localStorage.setItem("name", inputData.name);
  }
}

// Function to get the meal plan from the user input
export async function getMealPlan(inputData) {
  try {
    const res = await fetch(
      `${URL}mealplanner/generate?${API_KEY}&timeFrame=${inputData.time}&targetCalories=${inputData.calorie}&diet=${inputData.diet}&exclude=${inputData.allergies}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    console.log(inputData.time);

    if (inputData.time === "week") {
      plannerData(data);
    } else {
      dailyPlanner(data);
    }
  } catch (err) {
    console.error(err);
  }
}

// Function to get recipe data by ID - ID is collected by user clicking on the recipe name on the table page
export async function getRecipeByID(id) {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?${API_KEY}`
    );
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
}

// Function to mutate the data from the API call into a usable object
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

// Get the recipe title and id number to pring to the HTML
export function dailyPlanner(day) {
  console.log(day);
  const mealTitle = Object.assign(
    {},
    ...day.meals.map((i) => ({ [i.title]: [i.id] }))
  );
  window.localStorage.setItem("day", JSON.stringify(mealTitle));
  table.renderDay(mealTitle);
  save.curPlannerData(mealTitle);
}
