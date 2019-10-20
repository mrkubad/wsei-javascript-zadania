//Zadanie 0

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

//Zadanie 1

const fruits = ["banana", "apple", "strawberry", "grape"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//Zadanie 3

const printTable = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
printTable([1, 2, 3, 4]);

//Zadanie 4
const multiply = (array) => {
    let all = 1;
    for(let i = 0; i < array.length; i++){
        all *= array[i];
    }
    return all;
}

multiply([1,2,3,4,5,6,7]);
multiply([1,1,1,1]);
multiply([2,8,3,7]);

//Zadanie 5
const getEvenAvarage = (arr) => {
    let sum = 0;

    let evenArr = [];
    arr.forEach(item => {
        if(item % 2 === 0){
            evenArr.push(item);
            sum += item;
        }
    })
    return sum >0 ? sum / evenArr.length : null;
}

getEvenAvarage([1,2,3,4,5,6,7]);

//Zadanie 6
const sortArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

sortArray([145,11,3,64,4,6,10]);

// Zadanie 7
const addArrays = (arr1, arr2) => {
    let resultArr = [];

    for(let i = 0; i < Math.max(arr1.length, arr2.length); ++i) {
        resultArr.push((arr1[i] == undefined ? 0 : arr1[i]) + (arr2[i] == undefined ? 0 : arr2[i]));
    }
    return resultArr;
}
addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);