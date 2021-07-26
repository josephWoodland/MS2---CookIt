import * as model from "../model.js";
import * as table from "./table.js";

const mainCenter = document.querySelector("#mainCenter");
const plans = document.querySelector("#plans");
const home = document.querySelector("#home");
const recipePage = document.querySelector("#recipes");
const settings = document.querySelector('#settings');

export function renderPlanPage() {
  recipePage.classList.remove("active");
  home.classList.remove("active");
  settings.classList.remove("active");
  plans.classList.add("active");
  mainCenter.innerHTML = `
        <div class="table__links">
              <ul class="table__links"><a id="saveWeek" class="table__links-link" onclick="renderPlansWeek()" href="">Saved Weekly Plans</a></ul>
              <ul class="table__links"><a id="saveDay" class="table__links-link" onclick="renderPlansDay()" href="">Saved Daily Plans</a></ul>
        </div>
        <div id="renderContainer" class="table__container"
        <div id="table" class="table">
        </div>
  `;
}

export function renderPlan() {
  planArr = 
  planArr.mon ? table.renderWeekly(planArr) : table.renderDay(planArr);
}

/**
 * @param {Event} buttonClick
 *
 * @return {String} to print to HTML
 */
export function renderPlansDay() {
  const renderContainer = document.querySelector("#renderContainer");
  const weekLink = document.querySelector("#saveWeek");
  const dayLink = document.querySelector("#saveDay");
  const planArrDay = model.savedPlanDay[0];
  const htmlDay =
    planArrDay != undefined
      ? planArrDay.map(planHtml).join("")
      : `<h1 class="table__emptyArray" style="grid-column:1 / span 5">You have no saved Day Plans</h1>`;

  weekLink.classList.remove("active");
  dayLink.classList.add("active");
  renderContainer.innerHTML = ``;
  renderContainer.innerHTML = `${htmlDay}`;
  model.fetchSavedData();
}

export function renderPlansWeek() {
  const renderContainer = document.querySelector("#renderContainer");
  const weekLink = document.querySelector("#saveWeek");
  const dayLink = document.querySelector("#saveDay");
  const planArrWeekly = model.savedPlanWeek[0];
  const htmlWeek =
    planArrWeekly != undefined
      ? planArrWeekly.map(planHtml).join("")
      : `<h1 class="table__emptyArray" style="grid-column:1 / span 5">You have no saved Weekly Plans</h1>`;
  weekLink.classList.add("active");
  dayLink.classList.remove("active");
  renderContainer.innerHTML = ``;
  renderContainer.innerHTML = `${htmlWeek}`;
  model.fetchSavedData();
}

/**
 * @param {index} button click
 *
 * @return {Array} recipeArray
 */
export function planHtml(planArr, index) {
  console.log(planArr);
  return `
    <div class="table__container-plan">
                <a
                  id="${index}"
                  onclick="renderPlan(${planArr})"
                  href=""
                  class="table__container-plan-item btn"
                  >${planArr.saveName}</a
                >
                <a href="#" id="${index}" onclick="editSavePlanName(${index})" class="table__container-plan-edit"
                  ><i class="fas fa-edit"></i></a
                ><a href="#" id="${index}" onclick="deletePlanItem(${index})" class="table__container-plan-delete"
                  ><i class="far fa-trash-alt"></i></a
                >
              </div>
    
              `;
}
