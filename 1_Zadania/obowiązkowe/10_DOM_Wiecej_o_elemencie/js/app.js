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
});