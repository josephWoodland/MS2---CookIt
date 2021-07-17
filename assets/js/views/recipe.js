import * as model from "../model.js";
const mainCenter = document.querySelector("#mainCenter");
const plans = document.querySelector("#plans");
const home = document.querySelector("#home");
const recipe = document.querySelector('#recipes');
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
  const renderContainer = document.querySelector("#renderContainer");
  renderContainer.innerHTML = "";
  const recipeArr = model.savedRecipes[0];
  const html = recipeArr.map(recipesHtml).join("");
  renderContainer.innerHTML = `${html}`;
  model.fetchSavedData();
}
/**
 * @param {Array, index} recipeData
 *
 * @return {String} to print to HTML
 */
export function recipesHtml(recipesArr, index) {

  return `
  <div class="settings__container-recipe">
              <a
                id="${index}"
                href=""
                onClick="renderSavedRecipe(this.id)"
                class="settings__container-recipe-item btn"
                >${recipesArr.saveName}</a
              >
              <a href="#" id="${index}" onclick="editSaveName(${index})" class="settings__container-recipe-edit"
                ><i class="fas fa-edit"></i></a
              ><a href="#" id="${index}" onclick="deleteItem(${index})" class="settings__container-recipe-delete"
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
  recipe.classList.add("active");
  home.classList.remove("active");
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
                    <img src="${recipe.image}" alt="${
                recipe.name
                     }" class="recipe__card__info-img">
                    <div class="recipe__card__wrapper">
                        <div class="recipe__card__info__basic">
                        <div class="recipe__card__info__basic__portion">
                        <h3 class="recipe__card__info__basic__portion-time">Prep time <br> <b> ${
                        recipe.time
                        } mins</b></h3>
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
                        <ul class="recipe__card__info-ingrediants">
                        ${recipe.ingredients.map(ingredientsHtml).join("")}
                        </ul>
                    </div>
                   </div>
                    <div class="recipe__card__method">
                        <h2 class="recipe__card__method-h2">Method</h2>
                    <p class="recipe__card__method-p">${recipe.stepsHtml}</p>
                    </div>
                </div>
            </div>
`;
  model.fetchSavedData();
}
