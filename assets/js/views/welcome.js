const welcomeMessage = document.querySelector(".main__center-welcomeMessage");
const formTitle = document.querySelector(".form__header");
const formP = document.querySelector(".form__paragraph");
const formName = document.querySelector("#formName");

let name;

/**
 * Renders personalised welcome message
 * @return {String} render to HTML
 */
export function renderName() {
  name = localStorage.getItem("name");
  welcomeMessage.textContent = `Welcome Back ${name}, Lets Get Started`;
}

/**
 * Renders personalised form message
 * @return {String} render to HTML
 */
export function hideName() {
  if (formTitle) {
    formTitle.textContent = `Ok ${name} Let's Create a Meal Plan`;
    formP.textContent = "";
    formName.classList.add("hidden");
  }
}
