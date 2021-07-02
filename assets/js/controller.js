// Import data and functions 

import * as model from "./model.js";
import * as input from "./views/input.js";

// Element Selectors //
const modal = document.querySelector('.formModal');

// Input Selectors //
const name = document.getElementById("name");
const time= document.getElementById("time");
const calorie = document.getElementById("calorie");
const diet = document.getElementById("diet");
const allergies = document.getElementById("allergies");
const messure = document.getElementById("messure");

// Conatanier Selectors //
const mainContainer = document.querySelector('.main__center');
const mainLeft = document.querySelector('.main__left');

// Button Selectors //
const btnStart = document.querySelector('.main__center-btn');

// Page Load Intital Functions //

function init() {
  btnStart.addEventListener('click', input.openModal)
  model.starterMessage();
}
// model.userData();

init();
