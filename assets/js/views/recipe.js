import * as modal from "../model.js";

const modalContainer = document.querySelector("#modal");



// Function so that clicking on the recipe name in the table will open up the recipe modal
export function ingredientsHtml(ingredients, inputData) {
  
  return   `
       <li>${
         inputData.messure === "metric"
           ? ingredients.measures.metric.amount
           : ingredients.measures.us.amount
       } ${inputData.messure === "metric"
       ? ingredients.measures.metric.unitShort
       : ingredients.measures.us.unitShort
   }: ${ingredients.name}</li>
      `;

}



export async function renderRecipe(recipe,inputData,ingredients) {


  modalContainer.innerHTML = `
<div class="form__wrapper">
        <div class="recipe">
        <div class="recipe__head">
        <img
          class="recipe__head-logo"
          src="./assets/images/png/Logo.png"
          alt="CookIt Logo"
        />
      <h1 class="recipe__head-header">${recipe.name}</h1>
        </div>
        <div class="recipe__card">
          <div class="recipe__card__info">
          <img src="${recipe.image}" alt="${
    recipe.name
  }" class="recipe__card__info-img">
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
            <h3 class="recipe__card__info__web-dietary">Dietry <br> <b>${
              recipe.dietry
            }</b></h3>
            <a href="${
              recipe.sourceUrl
            }" class="recipe__card__info__web-link">Go to the website</a>
          </div>
        </div>
            <ul class="recipe__card__info-ingrediants">
              ${recipe.ingredients.map(ingredientsHtml).join('')}
            </ul>
          </div>
          <div class="recipe__card__method">
            <h2 class="recipe__card__method-h2">Method</h2>
          <p class="recipe__card__method-p">${recipe.stepsHtml}</p>
          </div>
        </div>
      </div>
    </div>
      <div class="recipe__right">
        <a href="#" class="recipe__right-close"><i class="fas fa-times"></i></a>
        <div class="recipe__right__buttons">
          <button href="" id="pdfRecipe" class="btn recipe__right__buttons-btn">PDF</button>
          <button href="" id="saveRecipe" class="btn recipe__right__buttons-btn">Save</button>
          <button href="" id="backRecipe" class="btn recipe__right__buttons-btn">Back</button>
        </div>
      </div> 
      </div>
`;
}
