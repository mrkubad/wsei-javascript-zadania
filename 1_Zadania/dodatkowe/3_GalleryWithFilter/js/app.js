// Punkt 1
document.addEventListener('DOMContentLoaded', () => {
    console.log('działa');
    // Punkt 2

    const galleryImages = document.querySelectorAll('#gallery img');
    const showButton = document.querySelector('#showButton');
    const hideButton = document.querySelector('#hideButton');
    const tagInput = document.querySelector('#tagInput');
    let tagInputValue;
    const getTagInputContentAndClear = () => tagInput.value + (tagInput.value = '');

    console.table(galleryImages);
    console.log(showButton);
    console.log(hideButton);
    console.log(tagInput);


    // Punkt 3

    showButton.addEventListener('click', e=> {
        console.log('klik');
        tagInputValue = getTagInputContentAndClear();
        console.log(tagInputValue);

        
        for(let image of galleryImages) {
            let tags = image.dataset.tag;
            // Punkt 6
            if(tags.indexOf(tagInputValue) != -1) {
                console.log(image.dataset.tag);
                // Punkt 7
                image.classList.remove('invisible');
            }
            // Punkt 7
            else {
                image.classList.add('invisible');
            }
        }
    });
    hideButton.addEventListener('click', e => {
        console.log('klik');
        tagInputValue = getTagInputContentAndClear();
        console.log(tagInputValue);

        for(let image of galleryImages) {
            let tags = image.dataset.tag;
            // Punkt 6
            if(tags.indexOf(tagInputValue) != -1) {
                console.log(image.dataset.tag);
                // Punkt 7
                image.classList.add('invisible');
            }
            // Punkt 7
            else {
                image.classList.remove('invisible');
            }
        }
    });


// Punkt 8
// Stronka działa, ale nie podoba mi się jedna rzecz. Jak się wpisze w pola
// tag, który nie jest zawarty w żadnym ze zdjęć, przyciski odwracają swoje działanie
// Przykład: to jest input---->[tag]---->Show, chowa wszystkie
// Przykład: to jest input---->[tag]---->Hide, pokazuje wszystkie

});