// C'est un objet, donc passage par REFERENCE
let person1 = {
    prenom: 'Michael',
    age: 54
};

let person2 = person1;

person2.age = 36;
console.log(person1.age); // prints 36


// C'est un number, donc passage par VALEUR
let person1 = 2;

let person2 = person1;

person2 = 6;
console.log(person1); // prints 2