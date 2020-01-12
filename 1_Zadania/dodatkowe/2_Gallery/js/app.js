  
/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */


document.addEventListener('DOMContentLoaded', () => {
    // Punkt 2
    console.log("Działa!");

    const listElements = document.querySelectorAll('.gallery ul li');
    const pageBody = document.querySelector('body');

    console.table(listElements);
    console.log(pageBody);

    // Punkt 3
    for(let listElement of listElements)
    {
        listElement.firstElementChild.addEventListener('click', function() {
            console.log('działa');
           console.log(this.src); 
           let newDiv = document.createElement('div');
           let imgInsideDiv = document.createElement('img');
           let buttonInsideDiv = document.createElement('button');
           newDiv.classList.add('fullScreen');
           imgInsideDiv.src = this.src;
           buttonInsideDiv.classList.add('close');
           buttonInsideDiv.innerHTML = 'Close';
            // Punkt 6
            buttonInsideDiv.addEventListener('click', ()=> pageBody.removeChild(newDiv));

           newDiv.appendChild(imgInsideDiv);
           newDiv.appendChild(buttonInsideDiv);
           pageBody.appendChild(newDiv);
        });
    }

});

// Punkt 7
// Stronka według mnie działa dobrze. Żadnych problemów nie dostrzegam,
// przycisk zamykający działa - usuwa element utworzony, zamyka powiększenie,
// kliknięcie w obrazek powiększa go, według mnie strona spełnia treść zadania! :)