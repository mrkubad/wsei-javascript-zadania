// Zadanie 3
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.listContainer').forEach(elem => {
        elem.addEventListener('mouseover', e => {
            const _this = e.target;
            _this.querySelectorAll('li').forEach((elem, idx, arr) => {
                if(idx === 0) {
                    elem.style.color = 'red';
                }
                else if(idx === arr.length - 1) {
                    elem.style.color = 'blue';
                }
                else {
                    elem.style.color = 'green';
                }
            });
        });
    });
});