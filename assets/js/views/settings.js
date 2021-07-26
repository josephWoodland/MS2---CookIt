import * as model from "../model.js";
import * as control from "../controller.js";

const plans = document.querySelector("#plans");
const home = document.querySelector("#home");
const recipePage = document.querySelector("#recipes");
const settings = document.querySelector('#settings');

/**
 * @param {Event} buttonClick
 *
 * @return {String} to print to HTML
 */
export function selectBackgroundColour() {
  const items = { ...localStorage };
  const selection = document.querySelector("#backgroundColourSelect");
  const html = document.querySelector("html");
  const userChoice = selection.value;

  if (userChoice === "default") {
    if ("background" in items) localStorage.removeItem("background");
    control.reloadPage();
    return;
  } else {
    html.style.backgroundColor = userChoice;
    localStorage.setItem("background", userChoice);
    model.displayOptions("background", userChoice);
  }
}
/**
 * @param {Event} buttonClick
 *
 * @return {String} to print to HTML
 */
export function selectTextColour() {
  const items = { ...localStorage };
  const selection = document.querySelector("#textColourSelect");
  const userChoice = selection.value;
  const html = document.querySelector("html");

  if (userChoice === "default") {
    if ("text" in items) localStorage.removeItem("text");
    control.reloadPage();
    return;
  } else {
    html.style.color = userChoice;
    localStorage.setItem("text", userChoice);
  }
}
/**
 * @param {Event} buttonClick
 *
 * @return {} alters CSS code
 */
export function selectBtnColour() {
  const items = { ...localStorage };
  const selection = document.querySelector("#btnColourSelect");
  const userChoice = selection.value;
  const button = document.querySelectorAll(".btn");

  if (userChoice === "default") {
    if ("button" in items) localStorage.removeItem("button");
    control.reloadPage();
    return;
  } else {
    localStorage.setItem("button", userChoice);
    let i;
    for (i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = userChoice;
    }
  }
}
/**
 * @param {Event} buttonClick
 *
 * @return {String} to print to HTML
 */
export function renderSettings() {
  const mainContainer = document.querySelector("#mainCenter");
  recipePage.classList.remove("active");
  home.classList.remove("active");
  settings.classList.add("active");
  plans.classList.remove("active");
  mainContainer.innerHTML = `
  <div class="settings">
  <div class="settings__question">
    <h1 class="settings__question-header">Select to change the button colour</h1>
    <select name="buttons" id="btnColourSelect" class=""settings__question-button">
       <option value="default">Default</option>
       <option value="red">Red</option>
       <option value="green">Green</option>
       <option value="blue">Blue</option>
    </select>
    <button id="btnSelect" onclick="collectBtnSelect()" class="settings__question-btn-buttonSelect btn">Select</button>
  </div>
  <div class="settings__question">
    <h1 class="settings__question-header">Press the button to change the text colour</h1>
    <select name="buttons" id="textColourSelect" class=""settings__question-button">
      <option value="default">Default</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
    <button id="btnSelect" onclick="collectTextSelect()" class="settings__question-btn-textSelect btn">Select</button>
  </div>
  <div class="settings__question">
    <h1 class="settings__question-header">Press the button to change the background colour</h1>
    <select name="buttons" id="backgroundColourSelect" class=""settings__question-button">
      <option value="default">Default</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
    <button id="btnSelect" onclick="collectBackgroundSelect()" class="settings__question-btn-backSelect btn">Select</button>
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
