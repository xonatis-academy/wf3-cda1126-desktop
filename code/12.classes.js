class Animal {
    constructor(race) {
        this.race = race;
    }
}

class Chien extends Animal {
    constructor(prenom, race) {
        super(race); // calling the super constructor (Animal.constructror(race))
        this.prenom = prenom;
    }
}

function Animal(race) {
    this.race = race;
}

function Chien(prenom, race) {
    this.race = race;
    this.prenom = prenom;
}
Chien.prototype.__proto__ = Animal.prototype;

const rex = new Chien('Rex', 'Berger');
console.log(rex.__proto__ === Chien.prototype);
console.log(rex.__proto__.__proto__ == Animal.prototype);