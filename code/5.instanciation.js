function Person() { // initialisateur ou un *constructeur*
    this.firstname = 'Annie';
    this.lastname = 'Versaire';
    this.age = 34;

    // return this; // implicite
}

// PREMIERE METHODE : Utiliser la fonction sur une création de nouvel objet
let obj1 = new Person(); // instanciation
// 1. Création d'un nouveau objet vide (nouveau contexte)
// 2. JS le donne à la fonction sous le nom de "this"
// 3. JS le récupère de la fonction

// DEUXIEME METHODE : Utiliser la fonction sur un objet existant
let obj2 = {
    salaire: 100
};
Person.apply(obj2, []);

console.log(obj2);

