const validationInputEl = document.querySelector(`#validation-input`);
 
 let lengthTextInput = validationInputEl.dataset.length;


validationInputEl.addEventListener(`input`, inputValue);

validationInputEl.addEventListener(`blur`, inputBlur);

function inputValue(event) {
    lengthTextInput = event.currentTarget.value.length; 
    return lengthTextInput;
}



function inputBlur() {
    validationInputEl.style.borderColor =
    lengthTextInput === Number(validationInputEl.dataset.length) ?
         validationInputEl.setAttribute(`class`,`valid`):
         validationInputEl.setAttribute(`class`,`invalid`);
}




