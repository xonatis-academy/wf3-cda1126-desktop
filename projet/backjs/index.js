class Entity {
    id;
}

class Person extends Entity {
    firstname;
    lastname;
}

class Company extends Entity {
    name;
}

class IDataProvider {
    list() {

    }
    search(text) {

    }
}

class BaseProvider extends IDataProvider {
    getData() {

    }

    list() {
        return this.getData();
    }

    search(text) {
        let search = text.toLowerCase();
        let results = [];
        for (const item of this.getData()) {
            if (JSON.stringify(item).toLowerCase().includes(search)) {
                results.push(item);
            }
        }
        return results;
    }
}

class PersonProvider extends BaseProvider {
    getData() {
        let p1 = new Person();
        p1.id = 1;
        p1.firstname = 'Sophie';
        p1.lastname = 'Lozophy';

        
        let p2 = new Person();
        p2.id = 2;
        p2.firstname = 'Annie';
        p2.lastname = 'Versaire';

        
        let p3 = new Person();
        p3.id = 3;
        p3.firstname = 'Paul';
        p3.lastname = 'Ochon';

        return [p1, p2, p3];
    }
}

class CompanyProvider extends BaseProvider {
    getData() {
        let c1 = new Company();
        c1.id = 1;
        c1.name = 'Google';

        let c2 = new Company();
        c2.id = 2;
        c2.name = 'Apple';

        let c3 = new Company();
        c3.id = 3;
        c3.name = 'Microsoft';

        return [c1, c2, c3];
    }
}

class RepositoryService {
    providers;

    constructor(providers) { // c'est qu'on exige lors de l'instanciation des providers : une dépendance
        this.providers = providers;
    }

    list() {
        let accu = [];
        for (const element of this.providers)
        {
            accu = accu.concat(element.list());
        }
        return accu;
    }

    search(text) {
        let accu = [];
        for (const element of this.providers)
        {
            accu = accu.concat(element.search(text));
        }
        return accu;
    }
}

const jose = new PersonProvider();
const sophie = new CompanyProvider();
const bertrand = new RepositoryService([jose, sophie]); // lié au constructor POUR LA CONSTRUCTION

const express = require('express');
const cors = require('cors');

let app = express(); // création du serveur
app.use(cors()); // utilisation de cors : autoriser les requetes HTTP provenant d'une autre origine
app.use(express.json()); // utilisation de json : permettre la communication avec des données au format JSON

// GET (recuperation de données) - list
// POST (envoi de données avec une intention de création) - search (pour l'exemple, habituellement en GET)
// PUT (envoi de données avec une intenion de modification totale)
// PATCH  (envoi de données avec une intenion de modification partielle)
// DELETE (suppression de données)
// HEAD (salutation)
// OPTIONS (demande d'autorisation)

app.get('/', function (req, res) {
    res.send(bertrand.list());
});

/*
Q1 :
Créer un nouveau endpoint qui accepte les requetes en POST (POST http://localhost:4000/search) 
avec une donnée "text" à l'intérieur du payload.
Revoyer les resultats de la recherche utilisant la donnée "text" qui a été envoyée.
Indice : pour récupérer la données "text" du payload : req.body.text
*/

app.post('/search', function(req, res) {
    res.send(bertrand.search(req.body.text));
})

app.listen(4000, function() {
    console.log('Listening on port 4000 haha...')
})
