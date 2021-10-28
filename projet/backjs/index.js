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
    }
}

class CompanyProvider extends BaseProvider {
    getData() {
    }
}

class RepositoryService {
    providers;

    list() {
    }

    search(text) {
    }
}