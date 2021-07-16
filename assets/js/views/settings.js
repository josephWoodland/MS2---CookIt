import * as input from "./input.js";
import * as model from "../model.js";

const modalContainer = document.querySelector("#modal");

/**
 * @param {Event} buttonClick
 *
 * @return {String} render to HTML
 */

export function openSettings() {
  input.openModal();
  modalContainer.innerHTML = `
  <div class="form__wrapper">
  <div class="settings">
  <div class="settings__wrapper">
     <div class="settings__head">
      <img
        class="settings__head-logo"
        src="./assets/images/png/Logo.png"
        alt="CookIt Logo"
        />
        <h1 class="settings__head-header">Settings</h1>
       <a href="#" onclick="reloadPage()" class="settings__head-close"
        ><i class="fas fa-times"></i
        ></a>
        </div>
       <div id="renderContainer" class="settings__container">
    </div>
  </div>
</div>
<div class="settings__right settings__hidden">
  <a href="#" onclick="closeModal()" class="settings__right-close"
    ><i class="fas fa-times"></i
  ></a>
  <div class="settings__right__buttons">
  <div class="settings__right__buttons-left">
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
    </div>
    <div class="settings__right__buttons-right">
    <button
      href="#"
      id="display"
      onclick="renderButtonOptions()"
      class="btn settings__right__buttons-btn"
    >
      Display
    </button>
    <button
      href="#"
      id="back"
      onclick="closeModal()"
      class="btn settings__right__buttons-btn"
    >
      Back
    </button>
    </div>
    <button id="delete" onclick="clearStorage()" class="main__right-delete btn">
      Clear Storage
    </button>
  </div>
    
</div>
</div>
<div class="settings__right settings__shown">
<a href="#" onclick="closeModal()" class="settings__right-close"
  ><i class="fas fa-times"></i
></a>
<div class="settings__right__buttons">
<div class="settings__right__buttons-left">
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
  </div>
  <div class="settings__right__buttons-right">
  <button
    href="#"
    id="display"
    onclick="renderButtonOptions()"
    class="btn settings__right__buttons-btn"
  >
    Display
  </button>
  <button
    href="#"
    id="back"
    onclick="closeModal()"
    class="btn settings__right__buttons-btn"
  >
    Back
  </button>
  </div>
  <button id="delete" onclick="clearStorage()" class="main__right-delete btn">
    Clear Storage
  </button>
</div>
  
</div>
  `;
  model.fetchSavedData();
}
