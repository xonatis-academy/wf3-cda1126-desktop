function Personne(prenom, age) {
    this.prenom = prenom;
    this.age = age;
}
Personne.prototype = {
    avoirFaim: true,
    mangerParLaBouche: function() {
        console.log('Je mange par la bouche');
    }
}

function Voiture(brand) {
    this.brand = brand;
}

const jose = new Personne('Jose', 69);

jose.__proto__ = Voiture.prototype; // danger
console.log(jose.avoirFaim);
