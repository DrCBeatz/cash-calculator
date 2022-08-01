var hundredInput = document.getElementById('hundred');
var fiftyInput = document.getElementById('fifty');
var twentyInput = document.getElementById('twenty');
var tenInput = document.getElementById('ten');
var fiveInput = document.getElementById('five');
var toonieInput = document.getElementById('toonie');
var loonieInput = document.getElementById('loonie');
var quarterInput = document.getElementById('quarter');
var dimeInput = document.getElementById('dime');
var nickelInput = document.getElementById('nickel');
var result = document.getElementById('result');
var reset = document.getElementById('reset');
var inputArray = [hundredInput, fiftyInput, twentyInput, tenInput,
    fiveInput, toonieInput, loonieInput, quarterInput,
    dimeInput, nickelInput];
var inputChangeHandler = function () {
    var total = 0.00;
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
var resetButtonHandler = function (event) {
    event.preventDefault();
    inputArray.map(function (inputEl) { return inputEl.value = ''; });
    // have to focus all inputs before they can be unfocused
    inputArray.map(function (inputEl) { return inputEl.focus(); });
    inputArray.map(function (inputEl) { return inputEl.blur(); });
    inputChangeHandler();
};
var validateInput = function (event) {
    if (event.target.value.length > 0 && /^[0-9]+$/.test(event.target.value)) {
        return true;
    }
    else {
        event.target.value = '';
    }
};
inputArray.map(function (inputEl) {
    inputEl.addEventListener('change', inputChangeHandler);
});
inputArray.map(function (inputEl) { return inputEl.addEventListener('blur', validateInput); });
reset.addEventListener('click', resetButtonHandler);
