sayHi(); // tutaj działa, bo JS najpierw "kompiluje" sobie funckje
function sayHi(){
    console.log("Cześć");
}
sayHi(); // tutaj też działa :)
sayWelcome(); // tutaj nie zadziała, bo nie ma zadeklarowanej jeszcze funkcji
let sayWelcome = () => console.log("Witaj");
sayWelcome(); // tutaj działa