// Cat class
class Cat{
    constructor(name){
        this.name = name
    }
    speak() {
        return `${this.name} says meow!`
    }
}

let cat = new Cat("Sasha")
console.log(cat.speak())

// Dog class
class Dog{
    constructor(name){
        this.name = name
    }
    speak() {
        return `${this.name} says woof!`
    }
}

let dog = new Dog("Rufio")
console.log(dog.speak())

// Bird class
class Bird{
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        if(this.sex === "male") {
            return `It\'s me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}

let bird = new Bird("Pablo", "male")
let bird2 = new Bird("Mable", "female")

console.log(bird.speak())
console.log(bird2.speak())