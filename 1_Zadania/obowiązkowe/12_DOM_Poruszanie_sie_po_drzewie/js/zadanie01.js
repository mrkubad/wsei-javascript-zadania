document.addEventListener('DOMContentLoaded', () => {
    // Zadanie 1
    document.querySelectorAll('.button').forEach(elem => {
        elem.addEventListener('click', e => {
            const _this = e.target;
            if(_this.nextElementSibling !== null) {
                const sibling = _this.nextElementSibling;
                if(sibling.style.display === 'none') {
                    sibling.style.display = 'block';
                }
                else {
                    sibling.style.display = 'none';
                }
            }

        });
    });
});