// Zadanie 3
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#remove').addEventListener('click', e => {
        e.target.parentElement.removeChild(e.target);
    });
});