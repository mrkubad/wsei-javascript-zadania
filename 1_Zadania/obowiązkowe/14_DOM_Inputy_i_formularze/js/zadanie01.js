// Zadnie 1
document.addEventListener('DOMContentLoaded', () => {
    const checkboxInvoice = document.querySelector('#invoice');
    const showOrHideFromGroup = (checkbox) => {
        const invoiceGroup = document.querySelector('#invoiceData');
        if(!checkbox.checked) {
            invoiceGroup.style.display = 'none';
        }
        else {
            invoiceGroup.style.display = 'block';
        }
    };
    showOrHideFromGroup(checkboxInvoice);
    checkboxInvoice.addEventListener('click', e => {
        showOrHideFromGroup(e.target);
    });
    
});