import * as input from './input.js'

let curRecipe;

export function curRecipeData(recipe){
    curRecipe = recipe;
}

export function saveRecipe(){
    // Retrive a save name for the recipe
    const recipeName = prompt('What name would you like to save this as?')
    // Turn the current recipe into to a string to be saved - for some reason this was returning undifind when I reied to strignify in the functino like other saves to storage
    const recipe = JSON.stringify(curRecipe);
    // Save to storage
    window.localStorage.setItem(`recipe: ${recipeName}`, recipe)
    input.closeModal();
}