"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entity = /** @class */ (function () {
    function Entity(id) {
        this.id = id;
    }
    return Entity;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, firstname, lastname) {
        var _this = _super.call(this, id) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        return _this;
    }
    return Person;
}(Entity));
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    return Company;
}(Entity));
var BaseProvider = /** @class */ (function () {
    function BaseProvider() {
    }
    BaseProvider.prototype.list = function () {
        return this.getData();
    };
    BaseProvider.prototype.search = function (text) {
        var search = text.toLowerCase();
        var results = [];
        for (var _i = 0, _a = this.getData(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (Object.values(item).join(' ').toLowerCase().includes(search)) {
                results.push(item);
            }
        }
        return results;
    };
    return BaseProvider;
}());
var PersonProvider = /** @class */ (function (_super) {
    __extends(PersonProvider, _super);
    function PersonProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonProvider.prototype.getData = function () {
        var p1 = new Person(1, 'Sophie', 'Lozophy');
        var p2 = new Person(2, 'Annie', 'Versaire');
        var p3 = new Person(3, 'Paul', 'Ochon');
        return [p1, p2, p3];
    };
    return PersonProvider;
}(BaseProvider));
var CompanyProvider = /** @class */ (function (_super) {
    __extends(CompanyProvider, _super);
    function CompanyProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompanyProvider.prototype.getData = function () {
        var c1 = new Company(1, 'Google');
        var c2 = new Company(2, 'Apple');
        var c3 = new Company(3, 'Microsoft');
        return [c1, c2, c3];
    };
    return CompanyProvider;
}(BaseProvider));
var RepositoryService = /** @class */ (function () {
    function RepositoryService(providers) {
        this.providers = providers;
    }
    RepositoryService.prototype.list = function () {
        var accu = [];
        for (var _i = 0, _a = this.providers; _i < _a.length; _i++) {
            var element = _a[_i];
            accu = accu.concat(element.list());
        }
        return accu;
    };
    RepositoryService.prototype.search = function (text) {
        var accu = [];
        for (var _i = 0, _a = this.providers; _i < _a.length; _i++) {
            var element = _a[_i];
            accu = accu.concat(element.search(text));
        }
        return accu;
    };
    return RepositoryService;
}());
var jose = new PersonProvider();
var sophie = new CompanyProvider();
var bertrand = new RepositoryService([jose, sophie]); // lié au constructor POUR LA CONSTRUCTION
var express = require('express');
var cors = require('cors');
var app = express(); // création du serveur
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
app.post('/search', function (req, res) {
    res.send(bertrand.search(req.body.text));
});
app.listen(4000, function () {
    console.log('Listening on port 4000 haha...');
});
