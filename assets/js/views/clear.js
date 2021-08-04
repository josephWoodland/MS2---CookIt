/*jshint esversion: 11 */
/**
 * Clears local storage
 * @param {Event} buttonClick
 */
export function clearPopup() {
  const answer = window.confirm(
    "Are you sure you want to delete local storage?"
  );
  if (answer) {
    localStorage.clear();
    window.location.reload();
  }
}
