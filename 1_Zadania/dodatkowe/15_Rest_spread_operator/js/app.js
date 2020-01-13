document.addEventListener('DOMContentLoaded', ()=>{
    console.log('Dziala');
    // Zadnie 0
    const namesA = ["Zosia", "Marcin", "Kamil"];
    const namesB = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil","Jan", "Karol" ];


    const getAverage = (...elems) => elems.reduce((prev, curr) => prev + curr) / elems.length;
    console.log(getAverage(2,4,5,6,7,79));

    // Zadnie 1
    const nameArray = [..."Jakub"];
    console.log(nameArray);

    // Zadnie 2
    const friuts = ['banana', 'mango', 'kiwi'];
    const vegetables = ['brokoli', 'carrot', 'potato'];
    const mix = [...friuts, ...vegetables];
    console.log(mix);


});