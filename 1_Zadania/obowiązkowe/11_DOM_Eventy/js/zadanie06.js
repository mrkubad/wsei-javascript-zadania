document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#box').addEventListener('mousemove', e => {
        const divClientRect = e.target.getBoundingClientRect();
        const relativeX = e.clientX - divClientRect.left;
        const relativeY = e.clientY - divClientRect.top;
        document.querySelector('#globalX').innerHTML = e.clientX;
        document.querySelector('#globalY').innerHTML = e.clientY;
        document.querySelector('#localX').innerHTML = relativeX;
        document.querySelector('#localY').innerHTML = relativeY;

    })
});