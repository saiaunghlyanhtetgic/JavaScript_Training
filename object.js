let person = {
    firstName : "sai aung",
    lastName : "hlyan htet",
    parents : ["U Aung Myint Ko", "Daw Cho Aye"],
    own : {
        car : "Tesla",
        bike : "Mountain Bike"
    },
    describe: function () {
        console.log(`${this.firstName} ${this.lastName} owns ${this.own.car} and also has ${this.own.bike}`);
    }
}

console.log(JSON.stringify(person));
person.describe();