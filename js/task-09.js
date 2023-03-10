function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const restElements = {
  bodyEl: document.querySelector(`body`),
  btnChangeColorEl: document.querySelector(`.change-color`),
  changeColorTextEl: document.querySelector(`.color`)
};

const handleClick = () => {
  const randomHexColor = getRandomHexColor();
  console.log(randomHexColor);
  restElements.bodyEl.style.backgroundColor = randomHexColor;
  restElements.changeColorTextEl.textContent = randomHexColor;
};

restElements.btnChangeColorEl.addEventListener(`click`, handleClick);


