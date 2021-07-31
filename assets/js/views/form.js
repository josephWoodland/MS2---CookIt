// Import functions
import * as model from "../model.js";
/**
 * @param {Event} buttonClick
 *
 * @return {} alters HTML code
 */
export function showForm() {
  const form = document.querySelector("#form");
  const welcome = document.querySelector("#welcome");
  form.classList.remove("hidden");
  welcome.classList.add("hidden");
  model.fetchSavedData();
}
