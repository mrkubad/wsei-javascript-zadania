// Zadnie 1
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.button').addEventListener('click', e => {
        let elementCounter = Number.parseInt(e.target.dataset.elementCounter);
        if(Number.isNaN(elementCounter)) {
            elementCounter = 0;
        }
        const liElement = document.createElement('li');

        liElement.innerHTML = `Element ${elementCounter + 1} - w chwili dodania było ${elementCounter++} elementów`;
        document.querySelector('.menu').appendChild(liElement);
        e.target.dataset.elementCounter = elementCounter;
    });
});