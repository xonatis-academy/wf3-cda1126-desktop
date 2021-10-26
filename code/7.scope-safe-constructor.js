function Voiture(brand, model) {
    if (!(this instanceof Voiture)) {
        return new Voiture(brand, model);
    }

    this.brand = brand;
    this.model = model;
}

let v = Voiture('Ford', 'Focus');
console.log(v)

// console.log(v instanceof Voiture); // prints true
// Le soucis, nos dev oublie d'utiliser new
// Q2: Comment écrire mon construteur pour palier à ce soucis ?
// -> pour que meme sans "new", le constructeur me renvoie un nouvel objet