const decrementElBtn = document.querySelector(`button[data-action="decrement"]`);

const incrementElBtn = document.querySelector(`button[data-action="increment"]`);

const valueEl = document.getElementById(`value`);

let counterValue = 0;

const decrementBtnClick = () => {
   valueEl.textContent = `${counterValue -=1}`
};

const incrementBtnClick = () => {
    valueEl.textContent = `${counterValue +=1}`  
};

decrementElBtn.addEventListener("click", decrementBtnClick);

incrementElBtn.addEventListener("click", incrementBtnClick);



