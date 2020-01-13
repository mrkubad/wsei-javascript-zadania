// Zadnie 0a
const [snow,,sun] = ["snow", "rain", "sun"];
console.log(snow);
console.log(sun);

// Zadnie 0b
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}
const {type, autoStart} = slider;
console.log(type);
console.log(autoStart);
// Zadanie 1
const [name1, name2, name3] = ["Jakub", "Kuba", "Kubuś"];
console.log(name1);
console.log(name2);
console.log(name3);

// Zdanie 2
const generateRandomNumbers = () => {
    let result = [];
    for(;result.length !== 5;) {
        result.push(Math.random()*6);
    }
    return result;
}
const [firstNumber, , thirdNumber] = generateRandomNumbers();
console.log(firstNumber);
console.log(thirdNumber);

// Zadnie 4
const getAnimal = () => {return {name: "Mruczek", age: 10, getVoice: () => "miau miau"}};

const {name: catName, getVoice: catVoice} = getAnimal();

console.log(catName);
console.log(catVoice);

