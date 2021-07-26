import * as input from "./input.js";
import * as model from "../model.js";

const mainContainer = document.querySelector("#mainCenter");

/**
 * @param {Event} buttonClick
 *
 * @return {String} render to HTML
 */

export function openSettings() {
  mainContainer.innerHTML = `
  <div class="settings">
  <div id="renderContainer" class="settings__container"></div>
  <div class="settings__buttons">
    <button
      href="#"
      id="plans"
      onclick="renderPlans()"
      class="btn settings__buttons-btn"
    >
      Plans
    </button>
    <button
      href="#"
      id="recipes"
      onclick="renderRecipes()"
      class="btn settings__buttons-btn"
    >
      Recipes
    </button>
    <button
      href="#"
      id="display"
      onclick="renderButtonOptions()"
      class="btn settings__buttons-btn"
    >
      Display
    </button>
    <button
      href="#"
      id="back"
      onclick="reloadPage()"
      class="btn settings__buttons-btn"
    >
      Back
    </button>
  </div>
  <button
    id="delete"
    onclick="clearStorage()"
    class="settings__buttons-btn-clearStorage btn"
  >
    Clear Storage
  </button>
</div>
  `;
  model.fetchSavedData();
}
