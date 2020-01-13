document.addEventListener('DOMContentLoaded', ()=>{
    // Zadanie 0a
    const parentElements = document.querySelectorAll('.parent');

    for(let parentElement of parentElements) {
        parentElement.addEventListener('mouseover', e => {
            parentElement.lastElementChild.style.display = 'block';
        });
        // parentElement.addEventListener('mouseout', e => {
        //     parentElement.lastElementChild.style.display = 'none';
        // });
    }

    // Zadnie 0b
    for(let parentElement of parentElements) {
            parentElement.addEventListener('mouseout', function(){
                (function hideChildrenElement(elem) {
                    elem.lastElementChild.style.display = 'none';
                })(this);
            });
        }
});