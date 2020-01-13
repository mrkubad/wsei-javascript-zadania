class MenuGenerator {
    constructor(type, elements) {
        this.type = type;
        this.elements = elements;
    }
    getType() {
        console.log(`Type menu to: ${this.type}`);
    }
    showItems() {
        console.table(this.elements);
    }
}

class HorizontalMenuGenerator extends MenuGenerator {};
class VerticalMenuGenerator extends MenuGenerator {
    animate() {
        console.log(`Animacja w menu typu: ${this.type}`);
    }
};

const hMenuGenetator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
const vMenuGenetator = new VerticalMenuGenerator("vertical", ['home', 'contact']);

hMenuGenetator.getType();
hMenuGenetator.showItems();

vMenuGenetator.getType();
vMenuGenetator.showItems();
vMenuGenetator.animate();