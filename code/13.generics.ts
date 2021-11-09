class Entity {
    constructor (public id: number, public toKill: boolean) {

    }
}

class Person extends Entity {
    constructor(public id: number, public firstname: string, public lastname: string) {
        super(id, false);
    }
}

class Company extends Entity {
    constructor(public id: number, public name: string) {
        super(id, false);
    }
}

class Killer<T extends Entity> {

    public kill(target: T) {
        target.toKill = true;
    }

}

const jose = new Person(1, 'Jose', 'Fine');
const polluteur = new Company(1, 'Polluter');

const robot = new Killer<Person>();
robot.kill(jose);

console.log(polluteur);