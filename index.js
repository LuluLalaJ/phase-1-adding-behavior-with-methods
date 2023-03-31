// Your code here

class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex; 
    }

    speak() {
        return(`${this.name} says meow!`)
    }
}

let lulu = new Cat('lulu', 'male')
console.log(lulu.speak())

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex; 
    }
    speak() {
        return(`${this.name} says woof!`)
    } 
}

let billy = new Dog('billy', 'male')
console.log(billy.speak())

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex; 
    }
    speak() {
        if (this.sex === 'male') {
            return(`It's me! ${this.name}, the parrot!`)
        } else {
        return(`${this.name} says squawk!`)
        }
    }    
}

let chilly = new Bird('chilly', 'male')
console.log(chilly.speak())
