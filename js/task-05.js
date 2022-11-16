const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
};
refs.inputEl.addEventListener('input', onInput);
function onInput(event) { 
    const result = event.target.value;
    refs.outputEl.textContent = result

    if (refs.outputEl.textContent === "") {
        refs.outputEl.textContent = "Anonymous"
    }
};