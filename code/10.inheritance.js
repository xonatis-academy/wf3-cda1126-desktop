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

const jose = new Personne('Jose', 69); // inheritance
const loo = new Personne('Loo', 17); // inheritance
const lili = new Personne('Lili', 10); // inheritance

jose.nom = 'Arbrus';
jose.mangerParLaBouche = function() {
    console.log('Je mange par les oreilles')
}

loo.__proto__ = jose; // inheritance
lili.__proto__ = jose; // inheritance

loo.mangerParLaBouche();