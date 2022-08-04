const hundredInput = <HTMLInputElement>document.getElementById('hundred');
const fiftyInput = <HTMLInputElement>document.getElementById('fifty');
const twentyInput = <HTMLInputElement>document.getElementById('twenty');
const tenInput = <HTMLInputElement>document.getElementById('ten');
const fiveInput = <HTMLInputElement>document.getElementById('five');
const toonieInput = <HTMLInputElement>document.getElementById('toonie');
const loonieInput = <HTMLInputElement>document.getElementById('loonie');
const quarterInput = <HTMLInputElement>document.getElementById('quarter');
const dimeInput = <HTMLInputElement>document.getElementById('dime');
const nickelInput = <HTMLInputElement>document.getElementById('nickel');
const result = <HTMLInputElement>document.getElementById('result');
const reset = <HTMLInputElement>document.getElementById('reset');

const inputArray: HTMLInputElement[] = [
    hundredInput,
    fiftyInput,
    twentyInput,
    tenInput, 
    fiveInput,
    toonieInput,
    loonieInput,
    quarterInput, 
    dimeInput,
    nickelInput]

const inputChangeHandler = () => {

    let total: number = 0.00;

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

const resetButtonHandler = (event: Event) => {

    event.preventDefault();
    
    inputArray.map( inputEl => inputEl.value = '');

    // have to focus all inputs before they can be unfocused
    inputArray.map( inputEl => inputEl.focus() );
    inputArray.map( inputEl => inputEl.blur() );
    
    inputChangeHandler();
}

const validateInput = (event: Event) => {
    if ((event.target as HTMLInputElement).value.length > 0 && /^[0-9]+$/.test((event.target as HTMLInputElement).value)) {
        return true;     
    } else {
        (event.target as HTMLInputElement).value = '';
        return false;
    }
}

inputArray.map((inputEl: HTMLInputElement) => {
    inputEl.addEventListener('change', inputChangeHandler);
})

inputArray.map((inputEl: HTMLInputElement) => inputEl.addEventListener('blur', validateInput));

reset.addEventListener('click', resetButtonHandler);