// Object Creation in Javascript

// Day 1) bind and this
// let dog = {
//     sound: 'woof',
//     talk: function() {
//         console.log(this.sound)
//     }
// }

// dog.talk() // "woof"
// let talkFunction = dog.talk
// talkFunction() // undefined
// let boundFunction = talkFunction.bind(dog)
// boundFunction() // "woof"

// let button = document.getElementById('myNiceButton')
// button.addEventListener('click', dog.talk.bind(dog))

// Day 2) more exammples of bind and this
// function speak() {
//     console.log(this.sound)
// }

// let boromir = {
//     say: speak,
//     sound: 'one does not simply walk into mordor'
// }
// boromir.say()  // "one does not simply walk into mordor"
// let blabber = boromir.say
// blabber() // undefined

// let gollum = {
//     jabber: boromir.say,
//     sound: 'My precious'
// }
// gollum.jabber() // "My precious"


// Day 3) Prototype Basics

// function talk() {
//     console.log(this.sound)
// }
// let animal = {
//     talk
// }
// let dog = {
//     sound: 'woof!'
// }
// let prarieDog = {
//     howl: function() {
//         console.log(this.sound.toUpperCase())
//     }
// }
// Object.setPrototypeOf(dog, animal)
// animal.talk = function() {
//     console.log('i am a little teapot')
// }
// dog.talk()
// Object.setPrototypeOf(prarieDog, dog)
// prarieDog.howl()

// Day 4) The new keyword

// function Person(saying) {
//     this.saying = saying
// }

// Person.prototype.talk = function() {
//     console.log('I say:', this.saying)
// }

// var crockford = new Person('Semicolons!!!!!')
// crockford.talk()

// // lets recreate new and what it does
// // remember that whenever a function object is created in javascript, it has the prototype property automatically

// function spawn(constructor) {
//     var obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1))
//     return obj
// }
// // this function shows what new is already doing
// // Array.from creates an array from whatever is passed in, in this case, the arguments property.  If you don't remember what that is,
// // console.log(arguments) or check out the 'new' keyword video at 17 min in



// var crockfard = spawn(Person, 'Semicolons!!!')
// crockfard.talk()

// Day 5) __proto__ vs prototype

// prototypes are just objects that delegate to other objects

// let cat = {breed: 'munchkin'}

// let myCat = {name: 'Fluffykins'}

// Object.setPrototypeOf(myCat, cat)

// cat.tailLength = 15

// console.log(myCat.name)

// console.log(myCat.breed)

// console.log(myCat.__proto__)

// as you can see in the console, the __proto__ property on myCat is a reference to the prototype and any changes to the prototype will be reflected within __proto__
// Remember that prototype is a property that is created on functions to allow for the new keyword to instantiate a new object based off the constructor function

// to reiterate, __proto__ is a property on a normal object, prototype is a property of a constructor function

// Day 6) Object.create

// const cat = {
//     makeSound: function() {
//         console.log(this.sound)
//     }
// }

// const mark = Object.create(cat)
// mark.sound = 'mewuuUUF'
// mark.makeSound()
// console.log(mark)

// const waffles = Object.create(cat)
// waffles.sound = 'mrrrrrrrooooooooowwwwwwwwwwww'
// waffles.makeSound()

// console.log('Is mark a cat?', cat.isPrototypeOf(mark))

// // Object.create is more natural to the prototype model than "new" keyword

// // Here is a re-creation of the Object.create method
// function objectCreate(prototype) {
//     const obj = {}
//     Object.setPrototypeOf(obj, prototype)
//     return obj
// }

// Day 7)  Object Creation in JavaScript

// class Mammal {
//     constructor(sound) {
//         this.sound = sound
//     }

//     talk() {
//         return this.sound
//     }
// }

// class Dog extends Mammal {
//     constructor() {
//         super('woffeliwofffffffff') // calls the constructor of the inherited class
//     }
// }

// let fluffykins = new Dog()
// let x = fluffykins.talk()

// console.log(x)

// in JavaScript, Composition is better to use than Inheritance
// in JavaScript, there are no private members
// in JavaScript, classes are syntactic sugar.  It is all smoke and mirrors!

// fizzbuzz practice

// create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5,
// and "fizzbuzz" at multiples of 3 and 5

// function fizzbuzz () {
//     for(let i = 1; i < 101; i++) {
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log('fizzbuzz')
//             continue;
//         }
//         if(i % 3 === 0) {
//             console.log('fizz')
//         }
//         if(i % 5 === 0) {
//             console.log('buzz')
//         }
//     }
// }

// fizzbuzz()

//  arrow function lesson

const dragonEvents = [
    { type: 'attack', value: 12, target: 'dorkman' },
    { type: 'yawn', value: 40 },
    { type: 'eat', target: 'horse' },
    { type: 'attack', value: 23, target: 'fluffykins' },
    { type: 'attack', value: 12, target: 'dorkman' },
]

// const totalDamageOnDorkman = dragonEvents
// .filter(function(event) {
//     return event.type === 'attack'
// })
// .filter(function(event) {
//     return event.target === 'dorkman'
// })
// .map(function(event) {
//     return event.value
// })
// .reduce(function(prev, value) {
//     return (prev || 0) + value
// })

// we can take all of this and simply it into an arrow function

const totalDamageOnDorkman = dragonEvents
.filter(event => event.type === 'attack')  // if you have only one parameter to a function, you can omit the parenthesis around that parameter
.filter((event) => event.target === 'dorkman')
.map((event) => event.value)
.reduce((prev, value) => (prev || 0) + value)

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman)

