function Person(name, profession) {
    this.name = name;
    this.profession = profession;
}

Person.prototype.getProps = function() {
    return `${this.name} ${this.profession}`;
}


function Footballer(name, profession) {
    Person.call(this, name, profession);
}

Footballer.prototype = Object.create(Person.prototype);

let fot = new Footballer("Messi", "GOAT");

console.log(fot.getProps());;