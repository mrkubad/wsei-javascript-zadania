// Zadnie 2.1
let menuElement = document.querySelector('#menu');
function getDataInfo(element) {
    let result = [];
    for(let nestedMenuElement of menuElement.querySelectorAll('li')) {
        result.push(nestedMenuElement.dataset.info);
    }
    return result;
}

console.log(getDataInfo(menuElement));

// Zadnie 2.2
let mainContainerElement = document.querySelector('#main-contener');
function getElementClass(element) {
    return element.classList.value.split(' ');
}
console.log(getElementClass(mainContainerElement));

// Zdanie 2.3
let pinkColorElement = document.querySelector('.pink-color');
function getElementText(element) {
    return element.textContent; 
}
console.log(getElementText(pinkColorElement));

// Zadnie 2.4
let imageElements = document.querySelectorAll('.images');
function getElementAlt(element) {
    let result = [];
    for(let elem of element) {
        result.push(elem.getAttribute('alt'));
    }
    return result;
}
console.log(getElementAlt(imageElements));

// Zadnie 2.5
let mylinkElements = document.querySelectorAll('.my-link');
function getElementHref(element) {
    let result = [];
    for(let elem of element) {
        result.push(elem.getAttribute('href'));
    }
    return result;
}
console.log(getElementHref(mylinkElements));