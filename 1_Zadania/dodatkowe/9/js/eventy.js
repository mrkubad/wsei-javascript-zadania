// nie dodajemy DOMContentLoaded, bo script jest importowany na koncu body
const hrefElements = document.querySelectorAll('a');
console.log(hrefElements);

hrefElements[0].addEventListener('click', e => {
    e.target.parentElement.querySelector('.content').style.display = 'block';
});
hrefElements[1].addEventListener('mouseover', e => {
    e.target.parentElement.querySelector('.content').style.display = 'block';
});