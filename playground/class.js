class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getUserDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

me = new Person("Antoine", 48);
console.log(me);

me.age = 28;
console.log(me);

console.log(me.getUserDescription());
