// Zadanie 0
document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.forms[0];
    const clearPreviousError = () => {
        const errorElement = document.querySelector('.error-message');
        while(errorElement.children.length) {
            errorElement.removeChild(errorElement.firstChild);
        }
    };
    const addNewError = (errorMsg) => {
        const errorElement = document.querySelector('.error-message');
        const newElement = document.createElement('p');
        newElement.innerHTML = errorMsg;
        errorElement.appendChild(newElement);
    }

    document.querySelector('.btn.btn-primary').addEventListener('click', e => {
        if(!form['email'].value.includes('@')) {
            addNewError('Email musi posiadać znak @');
            e.preventDefault();
        }
        if(form['name'].value.length < 6) {
            addNewError('Twoje imię jest za krótkie');
            e.preventDefault();
        }
        if(form['surname'].value.length < 6) {
            addNewError('Twoje nazwisko jest za krótkie');
            e.preventDefault();
        }
        const pass1 = form["pass1"].value;
        const pass2 = form["pass2"].value;
      
        if (pass1 !== pass1 && pass1.length !== 0 && pass2.length !== 0) {
          addNewError("Hasła nie są takie same lub puste");
          e.preventDefault();
        }
        if(!form['agree'].checked) {
            addNewError('Musisz zaakceptować warunki');
            e.preventDefault();
        }
    });

});