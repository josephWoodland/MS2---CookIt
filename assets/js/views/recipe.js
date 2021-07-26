import * as model from "../model.js";
const mainCenter = document.querySelector("#mainCenter");
const plans = document.querySelector("#plans");
const home = document.querySelector("#home");
const recipePage = document.querySelector("#recipes");
const settings = document.querySelector('#settings');

export function renderRecipePage() {
  recipePage.classList.add("active");
  home.classList.remove("active");
  settings.classList.remove("active");
  plans.classList.remove("active");
  mainCenter.innerHTML = `
  <div class="recpie">
      <a class="recipe__saved" onclick="renderSavedRecipes()" href="">Saved Recipes</a>
      <div id="recipeContainer" class="recipe__container"></div>
  </div>  
  `;
}

/**
 * @param {Array, Array} ingredientsData
 *
 * @return {String} to print to HTML
 */
export function ingredientsHtml(ingredients, inputData) {
  return `
  <li>${
    inputData.messure === "metric"
      ? ingredients.measures.metric.amount
      : ingredients.measures.us.amount
  } ${
    inputData.messure === "metric"
      ? ingredients.measures.metric.unitShort
      : ingredients.measures.us.unitShort
  }: ${ingredients.name}</li>
  `;
}
/**
 * @param {index} button click
 *
 * @return {Array} recipeArray
 */
export function renderSavedRecipe(i) {
  const recipeArr = model.savedRecipes[0];
  const recipe = recipeArr[i];
  renderRecipe(recipe);
  model.fetchSavedData();
}
/**
 * @param {Array} recipeData
 *
 * @return {String} to print to HTML
 */
export function renderRecipes() {
  const recipeContainer = document.querySelector("#recipeContainer");
  recipeContainer.innerHTML = "";
  const recipeArr = model.savedRecipes[0];
  if (!model.savedRecipes[0]) {
    recipeContainer.innerHTML = `<h1 style="grid-column:1 / span 5">You have no stored recipies</h1>`;
  } else {
    const html = recipeArr.map(recipesHtml).join("");
    recipeContainer.innerHTML = `${html}`;
    model.fetchSavedData();
  }
}
/**
 * @param {Array, index} recipeData
 *
 * @return {String} to print to HTML
 */
export function recipesHtml(recipesArr, index) {

  return `
  <div class="recipe__container-recipe">
              <a
                id="${index}"
                href=""
                onClick="renderSavedRecipe(${index})"
                class="recipe__container-recipe-item btn"
                >${recipesArr.saveName}</a
              >
              <a href="#" id="${index}" onclick="editSaveName(${index})" class="recipe__container-recipe-edit"
                ><i class="fas fa-edit"></i></a
              ><a href="#" id="${index}" onclick="deleteItem(${index})" class="recipe__container-recipe-delete"
                ><i class="far fa-trash-alt"></i></a
              >
            </div>
  
            `;
}
/**
 * @param {Array} recipeData
 *
 * @return {String} to print to HTML
 */
export async function renderRecipe(recipe) {
  recipePage.classList.add("active");
  home.classList.remove("active");
  settings.classList.remove("active");
  plans.classList.remove("active");
  mainCenter.innerHTML = `
  <div class="recipe__links">
  <ul class="recipe__links"><a class="recipe__links-link" href="">Saved Recipes</a></ul>
</div>
<div id="recipe" class="recipe">
  <div class="recipe__nav__input">
      <h2 class="recipe__nav__input-header">
      Would you like to save this plan?
      </h2>
  <input 
  required
  type="text"
  class="saveName"
  name="saveName"
  id="saveName"
  placeholder="e.g. brunch eggs"
  />
  <input type="submit" id="nameSubmitRecipe" class="recipe__save-btn btn" value="save" onclick="getSavedName()">
  </div>
  <h1 class="recipe__head-header">${recipe.name}</h1>
  
<div class="recipe__card">
  <div class="recipe__card__info">
    <ul class="recipe__card__info-ingredients">
      ${recipe.ingredients.map(ingredientsHtml).join("")}
      </ul>
    <div class="recipe__card__wrapper">
  <img src="${recipe.image}" alt="${
    recipe.name
  }" class="recipe__card__info-img">
      <div class="recipe__card__info__basic">
      <div class="recipe__card__info__basic__portion">
      <h3 class="recipe__card__info__basic__portion-time">Prep time <br> <b>${
        recipe.time
      }</b></h3>
      <h3 class="recipe__card__info__basic__portion-serving">Serves <br> <b>Serves ${
        recipe.servings
      }</b></h3>
  </div>  
  <div class="recipe__card__info__web">
      <a href="${
        recipe.sourceUrl
      }" class="recipe__card__info__web-link">Go to the website</a>
  </div>
       </div>
  </div>
 </div>
  <div class="recipe__card__method">
      <h2 class="recipe__card__method-h2">Method</h2>
      <p class="recipe__card__method-p">${recipe.stepsHtml}</p>
  </div>
</div>
`;
  model.fetchSavedData();
}
