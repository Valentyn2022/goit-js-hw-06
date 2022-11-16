const refs = {
    btnDecrement : document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value'),
    btnIncrement : document.querySelector('[data-action="increment"]'),
}

let counterValue = 0;

refs.btnDecrement.addEventListener('click', onBtnDecrement);
refs.btnIncrement.addEventListener('click', onBtnIncrement);

function onBtnDecrement() { 
    counterValue = counterValue - 1;

    refs.counter.innerHTML = counterValue;

}

function onBtnIncrement() { 
    counterValue = counterValue + 1;

    refs.counter.innerHTML = counterValue;
}