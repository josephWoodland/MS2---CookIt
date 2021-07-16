const welcomeMessage = document.querySelector(".main__center-welcomeMessage");
const formTitle = document.querySelector(".form__header");
const formP = document.querySelector(".form__paragraph");
const formName = document.querySelector("#formName");

let username;

/**
 * Renders personalised welcome message
 * @return {String} render to HTML
 */
export function renderName() {
  username = localStorage.getItem("name");
  welcomeMessage.textContent = `Welcome Back ${username}, Lets Get Started`;
}

/**
 * Renders personalised form message
 * @return {String} render to HTML
 */
export function hideName() {
  if (formTitle) {
    formTitle.textContent = `Ok ${username} Let's Create a Meal Plan`;
    formP.textContent = "";
    formName.classList.add("hidden");
  }
}
