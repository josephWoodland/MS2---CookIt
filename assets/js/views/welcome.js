const welcomeMessage = document.querySelector(".main__center-welcomeMessage");
const formTitle = document.querySelector(".form__header");
const formP = document.querySelector(".form__paragraph");
const formName = document.querySelector("#formName");
let name;

// Runction to render users name to the welcom screen
export function renderName() {
  // Use the name sored in local storage and print it to the welcome page HTML
  name = localStorage.getItem("name");
  welcomeMessage.textContent = `Welcome Back ${name}, Lets Get Started`;
}

// Function to render
export function hideName() {
  // console.log("We have your name on file");
  // Change the text content for the header
  formTitle.textContent = `Ok ${name} Let's Create a Meal Plan`;
  // Change the form paragraph
  formP.textContent = "";
  // Hide the what is your name question
  formName.classList.add("hidden");
}
