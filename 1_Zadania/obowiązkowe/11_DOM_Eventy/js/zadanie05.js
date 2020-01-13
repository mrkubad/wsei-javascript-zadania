document.addEventListener('DOMContentLoaded', () => {
    const randomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);
    document.querySelectorAll('[id^=box]').forEach(elem => elem.addEventListener('click', e => {
        e.target.style.backgroundColor = randomColor();
    }));

});