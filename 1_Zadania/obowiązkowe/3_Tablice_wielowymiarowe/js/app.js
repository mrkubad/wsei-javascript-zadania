
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];


// Zadanie 3

let print2DArray = (arr) => {
    for(let i = 0; i < arr.length; ++i) {
        for(let j = 0; j < arr[i].length; ++j) {
            console.log(arr[i][j]);
        }
    }
}

let printUsingPreviousFnc = () => {
    let arr = [
        [1, 2],
        [2, 3],
        [4, 5],
    ];
    print2DArray(arr);
}
printUsingPreviousFnc();