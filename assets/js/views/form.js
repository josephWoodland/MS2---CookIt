import * as model from "../model.js";
/**
 * @param {Event} buttonClick
 *
 * @return {} alters HTML code
 */
export function renderForm() {
  const mainSection = document.querySelector("#main");
  mainSection.innerHTML = `
  <div class="form">
  <h2 class="form__header">
    How about we get to know each other a little better?
  </h2>
  <p class="form__paragraph">
    From there we can create your perfect plan.
  </p>
  <form id="form" class="form__input" autocomplete="off">
    <div class="form__question" id="formName">
      <p>Whats your name?</p>
      <input required type="text" class="form__question-1" id="name" />
    </div>
    <div class="form__question">
      <p>How long do you want us to create a meal plan for?</p>
      <select required name="time" id="time" class="form__question-2">
        <option value="day">Day</option>
        <option value="week">Week</option>
      </select>
    </div>
    <div class="form__question">
      <p>What is your target Calories per day?</p>
      <input
        required
        type="number"
        class="form__question-3"
        id="calorie"
        placeholder="e.g. 2000"
      />
    </div>
    <div class="form__question">
      <p>What diet are you following?</p>
      <select name="diet" id="diet" class="form__question-4">
        <option value="none">None</option>
        <option value="omnivore">Omnivore</option>
        <option value="pesc">Pesctarian</option>
        <option value="veg">Vegetarian</option>
        <option value="ovo">Ovo Vegetarian</option>
        <option value="lacto">Lacto Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="fruitarian">Fruitarian</option>
        <option value="paleo">Paleo</option>
      </select>
    </div>
    <div class="form__question">
      <p>Have you got any allergies?</p>
      <select name="allergies" id="allergies" class="form__question-5">
        <option value="none">None</option>
        <option value="dairy">Dairy</option>
        <option value="egg">Egg</option>
        <option value="gluten">Gluten</option>
        <option value="grain">Grain</option>
        <option value="peanut">Peanut</option>
        <option value="seafood">Seafood</option>
        <option value="sesame">Sesame</option>
        <option value="shelfish">Shelfish</option>
        <option value="soy">soy</option>
        <option value="sulfite">Sulfite</option>
        <option value="treeNut">Tree Nut</option>
        <option value="wheat">wheat</option>
      </select>
    </div>
    <div class="form__question">
      <p>Metric or Imperial?</p>
      <select name="messure" id="messure" class="form__question-5">
        <option value="metric">Matric</option>
        <option value="imperial">Impreial</option>
      </select>
    </div>
    <input
    href="./plan.html"
      type="submit"
      class="btn form-btn"
      value="Make me a plan"
      id="form-btn"
      onclick="formSubmit()"
    />
  </form>
</div>
`;
  model.fetchSavedData();
}
