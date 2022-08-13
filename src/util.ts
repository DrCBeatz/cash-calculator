export const validateInput = (event: Event) => {
    // regex to check whether input is a number
    if ((event.target as HTMLInputElement).value.length > 0 && /^[0-9]+$/.test((event.target as HTMLInputElement).value)) {
        return true;     
    } else {
        (event.target as HTMLInputElement).value = '';
        return false;
    }
}

export const resetButtonHandler = (event: Event, inputArr: HTMLInputElement[]) => {

    event.preventDefault();
    
    inputArr.map( inputEl => inputEl.value = '');

    // have to focus all inputs before they can be unfocused
    inputArr.map( inputEl => inputEl.focus() );
    inputArr.map( inputEl => inputEl.blur() );

}
