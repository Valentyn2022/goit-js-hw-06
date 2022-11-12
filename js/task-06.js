const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', onInputBlur);
dataSetInputEl = parseInt(input.dataset.length);
function onInputBlur(event)  {
    if (event.target.value.length === dataSetInputEl) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');

    } else{
        inputEl.classList.add('invalid')
    }
}