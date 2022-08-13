export const validateInput = (event) => {
    if (event.target.value.length > 0 && /^[0-9]+$/.test(event.target.value)) {
        return true;
    }
    else {
        event.target.value = '';
        return false;
    }
};
export const resetButtonHandler = (event, inputArr) => {
    event.preventDefault();
    inputArr.map(inputEl => inputEl.value = '');
    inputArr.map(inputEl => inputEl.focus());
    inputArr.map(inputEl => inputEl.blur());
};
//# sourceMappingURL=util.js.map