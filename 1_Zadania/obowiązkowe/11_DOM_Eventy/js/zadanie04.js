document.addEventListener('DOMContentLoaded', e => {
    let counter = 1;
    const buttons = document.querySelectorAll('[id^=button]');
    console.log(buttons);
    for(let button of buttons ) {
        button.addEventListener('click', e => {
            document.querySelector('.counter').innerHTML = counter++;
        });
    }

});