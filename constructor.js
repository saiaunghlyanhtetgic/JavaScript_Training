function Person(name, age) {
    this.name = name;
    this.age = new Date(age);
    this.getAge = () => {
        let diff = Date.now() - this.age.getTime();
        let age = new Date(diff);
        return age.getUTCFullYear() - 1970
    }
} 

let p1 = new Person("John", "7-09-2000");
console.log(p1.getAge());