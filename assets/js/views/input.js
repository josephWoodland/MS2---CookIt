// Element selcetors
const modal = document.querySelector(".overlay");
const form = document.querySelector(".form");
const formWrapper = document.querySelector(".form__wrapper");
const startBtn = document.querySelector(".main__center-btn");

/**
 * @param {Event} buttonClick
 * 
 * @return {} HTML change
 */
export function openModal() {
  modal.classList.remove("hidden");
  form.classList.remove("hidden");
  formWrapper.classList.remove("hidden");
  startBtn.classList.add("hidden");
}
/**
 * @param {Event} buttonClick
 * 
 * @return {} HTML change
 */
export function closeModal() {
  modal.classList.add("hidden");
  form.classList.add("hidden");
  formWrapper.classList.add("hidden");
  startBtn.classList.remove("hidden");
}
/**
 * @param {k} keyPress
 * 
 * @return call the closeModal function
 */
export function escPress(k) {
  if (k.key === "Escape") {
    closeModal();
  }
}
