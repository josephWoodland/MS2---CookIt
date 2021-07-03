const welcomeMessage = document.querySelector(".main__center-welcomeMessage");
const formTitle = document.querySelector('.form__header');



export function renderName() {
  // Use the name sored in local storage and print it to the welcome page HTML
  const name = localStorage.getItem("name");
  welcomeMessage.textContent = `Welcome Back ${name}, Lets Get Started`;
}

export function hideName(){
  // Change class for header

  // Change p
  // Hide the what is your name question
}