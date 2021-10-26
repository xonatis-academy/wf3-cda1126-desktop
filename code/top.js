const Singleton = (function() {
    function DatabaseManager() {
        this.hostname = 'localhost';
        this.port = 3306;
        this.database = 'soupair_proyekte';
    }
    
    var manager = null;

    function getInstance() {
        if (manager === null) {
            manager = new DatabaseManager();
            manager.constructor = null;
        }
        return manager;
    }

    return {
        getInstance : getInstance
    };
})();

// Le souci : j'ai des projets de centralisation, je veux qu'il n'y ait 1 seul objet
// dans mon système. Le dév se trompe quelques fois et me crée des 
// managers supplémentaires
// -> Q4: Trouvez un technique pour ne pas permettre aux devs d'autres modules de
// pouvoir créer de nouveaux objets à partir de DatabaseManager