export function selectBackgroundColour(){
    const selection = document.querySelector('#backgroundColourSelect');
    const html = document.querySelector('html');
    const userChoice = selection.value;
  
    if (userChoice === 'default'){
        return
    } else {
        html.style.backgroundColor = userChoice;
        localStorage.setItem('background',userChoice);
    }


}
export function selectTextColour(){
    const selection = document.querySelector('#textColourSelect');
    const userChoice = selection.value;
    const html = document.querySelector('html');

    if (userChoice === 'default'){
        return
    } else {
        html.style.color = `${userChoice} !important`;
        localStorage.setItem('text',userChoice);
        
    }
    
}
export function selectBtnColour(){
    const selection = document.querySelector('#btnColourSelect');
    const userChoice = selection.value;
    const button = document.querySelectorAll('button');
    if (userChoice === 'default'){
        return
    } else {
        button.style.backgroundColor = userChoice;
        localStorage.setItem('button',userChoice);
    }
}

export function renderOptions() {
  const renderContainer = document.querySelector("#renderContainer");
  const header = document.querySelector(".settings__head-header");
  header.textContent = "Display options";
  renderContainer.innerHTML = `

  
  <div class="options__question"
    <h1 class="options__question-header">Press the button to change the button colour</h1>
    <select name="buttons" id="btnColourSelect" class=""options__question-button">
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
