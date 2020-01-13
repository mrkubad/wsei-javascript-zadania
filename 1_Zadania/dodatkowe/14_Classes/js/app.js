// Zadnie 0
class Vehicle {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    whatCanIDo() {
        console.log("I can do anything, because I'm Vehicle");
    }
}

class Boat extends Vehicle {
    whatCanIDo() {
        console.log(`I'm ${this.name} and my color is ${this.color}. I can sail, and can't fly or drive`);
    }
}

class Car extends Vehicle {
    whatCanIDo() {
        console.log(`I'm ${this.name} and my color is ${this.color}. I can drive, and can't fly or sail`);
    }
}

class Plane extends Vehicle {
    whatCanIDo() {
        console.log(`I'm ${this.name} and my color is ${this.color}. I can fly, and can't drive or sail`);
    }
}

const boat = new Boat('red', 'łódeczka');
const car = new Car('blue', 'autko');
const plane = new Plane('purple', 'samolocik');

console.log(boat.whatCanIDo());
console.log(car.whatCanIDo());
console.log(plane.whatCanIDo());


// Zadanie 1
class Kaczka {
    constructor(type = 'zwykla kaczka') {
        this.type = type;
    }
    kwacz() {
        console.log('kwa kwa');
    }
    plywaj() {
        console.log('płynę...');
    }
    wyswietl() {
        console.log(`Wygląda jak ${this.type}`);
    }
    // Zadnie 4
    lec() {
        console.log('Lecę');
    }
}
const kaczucha = new Kaczka();
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();
// Zadnie 2
class DzikaKaczka extends Kaczka {
    constructor() {
        super('dzika');
    }
}
const dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();

// Zadnie 3
class KrzyzowkaKaczka extends Kaczka {
    constructor() {
        super('krzyżówka');
    }
}
const krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();

// Zadnie 5
class GumowaKaczka extends Kaczka {
    constructor() {
        super('gumowa');
    }
    lec() {
        console.log('gumowe kaczki nie potrafią latać :(');
    }
}
const gumowaKaczucha = new GumowaKaczka();
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();