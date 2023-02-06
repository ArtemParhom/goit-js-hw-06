const validationInputEl = document.querySelector(`#validation-input`);
 
 let lengthTextInput = 0;

validationInputEl.addEventListener(`input`, inputValue);

validationInputEl.addEventListener(`blur`, inputBlur);

function inputValue(event) {
    lengthTextInput = event.currentTarget.value.length; 
    return lengthTextInput;
}

function inputBlur() {
    if (lengthTextInput === Number(validationInputEl.dataset.length)) {
        validationInputEl.style.border = `2px solid #4caf50`;
        return;
    }
    validationInputEl.style.border = "2px solid #f44336";
}




