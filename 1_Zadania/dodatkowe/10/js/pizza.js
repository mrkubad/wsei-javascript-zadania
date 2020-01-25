let price = 0;
document.addEventListener("DOMContentLoaded", function () {
    const checkBoxes = Array.from(document.querySelectorAll('input'));

    const toppingBoxes = checkBoxes.splice(1, checkBoxes.length - 2);
    toppingBoxes.forEach(element => element.addEventListener('click', onToppingClicked))

    const checkAllBox = checkBoxes[0];
    checkAllBox.addEventListener('click', checkAll)

    const uncheckAllBox = checkBoxes[checkBoxes.length - 1];
    uncheckAllBox.addEventListener('click', uncheckAll);

    document.forms[0].addEventListener('submit', (event) => {
        event.preventDefault();
    })
 })

 function onToppingClicked() {
    const toppingPrice = Number(this.getAttribute('data-price'));

    price = roundToTwoDecimals(this.checked ? price + toppingPrice : price - toppingPrice);
    checkAllSelection();
    changePriceInfo();
 }

 function checkAll() {
    toggleToppings(this.checked);
    changePriceInfo();
 }

 function toggleToppings(shouldCheck) {
    const checkBoxes = Array.from(document.querySelectorAll('input'));
    const toppingBoxes = checkBoxes.splice(1, checkBoxes.length - 2);

    toppingBoxes.forEach(element => {
        if (element.checked !== shouldCheck){
            const toppingPrice = Number(element.getAttribute('data-price'));
            element.checked = shouldCheck;
            price = shouldCheck ? price + toppingPrice : price - toppingPrice;
            price = roundToTwoDecimals(price)
        }
    })
 }

 function checkAllSelection() {
    const checkBoxes = Array.from(document.querySelectorAll('input'));
    const toppingBoxes = checkBoxes.splice(1, checkBoxes.length - 2);

    const areAllSelected = toppingBoxes.every(box => box.checked === true);

    checkBoxes[0].checked = areAllSelected;
 }

 function uncheckAll(){
    const checkBoxes = Array.from(document.querySelectorAll('input'));
    const uncheckBoxes = checkBoxes.splice(0, checkBoxes.length - 1);

    uncheckBoxes.forEach(box => box.checked = false);
    price = 0;
    changePriceInfo();
    this.checked = false;
 }

 function changePriceInfo() {
    const currentPrice = document.querySelector('#price');
    currentPrice.innerText = `${price} zł`
 }

 function roundToTwoDecimals(number) {    
    return +(Math.round(number + "e+2")  + "e-2");
}