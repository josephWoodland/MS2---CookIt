import * as welcome from "./views/welcome.js";
import * as input from "./views/input.js";

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

