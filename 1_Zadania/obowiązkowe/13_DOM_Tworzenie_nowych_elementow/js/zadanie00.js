// Zadanie 0
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.deleteBtn').forEach(elem => {
        elem.addEventListener('click', e => {
            const _this = e.target;
            _this.parentElement.parentElement.parentElement.removeChild(_this.parentElement.parentElement);
        });
    });
});