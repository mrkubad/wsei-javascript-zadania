document.addEventListener('DOMContentLoaded', ()=>{
    let counters = [0,0,0];
    document.querySelector('#button1').addEventListener('click',  e => {
        e.target.nextElementSibling.lastElementChild.innerHTML = counters[0]++;
    });
    document.querySelector('#button2').addEventListener('click',  e => {
        e.target.nextElementSibling.lastElementChild.innerHTML = counters[1]++;
    });
    document.querySelector('#button3').addEventListener('click',  e => {
        e.target.nextElementSibling.lastElementChild.innerHTML = counters[2]++;
    });
});