// Zadanie 4
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#name').addEventListener("input", e => {
        const typeContainer = document.getElementById('type');
        const currentValue = e.target.value;
        if(currentValue[0] == '4') {
            typeContainer.innerHTML = 'Visa';
            if(currentValue.length >= 13 && currentValue.length <=16) {
                e.target.style.borderColor = 'green';
            }
            else {
                e.target.style.borderColor = 'red';
            }
        }
        else if(currentValue[0] == '5') {
            typeContainer.innerHTML = 'Matercard';
            if(currentValue.length == 16) {
                e.target.style.borderColor = 'green';
            }
            else {
                e.target.style.borderColor = 'red';
            }
        }
        else if(currentValue[0] == '3' && currentValue.length > 1 && (currentValue[1] == '4' || currentValue[1] == '7')) {
            typeContainer.innerHTML = 'American Express';
            if(currentValue.length == 15) {
                e.target.style.borderColor = 'green';
            }
            else {
                e.target.style.borderColor = 'red';
            }
        }
        else {
            typeContainer.innerHTML = '';
        }
    });
  });