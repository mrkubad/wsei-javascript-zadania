// Zadanie 1
const sayHello = () => console.log('Hello World');
sayHello();
// Zadanie 2
const multiplyByTwo = (number = 1) => Number.parseInt(number)*2;
console.log(multiplyByTwo());
console.log(multiplyByTwo(2));
// Zadanie 3
const getBiggerNumber = (param1, param2) => Math.max(param1, param2);
console.log(getBiggerNumber(1,2));
// Zadanie 4
const getSecondMaxNumber = (array) => {
    const biggestNumber = array.indexOf(Math.max(...array));
    array.splice(biggestNumber, 1); //remove biggest number
    return Math.max(...array);
};
const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
// Zadnie 5
console.log(((param) => param)(2));
// Zadnie 6
const sayHelloMultipleTimes = (repeats = 1) => {
   const interval = setInterval(() => {
       console.log('Hello');
       if(repeats == 1) {
            clearInterval(interval);
       }
    repeats--;
   }, 500);
};
sayHelloMultipleTimes();

