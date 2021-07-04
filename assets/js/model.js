import * as welcome from "./views/welcome.js";
import { URL, API_KEY } from "./config.js";
import * as input from "./views/input.js";
import * as table from './views/table.js'

// Element Selectors
const formInput = document.querySelectorAll("#form input");
const formSelect = document.querySelectorAll("#form select");

// This function is so I can save my name to storage to test the personalised Welcome message
export function userData() {
  const name = prompt("What is your name?");
  console.log(name);
  window.localStorage.setItem("name", name);
}

// This function is to test if there has already been a name saved to local storage
export async function starterMessage() {
  if ("name" in localStorage) {
    // If there is a name in storage then render a different message in the welcome screen
    welcome.renderName();
    welcome.hideName();
  } else {
    // If not do nothing
    return;
  }
}

let mealPlan = {};
let plan = {};
let inputData = {};
let recipe = {};

// This is the function collect the data from thr form and store it to use in the API call
export function formSubmit(e) {
  // collect the data from the all input fields in the form
  const inputHTML = Array.from(formInput);
  const selectHTML = Array.from(formSelect);
  // console.log(inputHTML[0].value, inputHTML[0].id);
  // Add them into one Array to work from
  const arrData = inputHTML.concat(selectHTML);
  // Map over the Array and create an Array of objects with key's and values
  const arrValues = arrData.map((arr) => {
    return {
      name: arr.id,
      value: arr.value,
    };
  });
  console.log(arrValues);
  // Turn the Array in to an object to work from
  inputData = Object.assign(
    {},
    ...arrValues.map((item) => ({ [item.name]: item.value }))
  );
  getMealPlan(inputData);
  input.closeModal();
  // Save the name to local storage to use further on
  window.localStorage.setItem("name", inputData.name);
  // console.log(inputData);
  // Save this to local storage for me to work with
  window.localStorage.setItem("inputData", JSON.stringify(inputData));
}

// Get Data from Local storage so I can work with it without making API calls
inputData = JSON.parse(window.localStorage.getItem("inputData"));
mealPlan = JSON.parse(window.localStorage.getItem("recipeData"));
recipe = JSON.parse(window.localStorage.getItem("recipe"));
console.log(recipe);
// Function to get the meal plan from the user input

export async function getMealPlan(inputData) {
  try {
    const res = await fetch(
      `${URL}mealplanner/generate?${API_KEY}&timeFrame=${inputData.time}&targetCalories=${inputData.calorie}&diet=${inputData.diet}&exclude=${inputData.allergies}`
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

    window.localStorage.setItem("recipeData", JSON.stringify(recipe));

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// getMealPlan();

// Function to get recipe data by ID
export async function getRecipeByID(id){
  try{
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?${API_KEY}`
    )
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    console.log(data);
    window.localStorage.setItem('recipe', JSON.stringify(data))
  } catch (err){
      console.error(err);
  }
}

// getRecipeByID(1420295);
console.log(mealPlan);

// Function to mutate the data from the API call into a usable object
export async function plannerData(data) {
  const weekplan = data.week;
  console.log(weekplan);
  plan = {
    mon: weekplan.monday.meals,
    tue: weekplan.tuesday.meals,
    wed: weekplan.wednesday.meals,
    thur: weekplan.thursday.meals,
    fri: weekplan.friday.meals,
    sat: weekplan.saturday.meals,
    sun: weekplan.sunday.meals,
  };
}

plannerData(mealPlan);
console.log(plan);

// Get the recipe title and id number to pring to the HTML
export function dailyPlanner(day) {
  const mealTitle = Object.assign(
    {},
    ...day.map((i) => ({ [i.title]: [i.id] }))
  );
  console.log(mealTitle);
}

dailyPlanner(plan.mon);
table.renderWeekly(plan)
