const refs ={
    nameInputEl: document.querySelector(`#name-input`),
    nameOutputEl: document.querySelector(`#name-output`),};

refs.nameInputEl.addEventListener(`input`,nameOutput);

function nameOutput(event) {
    refs.nameOutputEl.textContent = event.currentTarget.value;  
};