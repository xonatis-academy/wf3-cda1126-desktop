(function() {
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
    
    var moyenneDesAges = (person.age + person2.age + person3.age) / 3;
    
    console.log(`La moyenne des ages est : ${moyenneDesAges}.`);
    
    // Le souci, c'est que les variables person, person2, person3 et moyenneDesAges
    // sont accessibles et modifiables par d'autres scripts inclus apres dans
    // le site internet <script>
    // -> Dire des directives pour que les travaux du dev1 ne peut pas entrer 
    //    en conflit avec d'autres devs
})();