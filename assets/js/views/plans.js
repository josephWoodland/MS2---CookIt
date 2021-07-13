import * as model from "../model.js"

export function renderPlans() {
  const renderContainer = document.querySelector("#renderContainer");
  
  const header = document.querySelector(".settings__head-header");
  const planArrDay = model.savedPlanDay[0];
  const planArrWeekly = model.savedPlanWeek[0];
  header.textContent = "Saved Plans";
  renderContainer.innerHTML = "";
  const htmlDay = planArrDay.map(planHtml).join("");
  const htmlWeek = planArrWeekly.map(planHtml).join("");
  renderContainer.innerHTML = `
  </div>
  <h2 class="settings__container-header">Day Plans</h2><br>
  <div id="renderContainer" class="settings__container">
  ${htmlDay}
  </div>
  <h2 class="settings__container-header">Week Plans</h2><br>
  <div id="renderContainer" class="settings__container">
  ${htmlWeek}
  </div>`;

}

export function planHtml(planArr, index) {
  console.log(planArr);
  const header = document.querySelector(".settings__head-header");
  header.textContent = "Saved Plans";

  return `
    <div class="settings__container-plan">
                <a
                  id="${index}"
                  href=""
                  onClick="renderSavedRecipe(this.id)"
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
