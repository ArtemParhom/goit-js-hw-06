const formEl = document.querySelector(`.login-form`);

const dataUser = {};

formEl.addEventListener(`submit`, formElSubmit);

function formElSubmit(event) {
    event.preventDefault();

    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;

    if (passwordValue == "" || emailValue =="") {
        alert(`Fill in all the inputs`);
        return;
    }
        dataUser.email = emailValue;
        dataUser.password = passwordValue;
        console.log(dataUser);
    event.currentTarget.reset();
}
// 