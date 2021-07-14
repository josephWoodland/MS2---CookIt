export function renderOptions() {
  const renderContainer = document.querySelector("#renderContainer");
  const header = document.querySelector(".settings__head-header");
  header.textContent = "Display options";
  renderContainer.innerHTML = `

  
  <div class="options__question"
    <h1 class="options__question-header">Press the button to change the button colour</h1>
    <select name="buttons" id="buttonSelect" class=""options__question-button">
       <option value="default">Default</option>
       <option value="red">Red</option>
       <option value="green">Green</option>
       <option value="blue">Blue</option>
    </select>
    <button id="btnSelect" onclick="collectBtnSelect()" class="options__question-btn-buttonSelect btn">Select</button>
  </div>
  <div class="options__question"
    <h1 class="options__question-header">Press the button to change the text colour</h1>
    <select name="buttons" id="textColourSelect" class=""options__question-button">
      <option value="default">Default</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
    <button id="btnSelect" onclick="collectTextSelect()" class="options__question-btn-textSelect btn">Select</button>
  </div>
  <div class="options__question"
    <h1 class="options__question-header">Press the button to change the background colour</h1>
    <select name="buttons" id="backgroundColourSelect" class=""options__question-button">
      <option value="default">Default</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
    <button id="btnSelect" onclick="collectBackSelect()" class="options__question-btn-backSelect btn">Select</button>
  </div>
`;
}
