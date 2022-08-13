export const validateInput = (event: Event) => {
    console.log('validating input...');
    // regex to check whether input is a number
    if ((event.target as HTMLInputElement).value.length > 0 && /^[0-9]+$/.test((event.target as HTMLInputElement).value)) {
        return true;     
    } else {
        (event.target as HTMLInputElement).value = '';
        return false;
    }
}
