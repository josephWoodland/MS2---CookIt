import * as model from "../model.js"

export function renderPlans() {
  const renderContainer = document.querySelector("#renderContainer");
  const header = document.querySelector(".settings__head-header");
  const planArrDay = model.savedPlanDay[0];
  const planArrWeekly = model.savedPlanWeek[0];
  const htmlDay = planArrDay != undefined ? planArrDay.map(planHtml).join("") : `<h2 class="settings__emptyArray">You have no saved Day Plans</h2>`;
  const htmlWeek = planArrWeekly != undefined ? planArrWeekly.map(planHtml).join(""): `<h2 class="settings__emptyArray">You have no saved Weekly Plans</h2>`;
// need error handling if there is nothing in the array //
  header.textContent = "Saved Plans";
  renderContainer.innerHTML = `
  </div>
  <h2 class="settings__container-header">Day Plans</h2><br>
  <div id="renderContainer" class="settings__container day">
  ${htmlDay}
  </div>
  <h2 class="settings__container-header">Week Plans</h2><br>
  <div id="renderContainer" class="settings__container week">
  ${htmlWeek}
  </div>`;

}

export function planHtml(planArr, index) {
  const header = document.querySelector(".settings__head-header");
  header.textContent = "Saved Plans";

  return `
    <div class="settings__container-plan">
                <a
                  id="${index}"
                  href=""
                  class="settings__container-plan-item btn"
                  >${planArr.saveName}</a
                >
                <a href="#" id="${index}" onclick="editSaveName(${index})" class="settings__container-recipe-edit"
                  ><i class="fas fa-edit"></i></a
                ><a href="#" id="${index}" onclick="deleteItem(${index})" class="settings__container-recipe-delete"
                  ><i class="far fa-trash-alt"></i></a
                >
              </div>
    
              `;
}
