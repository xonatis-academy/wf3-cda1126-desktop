class Voiture {
    static brand = 'Ford';

    rouler() {
        console.log('Je roule');
    }
}

const v = new Voiture();
console.log(Voiture.brand);
