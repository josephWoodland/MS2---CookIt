import * as model from "../model.js";
const table = document.querySelector("#mainCenter");
const plans = document.querySelector("#plans");
const home = document.querySelector("#home");
const recipe = document.querySelector("#recipes");

/**
 * @param {Object} dayPlan
 *
 * @return {String} render to HTML
 */
export async function renderDay(obj) {
  let title = Object.keys(obj);
  let id = Object.values(obj);
  plans.classList.add("active");
  home.classList.remove("active");
 recipe.classList.remove("active");
  table.innerHTML = `
  <div class="table__links">
  <ul class="table__links"><a class="table__links-link" href="">Saved Weekly Plans</a></ul>
  <ul class="table__links"><a class="table__links-link" href="">Saved Daily Plans</a></ul>
</div>
<div id="table" class="table">
  <div class="table__nav">
                <div class="table__nav__input">
                  <h2 class="table__nav__input-header">
                    Would you like to save this plan?
                  </h2>
                  <input
                    required
                    type="text"
                    class="table__nav__input-saveName"
                    name="saveName"
                    id="nameInput"
                    placeholder="e.g. low carb"
                  />
                  <input
                    type="submit"
                    id="nameSubmit"
                    class="table__nav__input-save btn"
                    value="save"
                    onclick="savePlan()"
                  />
                </div>

                <div class="grid-daily">
                <div class="table__meals">Breakfast</div>
                <div class="table__daily-cell" onClick="getID(this.id)" id="${id[0]}">${title[0]}</div>
                <div class="table__meals">Lunch</div>
                <div class="table__daily-cell" onClick="getID(this.id)" id="${id[2]}">${title[2]}</div>
                <div class="table__meals">Dinner</div>
                <div class="table__daily-cell" onClick="getID(this.id)" id="${id[1]}">${title[1]}</div>
                </div>
            </div>
            </div`;
  model.fetchSavedData();
}

/**
 * @param {Object} weekPlan
 *
 * @return {String} render to HTML
 */
export function renderWeekly(plan) {
  plans.classList.add("active");
  home.classList.remove("active");
 recipe.classList.remove("active");
  table.innerHTML = `
 
  <div class="table__nav">
  <div class="table__nav__input">
    <h2 class="table__nav__input-header">
      Would you like to save this plan?
    </h2>
    <input
      required
      type="text"
      class="table__nav__input-saveName"
      name="saveName"
      id="nameInput"
      placeholder="e.g. low carb"
    />
    <input
      type="submit"
      id="nameSubmit"
      class="table__nav__input-save btn"
      value="save"
      onclick="savePlan()"
    />
  </div>
</div>
<div class="table__weekly grid-weekly">
  <div class="table__weekly-cell days-1">Monday</div>
  <div class="table__weekly-cell days-2">Tuesday</div>
  <div class="table__weekly-cell days-3">Wednesday</div>
  <div class="table__weekly-cell days-4">Thursday</div>
  <div class="table__weekly-cell days-5">Friday</div>
  <div class="table__weekly-cell days-6">Saturday</div>
  <div class="table__weekly-cell days-7">Sunday</div>
  <div class="table__meals"></div>
  <div
    class="table__weekly-cell recipe-1"
    onClick="getID(this.id)"
    id="${plan.mon[0].id}"
  >
    ${plan.mon[0].title}
  </div>
  <div
    class="table__weekly-cell recipe-2"
    onClick="getID(this.id)"
    id="${plan.tue[0].id}"
  >
    ${plan.tue[0].title}
  </div>
  <div
    class="table__weekly-cell recipe-3"
    onClick="getID(this.id)"
    id="${plan.wed[0].id}"
  >
    ${plan.wed[0].title}
  </div>
  <div
    class="table__weekly-cell recipe-4"
    onClick="getID(this.id)"
    id="${plan.thur[0].id}"
  >
    ${plan.thur[0].title}
  </div>
  <div
    class="table__weekly-cell recipe-5"
    onClick="getID(this.id)"
    id="${plan.fri[0].id}"
  >
    ${plan.fri[0].title}
  </div>
  <div
    class="table__weekly-cell recipe-6"
    onClick="getID(this.id)"
    id="${plan.sat[0].id}"
  >
    ${plan.sat[0].title}
  </div>
  <div
    class="table__weekly-cell recipe-7"
    onClick="getID(this.id)"
    id="${plan.sun[0].id}"
  >
    ${plan.sun[0].title}
  </div>
  <div class="table__meals">Breakfast</div>
  <div
    class="table__weekly-cell recipe-8"
    onClick="getID(this.id)"
    id="${plan.mon[1].id}"
  >
    ${plan.mon[1].title}
  </div>
  <div
    class="table__weekly-cell recipe-9"
    onClick="getID(this.id)"
    id="${plan.tue[1].id}"
  >
    ${plan.tue[1].title}
  </div>
  <div
    class="table__weekly-cell recipe-10"
    onClick="getID(this.id)"
    id="${plan.wed[1].id}"
  >
    ${plan.wed[1].title}
  </div>
  <div
    class="table__weekly-cell recipe-11"
    onClick="getID(this.id)"
    id="${plan.thur[1].id}"
  >
    ${plan.thur[1].title}
  </div>
  <div
    class="table__weekly-cell recipe-12"
    onClick="getID(this.id)"
    id="${plan.fri[1].id}"
  >
    ${plan.fri[1].title}
  </div>
  <div
    class="table__weekly-cell recipe-13"
    onClick="getID(this.id)"
    id="${plan.sat[1].id}"
  >
    ${plan.sat[1].title}
  </div>
  <div
    class="table__weekly-cell recipe-14"
    onClick="getID(this.id)"
    id="${plan.sun[1].id}"
  >
    ${plan.sun[1].title}
  </div>
  <div class="table__meals">Lunch</div>
  <div
    class="table__weekly-cell recipe-15"
    onClick="getID(this.id)"
    id="${plan.mon[2].id}"
  >
    ${plan.mon[2].title}
  </div>
  <div
    class="table__weekly-cell recipe-16"
    onClick="getID(this.id)"
    id="${plan.tue[2].id}"
  >
    ${plan.tue[2].title}
  </div>
  <div
    class="table__weekly-cell recipe-17"
    onClick="getID(this.id)"
    id="${plan.wed[2].id}"
  >
    ${plan.wed[2].title}
  </div>
  <div
    class="table__weekly-cell recipe-18"
    onClick="getID(this.id)"
    id="${plan.thur[2].id}"
  >
    ${plan.thur[2].title}
  </div>
  <div
    class="table__weekly-cell recipe-19"
    onClick="getID(this.id)"
    id="${plan.fri[2].id}"
  >
    ${plan.fri[2].title}
  </div>
  <div
    class="table__weekly-cell recipe-20"
    onClick="getID(this.id)"
    id="${plan.sat[2].id}"
  >
    ${plan.sat[2].title}
  </div>
  <div
    class="table__weekly-cell recipe-21"
    onClick="getID(this.id)"
    id="${plan.sun[2].id}"
  >
    ${plan.sun[2].title}
  </div>
  <div class="table__meals">Dinner</div>
</div>
    `;
  model.fetchSavedData();
}
