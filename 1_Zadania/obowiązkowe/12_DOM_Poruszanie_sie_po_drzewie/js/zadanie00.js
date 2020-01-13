document.addEventListener('DOMContentLoaded', () => {
    // Zadanie 0
    const firstAnswer = document.querySelector('.first').children[0].children[2].dataset.answer;
    const secondAnswer = document.querySelector('#second').parentElement.children[3].dataset.answer;
    const elemTemp = document.querySelector('[data-ex="third"]').parentElement.parentElement.lastElementChild.children[0];
    const centerChild = elemTemp.children.length / 2;
    const thirdAnswer = elemTemp.children[Math.floor(centerChild)].dataset.answer;
    const fourthAnswer = document.querySelector('.forth').parentElement.querySelector('article').querySelectorAll('p')[1].dataset.answer;

    console.log(firstAnswer);
    console.log(secondAnswer);
    console.log(thirdAnswer);
    console.log(fourthAnswer);
});