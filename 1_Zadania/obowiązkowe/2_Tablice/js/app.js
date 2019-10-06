function distFromAvarage(table) {
    let arraySum = 0;

    table.forEach(element => {
        arraySum += element;
    });

    let arrayAvg = arraySum / table.length;

    let newArray = [];

    table.forEach(element => {
        newArray.push(element - arrayAvg);
    })
    return newArray;
}
distFromAvarage([1,2,3,4,5,6,7]);


// Zad 1.3

function printTable(table) {
    for(let i = 0; i < table.length; ++i) {
        console.log(table[i]);
    }
}

printTable(['1',2,3]);