class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return this.name + ' ' + this.age;
    }
}

class Doctor extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
}

let doctor = new Doctor("John", "30", "surgeo");
console.log(doctor.getInfo());