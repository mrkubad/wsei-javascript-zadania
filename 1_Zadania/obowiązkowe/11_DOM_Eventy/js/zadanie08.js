document.addEventListener('DOMContentLoaded', () => {
    const spanWidth = document.querySelector('#windowWidth');
    const spanHeight = document.querySelector('#windowHeight');
    spanHeight.innerHTML = window.outerHeight;
    spanWidth.innerHTML = window.outerWidth;


    window.addEventListener('resize', e => {
        spanWidth.innerHTML = e.target.outerWidth;
        spanHeight.innerHTML = e.target.outerHeight;
    });
});