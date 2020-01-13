// Zadanie 2
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#addBtn').addEventListener('click', e => {
        let newRow = document.createElement('tr');
        const data = [...document.querySelectorAll('input')];
        for(let i = 0; i < data.length; ++i) {
            let tempElem = document.createElement('td');
            tempElem.innerHTML = data[i].value;
            newRow.appendChild(tempElem);
        }
        document.querySelector('#orders').appendChild(newRow);
    });
});