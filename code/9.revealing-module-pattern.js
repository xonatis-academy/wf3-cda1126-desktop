const moduleExports = (function() {
    function Person(firstname, lastname, age) {
        if (!(this instanceof Person)) {
            return new Person(firstname, lastname, age);
        }
    
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    
    var person = new Person('Annie', 'Versaire', 23);
    var person2 = new Person('Vincent', 'Time', 21);
    var person3 = new Person('Jean', 'Aimarre', 34);
    
    var nbPerson = 3;
    var moyenneDesAges = (person.age + person2.age + person3.age) / nbPerson;

    return {
        nbPerson: nbPerson,
        moyenneDesAges: moyenneDesAges
    };
})();


console.log(`La moyenne des ages est : ${moduleExports.moyenneDesAges} pour ${moduleExports.nbPerson} personnes.`);

// Le souci, c'est que chaque module est encapsulé/cloisoné et que les devs
// ne peuvent plus se partager de l'information
// -> Est-ce que vous pouvez me dire comment rendre 
//    disponible moyenneDesAges et nbPerson uniquement 