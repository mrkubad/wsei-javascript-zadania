// Zadnie 5
document.addEventListener('DOMContentLoaded', () => {
    const list1 = document.querySelector('#list1');
    const list2 = document.querySelector('#list2');
    document.querySelectorAll('.moveBtn').forEach(elem => {
        elem.addEventListener('click', e => {
            const _this = e.target;
            const grandpa = _this.parentElement.parentElement;
            const element = _this.parentElement;
            if(grandpa == list1) {
                list1.removeChild(element);
                list2.appendChild(element);
            }
            else {
                list2.removeChild(element);
                list1.appendChild(element);
            }

        });
    });
});