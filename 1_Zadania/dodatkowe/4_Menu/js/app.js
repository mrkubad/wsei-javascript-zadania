document.addEventListener('DOMContentLoaded', () => {
    console.log('działa');

    const listElements = document.querySelectorAll('.nav>ul>li');
    console.table(listElements);

    for(let listElement of listElements) {
        listElement.addEventListener('mouseover', e => {
            //console.log('trafiłeś!');
            let nestedList = e.target.querySelector('ul');
            if(nestedList !== null) {
                nestedList.style.display = 'block';
            }
        });
        listElement.addEventListener('mouseout', e => {
            //console.log('Żegnaj marynażu!');
            let nestedList = e.target.querySelector('ul');
            if(nestedList !== null) {
                nestedList.style.display = 'none';
                //console.log('Żegnaj marynażu!! Na pokładzie był skarb!!');
            }
        });
    }
    // Punkt 8
    // Nie można skorzystać z elementów podrzędnych jeśli byłyby funkcjonalne,
    // bo zaraz po opuszczeniu przez kursor elementu głównego podlista znika :(
});