document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#remove').addEventListener('click', e => {
        document.querySelector('.list').innerHTML = '';
    });
});