const formEl = document.querySelector(".login-form");
const formData = { };

formEl.addEventListener('submit', oneSubmit);
function oneSubmit(event) {
    event.preventDefault();
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;
    if (email ==="" || password === "") {
        alert('All fields must be filled!   Все поля должны быть заполнены!')
    } else { 
        formData.name = email;
        formData.password = password;
        console.log('Form Data: ', formData);
        formEl.reset();
    }
}