const refs ={
    nameInputEl: document.querySelector(`#name-input`),
    nameOutputEl: document.querySelector(`#name-output`),};

refs.nameInputEl.addEventListener(`input`,nameOutput);

function nameOutput(event) {console.log(event);
    
        refs.nameOutputEl.textContent = event.currentTarget.value; 
        
        if (refs.nameOutputEl.textContent == "") {
            refs.nameOutputEl.textContent = "Anonymous"
        } 
};
    
    