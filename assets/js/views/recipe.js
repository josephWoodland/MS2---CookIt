import * as modal from '../model.js'

const modalContainer = document.querySelector('#modal');


// Function so that clicking on the recipe name in the table will open up the recipe modal
export async function renderRecipe(recipe){


    async function ingredientsHtml(ingredients) {
        console.log(ingredients);
        return `
         <li>${modal.inputData.meassure === "metric" ? ingredients.measures.metric.amount : ingredients.measures.us.amount} : ${ingredients.name}</li>
        `
    }

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
          <img src="${recipe.image}" alt="${recipe.name}" class="recipe__card__info-img">
            <div class="recipe__card__info__basic">
            <div class="recipe__card__info__basic__portion">
            <h3 class="recipe__card__info__basic__portion-time">Prep time <br> <b> ${recipe.time} mins</b></h3>
            <h3 class="recipe__card__info__basic__portion-serving">Serves <br> <b>Serves ${recipe.servings}</b></h3>
          </div>  
          <div class="recipe__card__info__web">
            <h3 class="recipe__card__info__web-dietary">Dietry <br> <b>${recipe.dietry}</b></h3>
            <a href="${recipe.sourceUrl}" class="recipe__card__info__web-link">Go to the website</a>
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
`

}

// steps.innerHTML =`let's do it\n\nPreheat the oven to 350* and line 12 muffin cups with parchment paper liners.\n\nIn a large glass bowl sift together the almond flour, coconut flour, baking powder, salt and garlic powder. Toss in one cup cheddar cheese and the chopped ham. Stir the flour mixture to combine with the ham and the cheddar cheese.\n\nTo the flour mixture you will now add in the melted butter, cream, eggs and water. Thoroughly mix all the ingredients together to form a batter. The batter will be slightly thick as these are dense muffins.\n\nDivide batter evenly into the muffin tin. Sprinkle each muffin top with the remaining 1/2 cup shredded cheddar.\n\nBake for 30 minutes in 350* oven. Test with a toothpick to check for doneness as these muffins are quite dense and oven temperatures can vary slightly. If they need more time keep them in the oven for a few minutes longer.\n\nRemove and enjoy. These muffins are great hot out of the oven, but also keep well in an airtight bag or container in the fridge for a few days.`