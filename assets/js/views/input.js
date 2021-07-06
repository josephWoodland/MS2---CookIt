// Input form data collection

// Element selcetors
const modal = document.querySelector(".overlay");
const form = document.querySelector(".form");
const startBtn = document.querySelector('.main__center-btn');

// Function to open the modal
export function openModal() {
  // Remove the hidden class from the HTML
  modal.classList.remove("hidden");
  form.classList.remove("hidden");
  startBtn.classList.add('hidden')
}

// Function to close the modal
export function closeModal() {
  modal.classList.add("hidden");
  form.classList.add("hidden");
  startBtn.classList.remove('hidden');
}

export function escPress(k) {
  if (k.key === "Escape") {
    closeModal();
  } 
}
