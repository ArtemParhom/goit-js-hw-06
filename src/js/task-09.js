function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const restElements = {
  bodyEl: document.querySelector(`body`),
  btnChangeColorEl: document.querySelector(`.change-color`),
  changeColorTextEl: document.querySelector(`.color`)
};


const handleClick = () => {
  restElements.bodyEl.style.backgroundColor = getRandomHexColor();
  restElements.changeColorTextEl.textContent = getRandomHexColor();
};

restElements.btnChangeColorEl.addEventListener(`click`, handleClick);


