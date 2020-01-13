// Zadnie 2
document.addEventListener('DOMContentLoaded', () => {
    const formControl = document.querySelector('.form-control');
    console.log(formControl);
    formControl.addEventListener('change', e => {
        let selectedElement = e.target.value;
        if(selectedElement == 'Os X') {
            selectedElement = 'Apple';
        }
        document.querySelectorAll('img').forEach(elem => {
            if(elem.alt == selectedElement) {
                elem.style.display = 'block';
            }
            else {
                elem.style.display = 'none';
            }
        });

    });
});