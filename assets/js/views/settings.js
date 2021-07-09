import * as input from "./input.js";

const modalContainer = document.querySelector("#modal");

// Function so that clicking on the recipe name in the table will open up the recipe modal
export function savedRecipes(arr) {
  console.log(arr);
    return ``;
  }

  // Function so that clicking on the recipe name in the table will open up the recipe modal
export function savedPlans(arr) {
  console.log(arr);
    return ``;
  }


export function openSettings() {
  input.openModal();
  modalContainer.innerHTML = `
  <div class="form__wrapper">
        <div class="settings">
          <div class="settings__head">
            <img
              class="settings__head-logo"
              src="./assets/images/png/Logo.png"
              alt="CookIt Logo"
            />
            <h1 class="settings__head-header">Settings</h1>
          </div>
          <div id="renderContainer" class="settings__container">
          </div>
        </div>
      </div>
      <div class="settings__right">
        <a href="#" onclick="reloadPage()" class="settings__right-close"
          ><i class="fas fa-times"></i
        ></a>
        <div class="settings__right__buttons">
          <button
            href="#"
            id="plans"
            onclick="renderPlans()"
            class="btn settings__right__buttons-btn"
          >
            Plans
          </button>
          <button
            href="#"
            id="recipes"
            onclick="renderRecipes()"
            class="btn settings__right__buttons-btn"
          >
            Recipes
          </button>
          <button
            href="#"
            id="display"
            onclick="renderDisplay()"
            class="btn settings__right__buttons-btn"
          >
            Display
          </button>
          <button
            href="#"
            id="back"
            onclick="reloadPage()"
            class="btn settings__right__buttons-btn"
          >
            Back
          </button>
          <button id="delete" class="main__right-delete btn">
            Clear Storage
          </button>
        </div>
      </div>
  `;
}
