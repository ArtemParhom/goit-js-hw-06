const sourseInputEl = document.querySelector(`#font-size-control`);

const changeTextEl = document.querySelector(`#text`);

let sourseValue = sourseInputEl.min * 0.5 + sourseInputEl.max * 0.5;
changeTextEl.style.fontSize = `${sourseValue}px`;

sourseInputEl.addEventListener(`input`, sourseInput);

function sourseInput(event) {
    sourseValue = event.target.value;
    changeTextEl.style.fontSize = `${sourseValue}px`; 
;}






