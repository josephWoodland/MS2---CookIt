const welcomeMessage = document.querySelector(".main__center-welcomeMessage");

export function renderName() {
  // Use the name sored in local storage and print it to the welcome page HTML
  const name = localStorage.getItem("name");
  welcomeMessage.textContent = `Welcome Back ${name}, Lets Get Started`;
}
