abstract class Entity {
    public id: number;

    constructor(id: number) {
        this.id = id;
    }
}

class Person extends Entity {
    public firstname: string;
    public lastname: string;

    constructor(id: number, firstname: string, lastname: string) {
        super(id);
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class Company extends Entity {
    public name: string;

    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }
}

interface IDataProvider {
    list(): Entity[];
    search(text: string): Entity[];
}

abstract class BaseProvider implements IDataProvider {
    protected abstract getData(): Entity[];

    public list(): Entity[] {
        return this.getData();
    }

    public search(text: string): Entity[] {
        let search: string = text.toLowerCase();
        let results: Entity[] = [];
        for (const item of this.getData()) {
            if (Object.values(item).join(' ').toLowerCase().includes(search)) {
                results.push(item);
            }
        }
        return results;
    }
}

class PersonProvider extends BaseProvider {
    protected getData(): Entity[] {
        let p1 = new Person(1, 'Sophie', 'Lozophy');
        let p2 = new Person(2, 'Annie', 'Versaire');
        let p3 = new Person(3, 'Paul', 'Ochon');
        return [p1, p2, p3];
    }
}

class CompanyProvider extends BaseProvider {
    protected getData(): Entity[] {
        let c1 = new Company(1, 'Google');
        let c2 = new Company(2, 'Apple');
        let c3 = new Company(3, 'Microsoft');
        return [c1, c2, c3];
    }
}

class RepositoryService {
    private providers: IDataProvider[];

    constructor(providers: IDataProvider[]) { // c'est qu'on exige lors de l'instanciation des providers : une dépendance
        this.providers = providers;
    }

    list(): Entity[] {
        let accu: Entity[] = [];
        for (const element of this.providers)
        {
            accu = accu.concat(element.list());
        }
        return accu;
    }

    search(text: string): Entity[] {
        let accu: Entity[] = [];
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

app.get('/', function (req: any, res: any) {
    res.send(bertrand.list());
});

/*
Q1 :
Créer un nouveau endpoint qui accepte les requetes en POST (POST http://localhost:4000/search) 
avec une donnée "text" à l'intérieur du payload.
Revoyer les resultats de la recherche utilisant la donnée "text" qui a été envoyée.
Indice : pour récupérer la données "text" du payload : req.body.text
*/

app.post('/search', function(req: any, res: any) {
    res.send(bertrand.search(req.body.text));
})

app.listen(4000, function() {
    console.log('Listening on port 4000 haha...')
})
