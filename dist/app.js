import { validateInput, resetButtonHandler } from './util.js';
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
const inputArray = [
    hundredInput,
    fiftyInput,
    twentyInput,
    tenInput,
    fiveInput,
    toonieInput,
    loonieInput,
    quarterInput,
    dimeInput,
    nickelInput
];
const inputChangeHandler = () => {
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
};
const resetHandler = (event) => {
    resetButtonHandler(event, inputArray);
    inputChangeHandler();
};
inputArray.map((inputEl) => {
    inputEl.addEventListener('change', inputChangeHandler);
});
inputArray.map((inputEl) => inputEl.addEventListener('blur', validateInput));
reset.addEventListener('click', resetHandler);
//# sourceMappingURL=app.js.map