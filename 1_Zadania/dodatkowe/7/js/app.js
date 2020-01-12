// Zadanie 1
function getNumber(number, array) {
    return array.indexOf(number) != -1;
}
console.log(
getNumber(2, [33, 54, 2, 1, 4, 100]),
getNumber(5, [33, 54, 2, 1, 4, 100])
);

// Zadanie 2
function createIdentityMatrix(rows, columns)
{
    let wherePlaceOne = 0;
    let resultArray = [];
    for(let row = 0; row < rows; row++) {
        let rowArray = [];
        for(let column = 0; column < columns; column++) {
            rowArray.push(wherePlaceOne == column ? 1 : 0);
        }
        resultArray.push(rowArray);
        wherePlaceOne++;
    }
    return resultArray;
}
console.log(createIdentityMatrix(4,4));
// Zadanie 3
function sortPlanets(planets) {
    return planets.sort((a, b) => b.numberOfMoons - a.numberOfMoons);
}

console.log(sortPlanets(planets));