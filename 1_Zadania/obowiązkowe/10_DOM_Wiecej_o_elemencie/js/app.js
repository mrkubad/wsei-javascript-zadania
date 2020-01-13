document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    // Zadanie 0
    let task0ListElement = document.querySelectorAll('.ex5 li');
    task0ListElement[4].classList.add('big');
    for(let i = 0; i < task0ListElement.length; ++i) {
        if(i % 2 == 0)
            task0ListElement[i].style.backgroundColor = 'green';
        if(i % 3 == 0)
             task0ListElement[i].style.textDecoration = 'underline';
    }
    // Zadanie 1
    const chromeElement = document.querySelector('.chrome');
    const firefoxElement = document.querySelector('.firefox');
    const edgeElement = document.querySelector('.edge');

    chromeElement.style.backgroundImage = 'url(./assets/img/chrome.png)';
    edgeElement.style.backgroundImage = 'url(./assets/img/edge.png)';
    firefoxElement.style.backgroundImage = 'url(./assets/img/firefox.png)';

    chromeElement.nextElementSibling.href = 'https://www.google.com';
    chromeElement.nextElementSibling.innerHTML = 'Google Chrome';
    edgeElement.nextElementSibling.href = 'https://www.microsoft.com';
    edgeElement.nextElementSibling.innerHTML = 'Microsoft Edge';
    firefoxElement.nextElementSibling.href = 'https://www.mozilla.com';
    firefoxElement.nextElementSibling.innerHTML = 'Mozilla Firefox';

    chromeElement.style.width = '100px';

    // Zadnie 2
    const spanElements = document.querySelector('.ex2').querySelectorAll('span');
    spanElements[0].innerHTML = 'Jakub Dedio';
    spanElements[1].innerHTML = 'niebieski';
    spanElements[2].innerHTML = 'nie mam żadnej';


    // Zadanie 3
    const listElements = document.querySelector('.ex3').querySelectorAll('li');
    document.querySelector('.ex3').querySelector('ul').classList.add('menu');
    for(let listElement of listElements) {
        listElement.classList.add('menuElement');
        listElement.classList.remove('error');
    }

    // Zadnie 4
    const listElementsEx4 = document.querySelector('.ex4').querySelectorAll('li');
    let counterEx4 = 1;
    for(let listElementEx4 of listElementsEx4) {
        listElementEx4.dataset.id = counterEx4;
        counterEx4++;
    }


});