document.addEventListener('DOMContentLoaded', function () {

    const array = [2, 15, 268, 288, [358, 2, 14, 256], 586];
    // var sorted= array.sort((a,b)=>a-b);
    // // console.log(sorted);
    // // var newVar = array.flat();
    // // console.log(newVar);
    // newVar.sort((a,b)=>a-b);
    var flat = array.flat();
    flat.sort((a, b) => a - b);
    console.log(flat);
    var newFlat = flat.map((element) => element * 2);
    console.log(newFlat);
    var newVar = newFlat.reduce((a, b) => a * b);
    console.log(newVar);

    // Zadnie 0
    const person = {
        name: "Vlad",
        lastName: "Drăculea",
        yearOfBirth: 1431,
        proffesion: "Lord of Wallachia"
      };
    const whoAreYou = (personArg) => {
        console.log(`My name is ${personArg.name} ${personArg.lastName}.\nI am ${new Date().getFullYear() - personArg.yearOfBirth} years old.\nMy proffesion is ${personArg.proffesion}`);
    }
    whoAreYou(person);
    // Zdanie 1
    const firstNumber = 2, secondNumber = 4;
    console.log(`Suma dwóch liczb ${firstNumber} i ${secondNumber} to: ${firstNumber + secondNumber}`);
    // Zadanie 2
    const myFirstName = 'Jakub';
    console.log(`Moje imię i nazwisko to: ${myFirstName} Dedio`);

    // Zadnie 3
    const writeMultilineText = () => console.log(`"Myślę, że jest wiele piękna\n w posiadaniu problemów.\nTo jeden ze sposobów w jaki się uczymy"\nHerbie Hancock`);
    writeMultilineText();

    // Zadnie 4
    const button = {
        value: "Send message",
        idName: "sendMsg",
        width: "100px",
        padding: "20px",
      }
    
    console.log(`To jest button.\nJego szeroość to ${
        Number.parseInt(button.width) + Number.parseInt(button.padding) + 20
    }px.\nNapis, który w nim widnieje to "${button.value}"`);

})