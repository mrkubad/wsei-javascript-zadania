let Tree = function(type) {
    this.type = type;
}

let t1 = new Tree('Brzoza');
let t2 = new Tree('Lipa');
let t3 = new Tree('Świerk');

Tree.prototype.bloom = function() {
    return 'I am blooming';
}

console.log(t1.type);
console.log(t2.type);
console.log(t3.type);
console.log(t3.bloom());
