export const validateInput = (event) => {
    console.log('validating input...');
    if (event.target.value.length > 0 && /^[0-9]+$/.test(event.target.value)) {
        return true;
    }
    else {
        event.target.value = '';
        return false;
    }
};
//# sourceMappingURL=util.js.map