/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('działa');
    let tooltipElements = document.querySelectorAll('.tooltip');
    console.log(tooltipElements);

    for(let tooltipElement of tooltipElements) {
        tooltipElement.addEventListener('mouseover', e => {
            console.log('Rozpoczynasz wędrówkę na lepszej drodze życia');
            let properTooltipElement = document.createElement('span');
            properTooltipElement.classList.add('tooltipText');
            properTooltipElement.innerHTML = e.target.dataset.text;
            e.target.appendChild(properTooltipElement);
        });
        tooltipElement.addEventListener('mouseout', e => {
            console.log('Znowu zszedłeś na psy!');
            //console.log(e.target.dataset.text);
            e.target.removeChild(e.target.lastChild);
        });
    }

    // Punkt 7
    // Wszystko działa spoczko! Nie ma się do czego przyczepić.
    // Ale czy tak ma być? :O

});
