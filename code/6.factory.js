function creerPersonne(prenom, nom, age) {
    const obj = {
        firstname: prenom,
        lastname: nom,
        age: age
    };
    return obj;
}

let client = creerPersonne('Vicent', 'Time', 20);
console.log(client);