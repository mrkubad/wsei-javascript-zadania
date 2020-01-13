document.addEventListener('DOMContentLoaded', () => {
    // Zadanie 2
    const randomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);
    document.querySelectorAll('[id^=button]').forEach(elem => {
        elem.addEventListener('click', e => {
            const _this = e.target;
            _this.parentElement.style.backgroundColor = randomColor();
        });
    });
});