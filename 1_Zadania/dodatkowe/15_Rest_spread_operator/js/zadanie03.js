let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];
function setFunnyName(...name) {
    people = [...people, ...name];
}


const person = {person: "Jakub Dedio", profession: "żul"};
const person2 = {person: "Jakub Dedio", profession: "leń"};

setFunnyName(person, person2);

console.table(people);
