import * as welcome from "./views/welcome.js";
import * as input from "./views/input.js";

// Element Selectors
const formInput = document.querySelectorAll('#form input');
const formSelect = document.querySelectorAll('#form select');

// This function is so I can save my name to storage to test the personalised Welcome message
export function userData() {
  const name = prompt("What is your name?");
  console.log(name);
  window.localStorage.setItem("name", name);
}

// This function is to test if there has already been a name saved to local storage
export async function starterMessage() {
  if ("name" in localStorage) {
    // If there is a name in storage then render a different message in the welcome screen
    welcome.renderName();
  } else {
    // If not do nothing
    return;
  }
}

export function formSubmit(e) {
  // collect the data from the all input fields in the form
  const arrInput = Array.from(formInput)
  const arrSelect = Array.from(formSelect)
  console.log(arrInput);
  console.log(arrSelect);
}
