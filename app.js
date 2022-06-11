const hundredInput = document.getElementById('hundred');
const fiftyInput = document.getElementById('fifty');
const twentyInput = document.getElementById('twenty');
const tenInput = document.getElementById('ten');
const fiveInput = document.getElementById('five');
const toonieInput = document.getElementById('toonie');
const loonieInput = document.getElementById('loonie');
const quarterInput = document.getElementById('quarter');
const dimeInput = document.getElementById('dime');
const nickelInput = document.getElementById('nickel');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

const inputChangeHandler = (event) => {
    console.log('changed detected');

    let total = 0.00;

    total += +hundredInput.value * 100;
    total += +fiftyInput.value * 50;
    total += +twentyInput.value * 20;
    total += +tenInput.value * 10;
    total += +fiveInput.value * 5;
    total += +toonieInput.value * 2;
    total += +loonieInput.value * 1;
    total += +quarterInput.value * 0.25;
    total += +dimeInput.value * 0.1;
    total += +nickelInput.value * 0.05;

    result.innerHTML = total.toFixed(2);
}

const resetButtonHandler = (event) => {
    event.preventDefault();
    hundredInput.value = 0;
    fiftyInput.value = 0;
    twentyInput.value = 0;
    tenInput.value = 0;
    fiveInput.value = 0; 
    toonieInput.value = 0; 
    loonieInput.value = 0; 
    quarterInput.value = 0;
    dimeInput.value = 0;
    nickelInput.value = 0;
    inputChangeHandler();
}

hundredInput.addEventListener('change', inputChangeHandler);
fiftyInput.addEventListener('change', inputChangeHandler);
twentyInput.addEventListener('change', inputChangeHandler);
tenInput.addEventListener('change', inputChangeHandler);
fiveInput.addEventListener('change', inputChangeHandler);
toonieInput.addEventListener('change', inputChangeHandler);
loonieInput.addEventListener('change', inputChangeHandler);
quarterInput.addEventListener('change', inputChangeHandler);
dimeInput.addEventListener('change', inputChangeHandler);
nickelInput.addEventListener('change', inputChangeHandler);

reset.addEventListener('click', resetButtonHandler);