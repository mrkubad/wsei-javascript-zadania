document.addEventListener('DOMContentLoaded', () => {
    console.log("Działa!");
    const buttonNext = document.querySelector('#nextPicture');
    const buttonPrev = document.querySelector('#prevPicture');
    const listElements = document.querySelectorAll('ul li');
    let visiblePicture = 0;

    listElements[visiblePicture].classList.add('visible');

    

    console.log(buttonNext);
    console.log(buttonPrev);
    console.table(listElements);

    buttonNext.addEventListener('click', e => {
        listElements[visiblePicture].classList.remove('visible');
        ++visiblePicture;
        if(visiblePicture > listElements.length - 1)
            visiblePicture = 0;
        listElements[visiblePicture].classList.add('visible');
    });
    buttonPrev.addEventListener('click', e => {
        listElements[visiblePicture].classList.remove('visible');
        --visiblePicture;
        if(visiblePicture < 0)
            visiblePicture = listElements.length - 1;
        listElements[visiblePicture].classList.add('visible');
    });

    // Punkt 7
    // Wyrzuca błąd w konsoli IndexOutOfRange, dlatego trzeba dodać warunki brzegowe

});