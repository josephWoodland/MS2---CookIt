// Import data and functions

import * as model from "./model.js";
import * as input from "./views/input.js";

// Global scope function so it can be used in the HTML
window.getID = getID;

// Element Selectors //
const modal = document.querySelector(".overlay");
const recpie = document.querySelector(".table__weekly-cell");
const steps = document.querySelector(".recipe__card__method-p");
// Input Selectors //

// Conatanier Selectors //
const mainContainer = document.querySelector(".main__center");
const mainLeft = document.querySelector(".main__left");

// Button Selectors //
const btnStart = document.querySelector(".main__center-btn");
const close = document.querySelector(".form__right-close");
const formBtn = document.querySelector(".form-btn");

// Page event listeners
// Event to to open the modal - added ? to stop the console error when the btn is not on the screen
btnStart?.addEventListener("click", input.openModal);
// Event to close the modal
// on clicking the outside of the form
modal.addEventListener("click", input.closeModal);
// on clicking on the close icon
close?.addEventListener("click", input.closeModal);
// on pressing the esc key
document.addEventListener("keydown", input.escPress);
// Event to collect Input data
formBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  model.formSubmit(e);
});

// Evetn to catch when a recipe name has been clicked - added ? to stop a console error when the plan is not is not in the HTML
recpie?.addEventListener("click", function () {
  console.log("click");
});

// Function recives the ID from the recipe name clicked
function getID(id) {
  model.getRecipeByID(id);
}

function init() {
  model.starterMessage();
}
// model.userData();

init();


// Function so that clicking on the recipe name in the table will open up the recipe modal

steps.textContent = `let's do it\n\nPreheat the oven to 350* and line 12 muffin cups with parchment paper liners.\n\nIn a large glass bowl sift together the almond flour, coconut flour, baking powder, salt and garlic powder. Toss in one cup cheddar cheese and the chopped ham. Stir the flour mixture to combine with the ham and the cheddar cheese.\n\nTo the flour mixture you will now add in the melted butter, cream, eggs and water. Thoroughly mix all the ingredients together to form a batter. The batter will be slightly thick as these are dense muffins.\n\nDivide batter evenly into the muffin tin. Sprinkle each muffin top with the remaining 1/2 cup shredded cheddar.\n\nBake for 30 minutes in 350* oven. Test with a toothpick to check for doneness as these muffins are quite dense and oven temperatures can vary slightly. If they need more time keep them in the oven for a few minutes longer.\n\nRemove and enjoy. These muffins are great hot out of the oven, but also keep well in an airtight bag or container in the fridge for a few days.`;
