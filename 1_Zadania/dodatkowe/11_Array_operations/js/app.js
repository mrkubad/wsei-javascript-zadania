document.addEventListener('DOMContentLoaded', function () {
    // Zadanie 0
    let cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
    let citiesResult = cities.map(e => e.length);
    console.log(citiesResult);
    // Zadanie 1
    function randomize(param1, param2, callback) {
        if(param2 < param1) {
            let t = param1;
            param1 = param2;
            param2 = t;
        }
        let result = Math.floor(Math.random() * (param2 - param1)) + param1;
        if(typeof callback === 'function') {
            callback(result);
        }
    }

    randomize(2, 22, console.log);
    // Zadanie 2
    let animals = ['cat', 'shrimp', 'giraffe'];
    animals.forEach(e => {
        console.log(e);
    });

    // Zadanie 3
    let years = [1995, 1856, 2014, 1987];
    let resultYears = years.map(e => new Date().getFullYear() - e);
    console.table(resultYears);

    // Zadanie 4
    var numbers = [5, 10, 12, 20, 100];
    // 4.1
    var sumOfNumbers = numbers.reduce((prev, curr, index, array) => prev + curr);
    console.log(sumOfNumbers);
    // 4.2
        
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    });
    console.log(result);






})