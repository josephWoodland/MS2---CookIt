const homeHTML = document.querySelector(".home");
const grid = document.querySelector(".grid-1");

export function renderWeekly(plan) {
    
  homeHTML.innerHTML = `
    <div class="grid-2">
      <div class="nav">
        <div class="nav__logo">
          <img
            class="nav__logo-logo"
            src="./assets/images/png/Logo.png"
            alt="CookIt Logo"
          />
        </div>
        <div class="nav__buttons">
          <button href="" class="btn nav__btn-home">Home</button>
          <button href="" class="btn nav__btn-save">Save</button>
          <button href="" class="btn nav__btn-pdf">Pdf</button>
        </div>
      </div>
      <div class="grid-3">
        <div class="space"></div>
        <div class="table__left">
          <div class="grid-4">
            <div class="table__meals"></div>
            <div class="table__meals">Breakfast</div>
            <div class="table__meals">Lunch</div>
            <div class="table__meals">Dinner</div>
          </div>
        </div>
        <div class="table__weekly grid-weekly">
          <div class="table__weekly-cell">Monday</div>
          <div class="table__weekly-cell">Tuesday</div>
          <div class="table__weekly-cell">Wednesday</div>
          <div class="table__weekly-cell">Thursday</div>
          <div class="table__weekly-cell">Friday</div>
          <div class="table__weekly-cell">Saturday</div>
          <div class="table__weekly-cell">Sunday</div>
          <div class="table__weekly-cell">${plan.mon[0].title}</div>
          <div class="table__weekly-cell">${plan.tue[0].title}</div>
          <div class="table__weekly-cell">${plan.wed[0].title}</div>
          <div class="table__weekly-cell">${plan.thur[0].title}</div>
          <div class="table__weekly-cell">${plan.fri[0].title}</div>
          <div class="table__weekly-cell">${plan.sat[0].title}</div>
          <div class="table__weekly-cell">${plan.sun[0].title}</div>
          <div class="table__weekly-cell">${plan.mon[1].title}</div>
          <div class="table__weekly-cell">${plan.tue[1].title}</div>
          <div class="table__weekly-cell">${plan.wed[1].title}</div>
          <div class="table__weekly-cell">${plan.thur[1].title}</div>
          <div class="table__weekly-cell">${plan.fri[1].title}</div>
          <div class="table__weekly-cell">${plan.sat[1].title}</div>
          <div class="table__weekly-cell">${plan.sun[1].title}</div>
          <div class="table__weekly-cell">${plan.mon[2].title}</div>
          <div class="table__weekly-cell">${plan.tue[2].title}</div>
          <div class="table__weekly-cell">${plan.wed[2].title}</div>
          <div class="table__weekly-cell">${plan.thur[2].title}</div>
          <div class="table__weekly-cell">${plan.fri[2].title}</div>
          <div class="table__weekly-cell">${plan.sat[2].title}</div>
          <div class="table__weekly-cell">${plan.sun[2].title}</div>
        </div>
        <div class="space"></div>
      </div>
    </div>
    `;
}
