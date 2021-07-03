// Input form data collection

// Element selcetors
const modal = document.querySelector(".overlay");
const form = document.querySelector(".form");

// Function to open the modal
export const openModal = function () {
  // Remove the hidden class from the HTML
  modal.classList.remove("hidden");
  form.classList.remove("hidden");
};

// Function to close the modal
export const closeModal = function () {
  // Click outside the modal - 
  modal.classList.add("hidden");
  form.classList.add("hidden");
  // Click X button

  // Press the esc key
};
